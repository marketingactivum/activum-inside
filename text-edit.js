/* ============================================================
   ACTIVUM INSIDE — Edición directa de textos (persistente)
   Sanitiza con DOMPurify antes de aplicar innerHTML.
   ============================================================ */
(function () {
  'use strict';
  const FILE = '.text-edits.state.json';
  const sanitize = html =>
    window.DOMPurify ? window.DOMPurify.sanitize(html) : html;

  let store = {};
  const canWrite = () => !!(window.omelette && window.omelette.writeFile);

  fetch(FILE).then(r => r.ok ? r.json() : null).then(j => {
    if (j && typeof j === 'object') store = j;
    instrument();
  }).catch(() => {});

  let saveT = null;
  function save() {
    if (!canWrite()) return;
    clearTimeout(saveT);
    saveT = setTimeout(() => {
      try { window.omelette.writeFile(FILE, JSON.stringify(store)); } catch (_e) {}
    }, 400);
  }

  const INLINE = new Set(['A','B','I','EM','STRONG','SPAN','BR','U','SMALL','SUP','SUB','MARK']);
  function collect(node, out) {
    for (const el of node.children) {
      const tag = el.tagName;
      if (tag === 'IMAGE-SLOT' || tag === 'IMG' || tag === 'SVG' || tag === 'INPUT' ||
          tag === 'TEXTAREA' || tag === 'SELECT') continue;
      const kids = [...el.children];
      const inlineOnly = kids.every(c => INLINE.has(c.tagName));
      const hasText = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
      if (hasText && inlineOnly) out.push(el);
      else collect(el, out);
    }
    return out;
  }

  const viewKey = () => localStorage.getItem('inside_view') || 'portada';
  const content = () => {
    const m = document.getElementById('main-scroll');
    return m && m.firstElementChild;
  };

  let applying = false;
  function instrument() {
    const root = content(); if (!root) return;
    const editing = canWrite() && document.body.classList.contains('editing');
    const vk = viewKey();
    applying = true;
    collect(root, []).forEach((el, i) => {
      const tid = vk + '::' + i;
      el.dataset.tid = tid;
      if (store[tid] != null && document.activeElement !== el && el.innerHTML !== store[tid]) {
        el.innerHTML = sanitize(store[tid]);
      }
      if (editing) el.setAttribute('contenteditable', 'true');
      else el.removeAttribute('contenteditable');
    });
    applying = false;
  }

  document.addEventListener('input', e => {
    const el = e.target.closest && e.target.closest('[data-tid][contenteditable="true"]');
    if (el) { store[el.dataset.tid] = el.innerHTML; save(); }
  });

  document.addEventListener('click', e => {
    if (!document.body.classList.contains('editing')) return;
    const t = e.target;
    if (t.closest && t.closest('[contenteditable="true"]')) {
      e.stopPropagation();
      const a = t.closest('a'); if (a) e.preventDefault();
    }
  }, true);

  let obsT = null;
  function watch() {
    const m = document.getElementById('main-scroll');
    if (!m) { setTimeout(watch, 150); return; }
    new MutationObserver(() => {
      if (applying) return;
      clearTimeout(obsT);
      obsT = setTimeout(instrument, 80);
    }).observe(m, { childList: true, subtree: true, characterData: true });
    instrument();
  }
  watch();

  if (canWrite()) {
    const btn = document.createElement('button');
    btn.id = 'edit-toggle';
    const label = () => {
      btn.textContent = document.body.classList.contains('editing') ? '✓ Hecho' : '✎ Editar textos';
    };
    if (localStorage.getItem('inside_editing') === '1') document.body.classList.add('editing');
    btn.onclick = () => {
      document.body.classList.toggle('editing');
      localStorage.setItem('inside_editing', document.body.classList.contains('editing') ? '1' : '0');
      label(); instrument();
    };
    document.body.appendChild(btn);
    label();
  }
})();
