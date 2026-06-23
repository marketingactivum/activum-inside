/* ============================================================
   ACTIVUM INSIDE — Portada (índice / punto de entrada)
   Maqueta tipo home de medio digital. El vídeo de dirección
   domina el espacio principal.
   ============================================================ */

/* ── Tarjeta de portada (imagen subible + titular navegable) ── */
const FrontCard = ({
  s,
  go,
  size = 'md',
  imgId,
  imgSrc
}) => {
  const [hov, setHov] = React.useState(false);
  const conf = {
    sm: {
      ratio: '16 / 11',
      title: '19px',
      titleLh: 1.22
    },
    md: {
      ratio: '16 / 10',
      title: '23px',
      titleLh: 1.2
    },
    lg: {
      ratio: '16 / 9',
      title: '30px',
      titleLh: 1.14
    }
  }[size];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go(s.id),
    style: {
      cursor: 'pointer'
    }
  }, imgSrc ? /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: s.title,
    style: {
      width: '100%',
      aspectRatio: conf.ratio,
      objectFit: 'cover',
      display: 'block',
      borderRadius: '4px'
    }
  }) : /*#__PURE__*/React.createElement(Slot, {
    id: imgId || `front-${s.id}`,
    ratio: conf.ratio,
    dark: s.tone === 'dark',
    radius: 4,
    label: "Sube una imagen"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => go(s.id),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      paddingTop: '14px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, s.num, " \xB7 ", s.section), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: T.serif,
      fontSize: conf.title,
      fontWeight: 400,
      lineHeight: conf.titleLh,
      letterSpacing: '-0.01em',
      color: T.negro,
      margin: '9px 0 0',
      textDecoration: hov ? 'underline' : 'none',
      textDecorationColor: T.negro20,
      textUnderlineOffset: '4px'
    }
  }, s.title), size !== 'sm' && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: 1.6,
      color: T.negro80,
      margin: '10px 0 0',
      maxWidth: '52ch'
    }
  }, s.dek)));
};

/* ── Lista compacta (columna derecha del lead) ── */
const FrontListItem = ({
  s,
  go,
  last
}) => {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: () => go(s.id),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '1fr 96px',
      gap: '16px',
      alignItems: 'start',
      padding: '18px 0',
      borderBottom: last ? 'none' : `1px solid ${T.beige2}`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento,
    style: {
      fontSize: '10px'
    }
  }, s.num, " \xB7 ", s.section), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: T.serif,
      fontSize: '17px',
      fontWeight: 400,
      lineHeight: 1.24,
      letterSpacing: '-0.01em',
      color: T.negro,
      margin: '7px 0 0',
      textDecoration: hov ? 'underline' : 'none',
      textDecorationColor: T.negro20,
      textUnderlineOffset: '3px'
    }
  }, s.title)), /*#__PURE__*/React.createElement(Ph, {
    ratio: "1 / 1",
    label: "",
    note: "",
    radius: 3,
    dark: s.tone === 'dark',
    style: {
      marginTop: '2px'
    }
  }));
};

/* ── Fila editorial grande (imagen subible + texto navegable) ── */
const LeadRow = ({
  s,
  go,
  imageSide = 'left',
  imgId,
  imgSrc
}) => {
  const mob = useIsMobile();
  const [hov, setHov] = React.useState(false);
  const isVideo = s.kind === 'video';
  const image = /*#__PURE__*/React.createElement("div", {
    onClick: () => go(s.id),
    style: {
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, imgSrc ? /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: s.title,
    style: {
      width: '100%',
      aspectRatio: '16 / 10',
      objectFit: 'cover',
      display: 'block',
      borderRadius: '4px'
    }
  }) : /*#__PURE__*/React.createElement(Slot, {
    id: imgId,
    ratio: "16 / 10",
    dark: s.tone === 'dark',
    radius: 4,
    label: isVideo ? 'Sube el póster del vídeo' : 'Sube una imagen'
  }), isVideo && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: T.acento,
      color: T.blanco,
      padding: '6px 12px',
      borderRadius: '9999px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: `8px solid ${T.blanco}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, "V\xEDdeo")));
  const text = /*#__PURE__*/React.createElement("div", {
    onClick: () => go(s.id),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: mob ? '0' : imageSide === 'left' ? '0 0 0 8px' : '0 8px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, s.num, " \xB7 ", s.section), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: T.serif,
      fontSize: mob ? '26px' : 'clamp(30px, 3.4vw, 42px)',
      fontWeight: 300,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: T.negro,
      margin: '12px 0 0',
      textDecoration: hov ? 'underline' : 'none',
      textDecorationColor: T.negro20,
      textUnderlineOffset: '6px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: 1.65,
      color: T.negro80,
      margin: '14px 0 0',
      maxWidth: '42ch'
    }
  }, s.dek));
  if (mob) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, image, text);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: imageSide === 'left' ? '1.4fr 1fr' : '1fr 1.4fr',
      gap: '44px',
      alignItems: 'center'
    }
  }, imageSide === 'left' ? /*#__PURE__*/React.createElement(React.Fragment, null, image, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, image));
};

