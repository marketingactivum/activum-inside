/* ============================================================
   ACTIVUM INSIDE — App shell (Masthead, Sidebar, App)
   ============================================================ */

const HEADER_H = 92;
const HEADER_H_MOB = 60;
const NAV_W = 290;

/* ════════ Cabecera superior (a todo el ancho) ════════ */
const Masthead = ({ go, menuOpen, setMenuOpen }) => {
  const mob = useIsMobile();
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0,
      height: (mob ? HEADER_H_MOB : HEADER_H) + 'px',
      zIndex: 60, background: T.blanco, borderBottom: `1px solid ${T.beige2}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: mob ? '0 16px' : '0' }}>

      {mob ? (
        <>
          <div onClick={() => go('portada')} style={{ cursor: 'pointer', display: 'flex',
            alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontFamily: T.albert, fontSize: '22px', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase', color: T.negro }}>Activum</span>
            <span style={{ fontFamily: T.serif, fontSize: '22px', fontWeight: 300,
              fontStyle: 'italic', color: T.negro }}>Inside</span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                  stroke={T.negro} strokeWidth="2" strokeLinecap="round">
                  <path d="M3 3l16 16M19 3L3 19"/>
                </svg>
              : [0,1,2].map(i => <span key={i} style={{ display: 'block', width: '22px',
                  height: '2px', background: T.negro, borderRadius: '2px' }} />)
            }
          </button>
        </>
      ) : (
        <>
          <div onClick={() => go('portada')}
            style={{ width: NAV_W + 'px', flexShrink: 0, display: 'flex', alignItems: 'center',
              padding: '0 26px', cursor: 'pointer' }}>
            <img src="assets/logo-positive.svg" alt="Activum" style={{ height: '54px', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
            alignItems: 'flex-end', textAlign: 'right', padding: '0 36px' }}>
            <div style={{ fontFamily: T.sans, fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: T.negro, whiteSpace: 'nowrap' }}>Edición {EDITION.num}</div>
            <div style={{ fontFamily: T.sans, fontSize: '11px', fontWeight: 300, color: T.negro50,
              marginTop: '4px', whiteSpace: 'nowrap' }}>{EDITION.date}</div>
          </div>
          <div onClick={() => go('portada')}
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
              cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: '9px' }}>
            <span style={{ fontFamily: T.albert, fontSize: '32px', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase', color: T.negro }}>Activum</span>
            <span style={{ fontFamily: T.serif, fontSize: '32px', fontWeight: 300,
              fontStyle: 'italic', color: T.negro, letterSpacing: '0.01em' }}>Inside</span>
          </div>
        </>
      )}
    </header>
  );
};

/* ════════ Menú lateral ════════ */
const navItemStyle = (active) => ({
  width: '100%', textAlign: 'left', display: 'flex', gap: '12px', alignItems: 'baseline',
  background: active ? 'rgba(142,45,68,0.28)' : 'transparent', border: 'none',
  borderLeft: active ? `3px solid ${T.acento}` : '3px solid transparent',
  cursor: 'pointer', padding: '11px 23px', transition: 'background 200ms',
});
const sectionLabel = {
  fontFamily: T.sans, fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: 'rgba(245,243,242,0.4)', padding: '16px 26px 8px',
};

const Sidebar = ({ view, go, open, setOpen }) => {
  const mob = useIsMobile();
  const NavBtn = ({ s, mark }) => {
    const active = view === s.id;
    return (
      <button onClick={() => { go(s.id); if (mob) setOpen(false); }}
        style={navItemStyle(active)}
        onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(245,243,242,0.06)'; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
        <span style={{ fontFamily: T.serif, fontSize: '13px', fontWeight: 400,
          color: active ? T.acentoLight : (mark ? T.acentoLight : 'rgba(245,243,242,0.45)'),
          minWidth: '18px', fontVariantNumeric: 'tabular-nums' }}>{mark || s.num}</span>
        <span style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: active ? 500 : 300,
          color: active ? T.blanco : 'rgba(245,243,242,0.78)', lineHeight: 1.3 }}>
          {s.section}
        </span>
      </button>
    );
  };

  if (mob && !open) return null;

  const sidebarStyle = mob
    ? { position: 'fixed', top: HEADER_H_MOB + 'px', left: 0, right: 0, bottom: 0,
        zIndex: 55, background: T.negro,
        backgroundImage: 'url("assets/pattern-dark.svg")', backgroundSize: '420px' }
    : { position: 'fixed', top: HEADER_H + 'px', left: 0, bottom: 0, width: NAV_W + 'px',
        background: T.negro, backgroundImage: 'url("assets/pattern-dark.svg")',
        backgroundSize: '420px', zIndex: 50 };

  return (
    <aside style={sidebarStyle}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(31,29,26,0.90)' }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column',
        height: '100%', overflowY: 'auto', paddingBottom: '24px' }}>
        {!mob && <div style={{ fontFamily: T.serif, fontSize: '20px', fontWeight: 300, color: T.blanco,
          padding: '24px 26px 6px' }}>Menú</div>}
        <div style={sectionLabel}>Sumario</div>
        <nav style={{ flexShrink: 0 }}>
          {SECTIONS.map(s => <NavBtn key={s.id} s={s} />)}
        </nav>
        <div style={sectionLabel}>Promoción</div>
        {PROMOS.map(s => <NavBtn key={s.id} s={s} mark="◆" />)}
      </div>
    </aside>
  );
};

/* ════════ App ════════ */
const App = () => {
  const mob = useIsMobile();
  const [view, setView] = React.useState('portada');
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.va) window.va('pageview', { route: '/' + view });
  }, [view]);

  const go = v => {
    setView(v);
    setMenuOpen(false);
  };

  const headerH = mob ? HEADER_H_MOB : HEADER_H;

  return (
    <div>
      <Masthead go={go} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar view={view} go={go} open={menuOpen} setOpen={setMenuOpen} />
      <main id="main-scroll" style={{ marginLeft: mob ? 0 : NAV_W + 'px', paddingTop: headerH + 'px',
        minHeight: '100vh', background: T.blanco }}>
        <div key={view}
          style={{ maxWidth: '1080px', margin: '0 auto',
            padding: mob ? '24px 16px 60px' : '44px 56px 80px' }}>
          {view === 'portada'
            ? <Portada go={go} />
            : <Article id={view} go={go} />}
        </div>
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
