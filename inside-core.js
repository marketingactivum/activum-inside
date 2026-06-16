/* ============================================================
   ACTIVUM INSIDE — Núcleo compartido
   Tokens de marca, helpers visuales y modelo de datos.
   ============================================================ */

/* ── Tokens de marca (Activum Design System) ── */
const T = {
  negro: '#1F1D1A',
  negro80: '#4B4845',
  negro50: '#8F8D8C',
  negro20: '#CCCAC9',
  blanco: '#F5F3F2',
  beige0: '#FAF8F7',
  beige1: '#EBE3DB',
  beige2: '#D4C3B3',
  acento: '#8E2D44',
  acentoDark: '#6B1F32',
  acentoLight: '#C06078',
  serif: "'Roboto Serif', Georgia, serif",
  sans: "'Roboto', Helvetica, sans-serif",
  albert: "'Albert Sans', sans-serif"
};

/* ── Eyebrow / kicker label ── */
const Kicker = ({
  children,
  color = T.acento,
  style = {}
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.sans,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color,
    display: 'inline-block',
    ...style
  }
}, children);

/* ── Placeholder de imagen / vídeo ──
   Bloque editorial pendiente de material real. */
const Ph = ({
  label = 'Imagen pendiente',
  note,
  ratio = '16 / 10',
  dark = false,
  radius = 4,
  video = false,
  style = {},
  children
}) => {
  const base = dark ? T.negro : T.beige1;
  const ink = dark ? 'rgba(245,243,242,0.62)' : T.negro50;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      background: base,
      backgroundImage: `url("assets/pattern-${dark ? 'dark' : 'light'}.svg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: dark ? 'rgba(31,29,26,0.55)' : 'rgba(245,243,242,0.55)'
    }
  }), video ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '74px',
      height: '74px',
      borderRadius: '9999px',
      background: T.acento,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 30px rgba(31,29,26,0.28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      marginLeft: '6px',
      borderTop: '13px solid transparent',
      borderBottom: '13px solid transparent',
      borderLeft: `21px solid ${T.blanco}`
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(245,243,242,0.78)' : T.negro80
    }
  }, label)) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      padding: '12px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: ink,
    strokeWidth: "1.4",
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l5-5 4 3.5L16 11l5 5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: ink
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: '10px',
      fontWeight: 300,
      color: ink,
      marginTop: '3px',
      opacity: 0.8
    }
  }, note)), children);
};

/* ── Marca de párrafo pendiente (texto placeholder) ── */
const TextPh = ({
  lines = 3,
  w = '100%'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
    maxWidth: w
  }
}, Array.from({
  length: lines
}).map((_, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    height: '11px',
    borderRadius: '3px',
    background: 'rgba(31,29,26,0.08)',
    width: i === lines - 1 ? '64%' : '100%'
  }
})));

/* ── Icono de marca (inline, stroke currentColor) ── */
const BrandIcon = ({
  n = 1,
  size = 30,
  color = T.negro
}) => {
  const src = `assets/icons/icono-${n}.svg`;
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: "",
    style: {
      display: 'block',
      filter: color === T.blanco ? 'invert(1)' : 'none'
    }
  });
};

/* ============================================================
   MODELO DE DATOS — Las 9 secciones de Activum Inside
   Edición Nº1 · 9 junio 2026
   Titulares y textos = placeholders (se sustituyen al recibir
   el contenido real de cada noticia).
   ============================================================ */

const EDITION = {
  num: 'Nº1',
  date: '9 junio 2026',
  name: 'Activum Inside'
};
const SECTIONS = [{
  id: 'apertura',
  num: '01',
  kind: 'video',
  fixed: true,
  icon: 1,
  section: 'Apertura de Dirección',
  title: 'Activum mira al futuro: crecimiento, diversificación y nuevas oportunidades de negocio',
  dek: 'La directora general, Cristina Balaguer, repasa los principales hitos del trimestre y comparte la visión que está guiando la evolución de la compañía.',
  tone: 'dark'
}, {
  id: 'mundo',
  num: '02',
  kind: 'rsc',
  fixed: false,
  icon: 3,
  section: 'Activum en el Mundo',
  title: 'Kilómetros que se convierten en becas comedor',
  dek: 'Activum se suma a un reto solidario: cada kilómetro recorrido se transforma en becas comedor para Honduras.',
  tone: 'accent'
}, {
  id: 'wellbeing',
  num: '03',
  kind: 'wellbeing',
  fixed: true,
  icon: 4,
  section: 'Wellbeing',
  title: 'Gestiona el estrés del día a día',
  dek: 'Una entrega práctica de Personas y Talento. Desde que te levantas hasta que cierras el ordenador: qué pasa en tu cerebro y cómo gestionarlo.',
  tone: 'light'
}, {
  id: 'cuerpo',
  num: '04',
  kind: 'cuerpo',
  fixed: true,
  icon: 4,
  section: 'El cuerpo también trabaja',
  title: 'Por qué moverse cambia cómo piensas, no solo cómo te sientes',
  dek: 'Segunda entrega de bienestar de Personas y Talento: el movimiento como palanca de claridad mental.',
  tone: 'light'
}, {
  id: 'beneficios',
  num: '05',
  kind: 'beneficios',
  fixed: false,
  icon: 5,
  section: 'Beneficios para Empleados',
  title: 'Este trimestre, ahorra en grande',
  dek: 'Moda, tecnología, viajes, formación y mucho más en la plataforma de descuentos para empleados.',
  tone: 'light'
}, {
  id: 'primera',
  num: '06',
  kind: 'entrevista',
  fixed: true,
  icon: 1,
  section: 'En Primera Persona',
  title: 'De una granja de caracoles a liderar nuestros sistemas',
  dek: 'Antes de ponerse al frente de Sistemas, Daniel Ovejero pasó por etapas muy distintas. Una trayectoria marcada por la adaptación constante.',
  tone: 'light'
}, {
  id: 'bitabit',
  num: '07',
  kind: 'bitabit',
  fixed: true,
  icon: 2,
  section: 'Bit a Bit',
  title: 'Antes de hacer clic: guía rápida para detectar fraudes',
  dek: 'Varios compañeros han recibido mensajes sospechosos. Claves para identificar el phishing y actuar antes de que se convierta en un problema.',
  tone: 'dark'
}, {
  id: 'galeria',
  num: '08',
  kind: 'galeria',
  fixed: true,
  icon: 3,
  section: 'Galería Activum',
  title: 'Los mejores momentos del equipo, en imágenes',
  dek: 'Eventos, encuentros y recuerdos compartidos del trimestre.',
  tone: 'light'
}, {
  id: 'voz',
  num: '09',
  kind: 'buzon',
  fixed: true,
  icon: 4,
  section: 'Activum Lab',
  title: '¿Y tú qué opinas?',
  dek: 'Un espacio abierto para compartir ideas, propuestas y sugerencias que nos ayuden a mejorar como compañía.',
  tone: 'light'
}];

/* ── Banner de "publicidad" interna (promoción comercializada) ── */
const PROMOS = [{
  id: 'lanucia',
  kind: 'promo',
  section: 'La Nucía One',
  promo: true,
  icon: 3,
  title: 'Una oportunidad para la familia Activum',
  dek: 'Si buscas vivienda en la Costa Blanca —o conoces a alguien que pueda estar interesado—, descubre La Nucía One, una de las promociones que comercializamos.',
  tone: 'accent'
}];
const ALL = [...SECTIONS, ...PROMOS];
const getSection = id => ALL.find(s => s.id === id);

/* ── Hueco subible (image-slot con estética editorial) ──
   Click/arrastra para subir tu propia imagen. Persiste por id. */
const Slot = ({
  id,
  ratio = '16 / 10',
  label = 'Sube una imagen',
  dark = false,
  radius = 4,
  shape = 'rounded',
  style = {}
}) => React.createElement('image-slot', {
  id,
  shape,
  radius: String(radius),
  fit: 'cover',
  placeholder: label,
  style: {
    display: 'block',
    width: '100%',
    height: 'auto',
    aspectRatio: ratio,
    '--slot-bg': dark ? T.negro : T.beige1,
    '--slot-ink': dark ? 'rgba(245,243,242,0.7)' : T.negro50,
    ...style
  }
});

/* ── Hook de breakpoint ── */
const useIsMobile = () => {
  const [mobile, setMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const h = () => setMobile(window.innerWidth < 700);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return mobile;
};
Object.assign(window, {
  T,
  Kicker,
  Ph,
  TextPh,
  BrandIcon,
  Slot,
  EDITION,
  SECTIONS,
  PROMOS,
  getSection,
  useIsMobile
});