/* ── Banner publicitario de Beneficios (no es noticia) ── */
const BeneficiosBanner = ({
  s,
  go
}) => {
  const mob = useIsMobile();
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go(s.id),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      cursor: 'pointer',
      position: 'relative',
      borderRadius: '6px',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: mob ? '1fr' : '200px 1fr',
      minHeight: mob ? 'auto' : '110px',
      boxShadow: '0 3px 16px rgba(31,29,26,0.12)'
    }
  }, !mob && /*#__PURE__*/React.createElement("img", {
    src: "assets/beneficios.webp",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.acento,
      display: 'flex',
      flexDirection: mob ? 'column' : 'row',
      alignItems: mob ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: mob ? '14px' : '24px',
      padding: mob ? '20px 24px 20px' : '18px 32px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, !mob && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      right: '-20px',
      width: '90px',
      height: '90px',
      borderRadius: '9999px',
      background: T.beige2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(8deg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: T.negro,
      marginTop: '14px'
    }
  }, "HASTA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontSize: '24px',
      fontWeight: 500,
      color: T.acentoDark,
      lineHeight: 0.9
    }
  }, "\u221260%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: mob ? '0.06em' : '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(245,243,242,0.78)',
      whiteSpace: mob ? 'normal' : 'nowrap'
    }
  }, "Ventajas para empleados"), mob && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 700,
      color: T.acentoDark,
      background: T.beige2,
      padding: '2px 8px',
      borderRadius: '4px'
    }
  }, "HASTA \u221260%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: mob ? '18px' : '20px',
      fontWeight: 400,
      color: T.blanco,
      marginTop: '4px',
      lineHeight: 1.1
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 400,
      color: 'rgba(245,243,242,0.75)',
      marginTop: '4px',
      letterSpacing: '0.04em'
    }
  }, "Moda \xB7 Tecnolog\xEDa \xB7 Viajes \xB7 Ocio \xB7 Formaci\xF3n")), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: T.acento,
      background: hov ? T.beige1 : T.blanco,
      padding: '10px 22px',
      borderRadius: '4px',
      transition: 'background 200ms',
      marginRight: mob ? '0' : '16px'
    }
  }, "Ver descuentos \u2192")));
};

