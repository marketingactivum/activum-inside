/**
 * Omelette polyfill — localStorage-backed state persistence.
 *
 * In the Claude Design environment, window.omelette provides server-side
 * file read/write for persisting image uploads and text edits. This polyfill
 * replaces that with localStorage so Activum Inside works as a standalone
 * app on any web server (Vercel, GitHub Pages, intranet, file://).
 *
 * Two sidecar files are intercepted:
 *   .image-slots.state.json  — user-uploaded images (base64, downscaled)
 *   .text-edits.state.json   — inline text edits
 */
(function () {
  'use strict';
  var NS = 'activum_inside:';
  var SIDECARS = new Set(['.image-slots.state.json', '.text-edits.state.json']);

  /* ── window.omelette.writeFile ── */
  window.omelette = {
    writeFile: function (path, content) {
      var key = NS + path.replace(/^.*[\\/]/, ''); // basename only
      try {
        localStorage.setItem(key, content);
      } catch (e) {
        // Quota exceeded or private-browsing — fail silently
        console.warn('[Activum Inside] localStorage write failed for "' + path + '":', e);
      }
    }
  };

  /* ── fetch() intercept for sidecar files ── */
  var _fetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : ((input && input.url) || '');
    var basename = url.replace(/^.*[\\/]/, '');
    if (SIDECARS.has(basename)) {
      var stored = localStorage.getItem(NS + basename);
      if (stored) {
        // localStorage tiene prioridad (edición local)
        var parsed = null;
        try { parsed = JSON.parse(stored); } catch (_e) { /* ignore */ }
        return Promise.resolve({
          ok: true,
          json: function () { return Promise.resolve(parsed); },
          text: function () { return Promise.resolve(stored); }
        });
      }
      // Sin localStorage → intentar fetch real al servidor (estado commiteado)
      return _fetch(input, init).catch(function () {
        return { ok: false, json: function () { return Promise.resolve(null); }, text: function () { return Promise.resolve(''); } };
      });
    }
    return _fetch(input, init);
  };
})();