/* ── Portada ── */
const Portada = ({
  go
}) => {
  const mob = useIsMobile();
  const apertura = getSection('apertura');
  const mundo = getSection('mundo');
  const beneficios = getSection('beneficios');
  const grid = ['wellbeing', 'cuerpo', 'primera', 'bitabit'].map(getSection);
  const galeria = getSection('galeria');
  const voz = getSection('voz');
  const lanucia = getSection('lanucia');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mob ? '32px' : '48px',
      paddingBottom: mob ? '32px' : '48px',
      borderBottom: `1px solid ${T.beige2}`,
      marginBottom: mob ? '28px' : '44px'
    }
  }, /*#__PURE__*/React.createElement(LeadRow, {
    s: apertura,
    go: go,
    imageSide: "left",
    imgSrc: "assets/cristina-thumbnail.jpg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.beige1,
      borderRadius: '10px',
      padding: mob ? '16px' : '28px 32px',
      border: `1px solid ${T.beige2}`
    }
  }, /*#__PURE__*/React.createElement(LeadRow, {
    s: mundo,
    go: go,
    imageSide: "right",
    imgSrc: "assets/mundo-portada.png"
  }))), /*#__PURE__*/React.createElement(BeneficiosBanner, {
    s: beneficios,
    go: go
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: T.negro50,
      display: 'block',
      margin: mob ? '28px 0 16px' : '44px 0 24px'
    }
  }, "Tambi\xE9n en este n\xFAmero"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mob ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: mob ? '20px 14px' : '24px 20px',
      paddingBottom: mob ? '28px' : '44px',
      borderBottom: `1px solid ${T.beige2}`,
      marginBottom: mob ? '28px' : '44px'
    }
  }, grid.map(s => /*#__PURE__*/React.createElement(FrontCard, {
    key: s.id,
    s: s,
    go: go,
    size: "sm",
    imgSrc: s.id === 'primera' ? 'assets/daniel-portada.jpg' : s.id === 'wellbeing' ? 'assets/estres.jpg' : s.id === 'cuerpo' ? 'assets/estirar.jpg' : s.id === 'bitabit' ? 'assets/ciberseguridad.jpg' : undefined
  }))), /*#__PURE__*/React.createElement(LaNuciaBanner, {
    s: lanucia,
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: mob ? '28px 0' : '44px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go(galeria.id),
    style: {
      cursor: 'pointer',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, galeria.num, " \xB7 ", galeria.section), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: T.serif,
      fontSize: mob ? '22px' : '28px',
      fontWeight: 400,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      color: T.negro,
      margin: '9px 0 16px',
      maxWidth: '24ch'
    }
  }, galeria.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mob ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '8px'
    }
  }, [{
    n: 1,
    pos: 'center 65%'
  }, {
    n: 2,
    pos: 'center center'
  }, {
    n: 3,
    pos: 'center 40%'
  }, {
    n: 4,
    pos: 'center 35%'
  }].map(({
    n,
    pos
  }) => /*#__PURE__*/React.createElement("img", {
    key: n,
    src: `assets/galeria/gal-${n}.jpg`,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      objectFit: 'cover',
      objectPosition: pos,
      borderRadius: '3px',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement(BuzonStrip, {
    s: voz,
    go: go
  }));
};

/* ── Banner de promoción (La Nucía One) ── */
const LaNuciaBanner = ({
  s,
  go
}) => {
  const mob = useIsMobile();
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mob ? '1fr' : '1.15fr 1fr',
      background: T.beige1,
      borderRadius: '6px',
      overflow: 'hidden',
      border: `1px solid ${T.beige2}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/video-lanucia-one.png",
    alt: "La Nuc\xEDa One",
    style: {
      width: '100%',
      aspectRatio: mob ? '16 / 7' : 'auto',
      height: mob ? 'auto' : '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: () => go(s.id),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      cursor: 'pointer',
      padding: '36px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "Promoci\xF3n destacada"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: T.serif,
      fontSize: '27px',
      fontWeight: 400,
      lineHeight: 1.18,
      letterSpacing: '-0.01em',
      color: T.negro,
      margin: '12px 0 12px',
      textDecoration: hov ? 'underline' : 'none',
      textDecorationColor: T.negro20,
      textUnderlineOffset: '5px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: 1.6,
      color: T.negro80,
      margin: '0 0 22px'
    }
  }, s.dek), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: T.blanco,
      background: hov ? T.acentoDark : T.acento,
      padding: '12px 24px',
      borderRadius: '4px',
      transition: 'background 200ms'
    }
  }, "M\xE1s informaci\xF3n")));
};

/* ── Franja del buzón en portada ── */
const BuzonStrip = ({
  s,
  go
}) => {
  const mob = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden',
      background: T.negro,
      backgroundImage: 'url("assets/activum-lab.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: mob ? 'rgba(31,29,26,0.82)' : 'linear-gradient(90deg, rgba(31,29,26,0.9) 0%, rgba(31,29,26,0.55) 38%, rgba(31,29,26,0.15) 60%, rgba(31,29,26,0.45) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: mob ? '28px 24px' : '44px 44px',
      minHeight: mob ? 'auto' : '150px',
      display: 'flex',
      flexDirection: mob ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: mob ? 'flex-start' : 'center',
      gap: mob ? '20px' : '32px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acentoLight
  }, s.num, " \xB7 ", s.section), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: T.serif,
      fontSize: mob ? '24px' : '27px',
      fontWeight: 300,
      color: T.blanco,
      margin: '10px 0 0',
      lineHeight: 1.2
    }
  }, s.title)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(s.id),
    style: {
      flexShrink: 0,
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      background: T.acento,
      color: T.blanco,
      padding: '14px 28px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 200ms'
    },
    onMouseEnter: e => e.currentTarget.style.background = T.acentoDark,
    onMouseLeave: e => e.currentTarget.style.background = T.acento
  }, "Participar")));
};
Object.assign(window, {
  Portada,
  FrontCard
});
