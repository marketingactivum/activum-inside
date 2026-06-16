function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================
   ACTIVUM INSIDE — Vistas de noticia (las 9 secciones)
   Cada sección tiene su propia maqueta editorial.
   ============================================================ */

/* ── Cabecera común de artículo ── */
const ArticleHeader = ({
  s,
  wide = false
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    maxWidth: wide ? 'none' : '760px',
    marginBottom: '36px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '20px'
  }
}, s.num && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.serif,
    fontSize: '40px',
    fontWeight: 300,
    color: T.beige2,
    lineHeight: 1
  }
}, s.num), s.num && /*#__PURE__*/React.createElement("div", {
  style: {
    height: '28px',
    width: '1px',
    background: T.beige2
  }
}), /*#__PURE__*/React.createElement(Kicker, {
  color: T.acento
}, s.section, s.promo ? ' · Promoción destacada' : '')), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.serif,
    fontSize: 'clamp(34px, 4.4vw, 54px)',
    fontWeight: 300,
    lineHeight: 1.08,
    letterSpacing: '-0.02em',
    color: T.negro,
    margin: 0
  }
}, s.title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.serif,
    fontSize: '20px',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: 1.5,
    color: T.negro80,
    margin: '20px 0 0',
    maxWidth: '60ch'
  }
}, s.dek));

/* ── Nota de material pendiente ── */
const PendingNote = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    background: T.beige0,
    border: `1px dashed ${T.beige2}`,
    borderRadius: '4px',
    padding: '14px 18px',
    margin: '28px 0'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.sans,
    fontSize: '9px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: T.blanco,
    background: T.acento,
    padding: '4px 8px',
    borderRadius: '3px',
    flexShrink: 0,
    marginTop: '1px'
  }
}, "Pendiente"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '13px',
    fontWeight: 300,
    lineHeight: 1.55,
    color: T.negro80,
    margin: 0
  }
}, children));

/* ════════ 01 · Apertura de Dirección (vídeo + hitos) ════════ */
const AperturaBody = () => {
  const hitos = [{
    mes: 'Ene 2026',
    titulo: 'Título del hito (máx. 6 palabras)'
  }, {
    mes: 'Feb 2026',
    titulo: 'Título del hito (máx. 6 palabras)'
  }, {
    mes: 'Mar 2026',
    titulo: 'Título del hito (máx. 6 palabras)'
  }, {
    mes: 'Abr 2026',
    titulo: 'Título del hito (máx. 6 palabras)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '900px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "aperturaMain",
    ratio: "4 / 3",
    dark: true,
    radius: 6,
    label: "Sube el p\xF3ster del v\xEDdeo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
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
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: '32px',
      alignItems: 'start',
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.beige0,
      border: '1px solid rgba(31,29,26,0.10)',
      borderRadius: '6px',
      padding: '20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "aperturaFoto",
    ratio: "1 / 1",
    shape: "circle",
    radius: 9999,
    label: "Foto",
    style: {
      width: '150px',
      height: '150px',
      margin: '0 auto 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '20px',
      fontWeight: 400,
      color: T.negro
    }
  }, "Cristina Balaguer"), /*#__PURE__*/React.createElement(Kicker, {
    color: T.negro50,
    style: {
      fontSize: '10px',
      marginTop: '6px'
    }
  }, "Direcci\xF3n")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.serif,
      fontSize: '21px',
      fontStyle: 'italic',
      fontWeight: 300,
      lineHeight: 1.55,
      color: T.negro,
      margin: '0 0 20px'
    }
  }, "Texto de apoyo del mensaje de esta edici\xF3n (m\xE1x. 3-4 l\xEDneas). Tono cercano, inspirador y directo."), /*#__PURE__*/React.createElement(TextPh, {
    lines: 4
  }), /*#__PURE__*/React.createElement(PendingNote, null, "Material a aportar por Comunicaci\xF3n: ", /*#__PURE__*/React.createElement("b", null, "v\xEDdeo"), " (\u22481 min 30 s), ", /*#__PURE__*/React.createElement("b", null, "foto del protagonista"), " y ", /*#__PURE__*/React.createElement("b", null, "t\xEDtulo del mensaje"), ". Sustituyo el reproductor por el embed de YouTube/Vimeo cuando me pases el enlace."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      paddingTop: '40px',
      borderTop: `1px solid ${T.beige2}`
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "Los hitos del trimestre"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: T.serif,
      fontSize: '27px',
      fontWeight: 400,
      color: T.negro,
      margin: '10px 0 28px',
      lineHeight: 1.2,
      maxWidth: '24ch'
    }
  }, "Un trimestre en movimiento"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: '34px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '7px',
      top: '8px',
      bottom: '8px',
      width: '2px',
      background: T.beige2
    }
  }), hitos.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      paddingBottom: i === hitos.length - 1 ? 0 : '38px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-34px',
      top: '4px',
      width: '16px',
      height: '16px',
      borderRadius: '9999px',
      background: T.acento,
      border: `3px solid ${T.blanco}`,
      boxShadow: '0 0 0 1px ' + T.beige2
    }
  }), /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento,
    style: {
      fontSize: '10px'
    }
  }, h.mes), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: T.serif,
      fontSize: '23px',
      fontWeight: 400,
      color: T.negro,
      margin: '6px 0 12px',
      lineHeight: 1.2
    }
  }, h.titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 180px',
      gap: '24px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(TextPh, {
    lines: 2
  }), /*#__PURE__*/React.createElement(Slot, {
    id: `accionHito${i}`,
    ratio: "4 / 3",
    radius: 4,
    label: "Imagen (opcional)"
  }))))), /*#__PURE__*/React.createElement(PendingNote, null, "Material a aportar por Comunicaci\xF3n: listado de ", /*#__PURE__*/React.createElement("b", null, "3 a 5 hitos"), " con fecha, t\xEDtulo (m\xE1x. 6 palabras) y descripci\xF3n (2-3 l\xEDneas). Im\xE1genes opcionales por hito.")));
};

/* ════════ 03 · Activum en el Mundo (RSC) ════════ */
const MundoBody = () => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: '900px'
  }
}, /*#__PURE__*/React.createElement(Slot, {
  id: "mundoMain",
  ratio: "4 / 3",
  radius: 6,
  label: "Sube la imagen del reto"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    margin: '28px 0 36px'
  }
}, [['—', 'Kilómetros recorridos'], ['—', 'Becas escolares'], ['—', 'Personas implicadas']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    background: T.beige1,
    borderRadius: '6px',
    padding: '24px 20px',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.serif,
    fontSize: '40px',
    fontWeight: 300,
    color: T.acento,
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement(Kicker, {
  color: T.negro50,
  style: {
    fontSize: '10px',
    marginTop: '8px'
  }
}, l)))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.serif,
    fontSize: '21px',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: 1.55,
    color: T.negro,
    maxWidth: '60ch',
    margin: '0 0 22px'
  }
}, "Cada kil\xF3metro que recorremos se transforma en becas escolares para Honduras. Un reto solidario que une al equipo en torno a un prop\xF3sito com\xFAn."), /*#__PURE__*/React.createElement(TextPh, {
  lines: 4
}), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: `1px solid ${T.beige2}`
  }
}, /*#__PURE__*/React.createElement(Kicker, {
  color: T.negro50,
  style: {
    fontSize: '10px'
  }
}, "Entidades colaboradoras"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: '16px',
    marginTop: '14px'
  }
}, [0, 1].map(i => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: T.beige0,
    border: '1px solid rgba(31,29,26,0.10)',
    borderRadius: '6px',
    padding: '12px 18px'
  }
}, /*#__PURE__*/React.createElement(Slot, {
  id: `mundoEnt${i}`,
  ratio: "1 / 1",
  radius: 4,
  label: "Logo",
  style: {
    width: '40px'
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.serif,
    fontSize: '15px',
    color: T.negro50
  }
}, "Entidad pendiente"))))), /*#__PURE__*/React.createElement(PendingNote, null, "Me falta el texto completo de ", /*#__PURE__*/React.createElement("b", null, "Activum en el Mundo"), " (descripci\xF3n del reto, datos de impacto, entidades colaboradoras y fotos). Esta p\xE1gina queda preparada con esa estructura."));

/* ════════ 04 · Wellbeing ════════ */
const wbHeadCell = {
  fontFamily: T.sans,
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(245,243,242,0.9)',
  padding: '14px 18px'
};
const wbCellL = {
  fontFamily: T.serif,
  fontSize: '15px',
  fontWeight: 400,
  color: T.negro,
  padding: '16px 18px',
  lineHeight: 1.35
};
const wbCellR = {
  fontFamily: T.sans,
  fontSize: '13px',
  fontWeight: 300,
  color: T.negro80,
  padding: '16px 18px',
  lineHeight: 1.55,
  borderLeft: `1px solid ${T.beige2}`
};
const WBPhase = ({
  label,
  lead
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: '44px',
    marginBottom: '4px'
  }
}, /*#__PURE__*/React.createElement(Kicker, {
  color: T.acento
}, label), /*#__PURE__*/React.createElement("h4", {
  style: {
    fontFamily: T.serif,
    fontSize: '24px',
    fontWeight: 400,
    color: T.negro,
    margin: '10px 0 0',
    lineHeight: 1.2
  }
}, lead));
const WBIntro = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '14.5px',
    fontWeight: 300,
    lineHeight: 1.7,
    color: T.negro80,
    margin: '14px 0 8px',
    maxWidth: '64ch'
  }
}, children);
const WBTip = ({
  n,
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '46px 1fr',
    gap: '18px',
    alignItems: 'start',
    padding: '20px 0',
    borderTop: `1px solid ${T.beige2}`
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.serif,
    fontSize: '32px',
    fontWeight: 300,
    color: T.acento,
    lineHeight: 0.9
  }
}, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
  style: {
    fontFamily: T.serif,
    fontSize: '19px',
    fontWeight: 500,
    color: T.negro,
    margin: '0 0 8px',
    lineHeight: 1.25
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.sans,
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: 1.7,
    color: T.negro80
  }
}, children)));
const WBStat = ({
  figure,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    background: T.beige1,
    borderRadius: '8px',
    padding: '22px 26px',
    margin: '22px 0'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.serif,
    fontSize: '52px',
    fontWeight: 300,
    color: T.acento,
    lineHeight: 0.9,
    flexShrink: 0
  }
}, figure), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: 1.6,
    color: T.negro80,
    margin: 0
  }
}, children));
const WBTable = ({
  rows
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: '32px',
    border: `1px solid ${T.beige2}`,
    borderRadius: '8px',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.25fr',
    background: T.negro
  }
}, /*#__PURE__*/React.createElement("div", {
  style: wbHeadCell
}, "Lo que nos pasa"), /*#__PURE__*/React.createElement("div", {
  style: {
    ...wbHeadCell,
    borderLeft: '1px solid rgba(245,243,242,0.15)'
  }
}, "Qu\xE9 podemos hacer")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.25fr',
    background: i % 2 ? T.beige0 : T.blanco,
    borderTop: `1px solid ${T.beige2}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: wbCellL
}, r[0]), /*#__PURE__*/React.createElement("div", {
  style: wbCellR
}, r[1]))));
const WBArticleTitle = ({
  id,
  kicker,
  title,
  lead
}) => /*#__PURE__*/React.createElement("div", {
  id: id,
  style: {
    marginTop: '56px',
    paddingTop: '40px',
    borderTop: `2px solid ${T.negro}`,
    scrollMarginTop: '110px'
  }
}, /*#__PURE__*/React.createElement(Kicker, {
  color: T.acento
}, kicker), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: T.serif,
    fontSize: 'clamp(28px,3.4vw,40px)',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    color: T.negro,
    margin: '12px 0 0',
    lineHeight: 1.1
  }
}, title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.serif,
    fontSize: '19px',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: 1.5,
    color: T.negro80,
    margin: '14px 0 0',
    maxWidth: '52ch'
  }
}, lead));
const WBCrossLink = ({
  go,
  to,
  label,
  title,
  desc
}) => /*#__PURE__*/React.createElement("div", {
  onClick: () => go(to),
  style: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    background: T.beige1,
    border: `1px solid ${T.beige2}`,
    borderRadius: '8px',
    padding: '22px 26px',
    marginTop: '40px'
  },
  onMouseEnter: e => e.currentTarget.style.background = T.beige2,
  onMouseLeave: e => e.currentTarget.style.background = T.beige1
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
  color: T.acento
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.serif,
    fontSize: '21px',
    fontWeight: 400,
    color: T.negro,
    margin: '8px 0 4px',
    lineHeight: 1.2
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.sans,
    fontSize: '13px',
    fontWeight: 300,
    color: T.negro80,
    lineHeight: 1.5
  }
}, desc)), /*#__PURE__*/React.createElement("span", {
  style: {
    flexShrink: 0,
    fontFamily: T.serif,
    fontSize: '28px',
    color: T.acento
  }
}, "\u2192"));
const WellbeingBody = ({
  go
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: '860px'
  }
}, /*#__PURE__*/React.createElement(Slot, {
  id: "wellbeingMain",
  ratio: "4 / 3",
  radius: 6,
  label: "Imagen de apoyo"
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.serif,
    fontSize: '22px',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: 1.5,
    color: T.negro,
    margin: '30px 0 18px',
    maxWidth: '60ch'
  }
}, "Desde hoy, Personas y Talento os trae una entrega pr\xE1ctica sobre bienestar. Sin tecnicismos, sin teor\xEDa vac\xEDa. Solo cosas que funcionan y que pod\xE9is aplicar desde hoy mismo."), /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.beige1,
    borderRadius: '8px',
    padding: '24px 28px',
    margin: '8px 0 4px'
  }
}, /*#__PURE__*/React.createElement(Kicker, {
  color: T.acento
}, "Por qu\xE9 existe esta secci\xF3n"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '14.5px',
    fontWeight: 300,
    lineHeight: 1.7,
    color: T.negro80,
    margin: '10px 0 0'
  }
}, "Trabajamos en un sector exigente, con proyectos complejos y clientes que esperan mucho. Eso tiene valor, pero tambi\xE9n un coste si no aprendemos a gestionarlo. Esta secci\xF3n no es un extra: es parte de c\xF3mo queremos trabajar en Activum.")), /*#__PURE__*/React.createElement(WBPhase, {
  label: "Al empezar el d\xEDa",
  lead: "Empieza con intenci\xF3n, no con urgencia."
}), /*#__PURE__*/React.createElement(WBStat, {
  figure: "60%"
}, "de los espa\xF1oles revisa el m\xF3vil en los primeros 15 minutos tras despertarse. Ese gesto activa el modo reactivo del cerebro antes de que el sistema prefrontal \u2014juicio y planificaci\xF3n\u2014 est\xE9 plenamente operativo."), /*#__PURE__*/React.createElement(WBTip, {
  n: "01",
  title: "Los primeros 15 minutos son tuyos."
}, "No mires el m\xF3vil nada m\xE1s despertarte. Ese margen antes del ruido digital le da al c\xF3rtex prefrontal tiempo para activarse. Cuando lo primero que ves es un mensaje de trabajo sin resolver, llegas a la oficina ya en modo alerta. Cuando te tomas diez minutos con un caf\xE9 y sin pantallas, llegas habiendo decidido t\xFA c\xF3mo empieza tu d\xEDa. El trabajo es el mismo; la cabeza con la que lo afrontas, no."), /*#__PURE__*/React.createElement(WBTip, {
  n: "02",
  title: "Elige tres, no treinta."
}, "Cada ma\xF1ana escribe las tres tareas que s\xED tienen que ocurrir ese d\xEDa. El cerebro bajo estr\xE9s infla la lista; reducirla a tres compromisos reales da direcci\xF3n sin agobiar. No se trata de hacer solo tres cosas, sino de identificar las tres que no pueden quedarse sin hacer. Empieza por ellas: si al terminarlas tienes energ\xEDa, sigue con lo dem\xE1s; si no, el d\xEDa ya ha sido productivo."), /*#__PURE__*/React.createElement(WBPhase, {
  label: "Durante la jornada",
  lead: "Priorizar y delegar no es rendirse."
}), /*#__PURE__*/React.createElement(WBStat, {
  figure: "15-23\u2032"
}, "es lo que tarda el cerebro en recuperar la concentraci\xF3n tras cada cambio de tarea \u2014el \xABcoste de cambio de tarea\xBB\u2014. Si nos interrumpimos cada 10 minutos, nunca llegamos a concentrarnos de verdad."), /*#__PURE__*/React.createElement(WBTip, {
  n: "01",
  title: "Urgente no siempre significa importante."
}, "Bajo presi\xF3n, el cerebro trata cualquier interrupci\xF3n como una amenaza que resolver ya. Antes de reaccionar, preg\xFAntate: \xAB\xBFqu\xE9 pasa si esto espera dos horas?\xBB. Casi siempre la respuesta es: nada. Reserva tu mejor energ\xEDa para lo que realmente mueve las cosas, no para lo que simplemente llega primero."), /*#__PURE__*/React.createElement(WBTip, {
  n: "02",
  title: "Delegar es multiplicar capacidad, no perder control."
}, "Si alguien puede resolver una tarea al 80% de c\xF3mo la har\xEDas t\xFA, del\xE9gala. El 20% restante rara vez justifica el coste de tenerla ocupando tu cabeza mientras lo que solo t\xFA puedes hacer sigue esperando. Ceder no es perder el control: es elegir d\xF3nde poner tu energ\xEDa."), /*#__PURE__*/React.createElement(WBTip, {
  n: "03",
  title: "Bloques de foco sin interrupciones."
}, "Elige una tarea importante, pon el m\xF3vil boca abajo, cierra el correo y trabaja 60 minutos sin interrupciones. Avanzar\xE1s m\xE1s que en toda una tarde fragmentada. Agrupa la revisi\xF3n del correo en dos momentos fijos al d\xEDa y protege el resto. No es rigidez: es respeto por tu propio rendimiento."), /*#__PURE__*/React.createElement(WBPhase, {
  label: "Cuando te quedas atascado",
  lead: "El bloqueo es una se\xF1al, no un fracaso."
}), /*#__PURE__*/React.createElement(WBIntro, null, "Se llama rumiaci\xF3n cognitiva: la mente vuelve una y otra vez a un problema sin resolverlo, consumiendo recursos en segundo plano. No es falta de voluntad. Cuanto m\xE1s intentas forzar la soluci\xF3n, m\xE1s se activa el bucle. Lo que lo interrumpe no es el esfuerzo, es el cambio de activaci\xF3n."), /*#__PURE__*/React.createElement(WBTip, {
  n: "01",
  title: "Cambia de tarea durante 20 minutos."
}, "Lev\xE1ntate y haz algo completamente distinto: ordena la mesa, responde un correo sencillo, prepara un caf\xE9. No es escaquearse: es darle al cerebro la se\xF1al de que puede soltar el problema. Cuando vuelves, muchas veces algo ha cambiado \u2014no porque hayas pensado m\xE1s, sino porque has dejado de hacerlo."), /*#__PURE__*/React.createElement(WBTip, {
  n: "02",
  title: "Escr\xEDbelo, no lo rumies."
}, "Escribe en tres l\xEDneas qu\xE9 es exactamente lo que te bloquea. No para resolverlo: solo para sacarlo de la cabeza. El cerebro deja de retenerlo cuando conf\xEDa en que est\xE1 registrado en alg\xFAn sitio. Y muchas veces, al escribirlo, la soluci\xF3n aparece sola."), /*#__PURE__*/React.createElement(WBPhase, {
  label: "Al cerrar el d\xEDa",
  lead: "Desconectar tambi\xE9n es parte del trabajo."
}), /*#__PURE__*/React.createElement(WBIntro, null, "El estr\xE9s no procesado al final del d\xEDa se convierte en activaci\xF3n nocturna del sistema nervioso: el cuerpo no recibe la se\xF1al de que el trabajo ha terminado y sigue en alerta. Un cierre consciente \u2014por breve que sea\u2014 interrumpe ese mecanismo y protege la energ\xEDa del d\xEDa siguiente."), /*#__PURE__*/React.createElement(WBTip, {
  n: "01",
  title: "Cierre del d\xEDa en dos minutos."
}, "Antes de apagar el ordenador, escribe dos cosas: lo que has completado hoy y las dos o tres tareas que siguen ma\xF1ana. Mientras est\xE9n solo en tu cabeza, seguir\xE1 proces\xE1ndolas en bucle aunque hayas parado. Cuando est\xE1n escritas en un sitio de confianza, el sistema cognitivo las suelta."), /*#__PURE__*/React.createElement(WBTip, {
  n: "02",
  title: "Desconectar es un h\xE1bito, no un lujo."
}, "Elige una hora a partir de la cual no miras el correo ni los mensajes de trabajo. No tiene que ser perfecta cada d\xEDa, pero s\xED consistente. El l\xEDmite claro le ense\xF1a al sistema nervioso cu\xE1ndo puede bajar la guardia. Y lo que repites cada d\xEDa acaba convirti\xE9ndose en qui\xE9n eres."), /*#__PURE__*/React.createElement(WBTable, {
  rows: [['Empezamos el día en modo alerta antes de decidir nada', '15 min sin móvil al despertar. Tres tareas del día antes de abrir el correo.'], ['Trabajamos mucho y no hemos avanzado en nada', 'Bloquea 60–90 min sin notificaciones. Correo en dos momentos al día.'], ['Todo parece urgente a la vez', '¿Qué pasa si espera dos horas? Reserva energía para lo que impacta.'], ['Llevamos un rato bloqueados', 'Cambia de tarea 20 min. Escribe en tres líneas qué te bloquea.'], ['La cabeza no para aunque hayamos salido', 'Cierre de dos minutos: completado hoy + qué sigue mañana.']]
}), /*#__PURE__*/React.createElement(WBCrossLink, {
  go: go,
  to: "cuerpo",
  label: "Sigue leyendo \xB7 05",
  title: "El cuerpo tambi\xE9n trabaja",
  desc: "Por qu\xE9 moverse cambia c\xF3mo piensas, no solo c\xF3mo te sientes."
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '13px',
    fontWeight: 300,
    color: T.negro50,
    margin: '22px 0 0',
    textAlign: 'center'
  }
}, "Esta secci\xF3n es vuestra. Escr\xEDbenos a", ' ', /*#__PURE__*/React.createElement("a", {
  href: "mailto:rrhh@activum.es",
  style: {
    color: T.acento,
    fontWeight: 500
  }
}, "rrhh@activum.es")));

/* ════════ 05 · El cuerpo también trabaja ════════ */
const CuerpoBody = ({
  go
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: '860px'
  }
}, /*#__PURE__*/React.createElement(Slot, {
  id: "cuerpoMain",
  ratio: "4 / 3",
  radius: 6,
  label: "Imagen de apoyo"
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.serif,
    fontSize: '22px',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: 1.5,
    color: T.negro,
    margin: '30px 0 8px',
    maxWidth: '60ch'
  }
}, "Segunda entrega de bienestar de Personas y Talento. Esta vez, el cuerpo: por qu\xE9 moverse cambia c\xF3mo piensas, no solo c\xF3mo te sientes."), /*#__PURE__*/React.createElement(WBPhase, {
  label: "Lo que pasa cuando no nos movemos",
  lead: "El sedentarismo no es solo un problema f\xEDsico."
}), /*#__PURE__*/React.createElement(WBStat, {
  figure: "90\u2032"
}, "A partir de hora y media sentados, el flujo sangu\xEDneo al cerebro disminuye de forma medible, la atenci\xF3n cae y la capacidad de decidir se deteriora. No es falta de motivaci\xF3n: es fisiolog\xEDa."), /*#__PURE__*/React.createElement(WBTip, {
  n: "01",
  title: "Lev\xE1ntate cada 90 minutos, aunque sean 5."
}, "No hace falta pasear ni hacer ejercicio. Basta con ponerte de pie, ir a por agua o estirarte en el pasillo. Ese gesto activa la circulaci\xF3n, restablece el ox\xEDgeno y resetea la atenci\xF3n. Pon un temporizador: la intenci\xF3n sola no funciona, siempre hay una raz\xF3n para no levantarse justo cuando m\xE1s lo necesitas."), /*#__PURE__*/React.createElement(WBTip, {
  n: "02",
  title: "Caminar desbloquea lo que la pantalla atasca."
}, "Sal a caminar diez minutos sin m\xF3vil, sin auriculares, sin objetivo. Caminar aumenta el pensamiento creativo y asociativo hasta un 81% respecto a estar sentado. No es casualidad que las mejores ideas lleguen en la ducha o paseando: el cerebro en movimiento conecta de forma diferente."), /*#__PURE__*/React.createElement(WBPhase, {
  label: "El bucle entre tensi\xF3n f\xEDsica y mental",
  lead: "El estr\xE9s tensa el cuerpo. El cuerpo tenso mantiene el estr\xE9s."
}), /*#__PURE__*/React.createElement(WBIntro, null, "Comprueba ahora mismo tus hombros: \xBFsubidos hacia las orejas? \xBFla mand\xEDbula apretada? El estr\xE9s mental genera tensi\xF3n muscular real, y esa tensi\xF3n mantiene activo el sistema de alerta. Es un bucle que se autoalimenta \u2014e interrumpirlo no requiere gimnasio, solo dos minutos y saber qu\xE9 hacer."), /*#__PURE__*/React.createElement(WBTip, {
  n: "01",
  title: "Dos minutos de respiraci\xF3n lenta interrumpen el ciclo."
}, "Inspira contando cuatro segundos, espira contando seis. Rep\xEDtelo durante dos minutos. No es relajaci\xF3n: es una intervenci\xF3n fisiol\xF3gica que activa el nervio vago, el freno natural del sistema de alerta. Puedes hacerlo en la silla, en el coche o en el ba\xF1o. Funciona."), /*#__PURE__*/React.createElement(WBTip, {
  n: "02",
  title: "Integra el movimiento en lo que ya haces."
}, "No a\xF1adas una actividad m\xE1s: haz diferente lo que ya haces. La llamada que no necesita pantalla, caminando. La reuni\xF3n de dos personas, de pie o dando una vuelta. Las escaleras en vez del ascensor. Sumado, son entre 20 y 35 minutos de movimiento sin tocar la agenda."), /*#__PURE__*/React.createElement(WBTip, {
  n: "03",
  title: "Cinco minutos para soltar la tensi\xF3n."
}, "Tres estiramientos desde la silla, sin material:", /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: '10px 0 0',
    paddingLeft: '18px'
  }
}, /*#__PURE__*/React.createElement("li", {
  style: {
    marginBottom: '6px'
  }
}, /*#__PURE__*/React.createElement("b", null, "Cuello."), " Lleva la oreja al hombro, 20 s cada lado. Deja caer el peso con suavidad."), /*#__PURE__*/React.createElement("li", {
  style: {
    marginBottom: '6px'
  }
}, /*#__PURE__*/React.createElement("b", null, "Trapecios y hombros."), " Entrelaza los dedos y estira hacia el techo, 15 s; luego junta los om\xF3platos. Dos veces."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Espalda baja."), " Cruza un tobillo sobre la rodilla contraria e incl\xEDnate adelante con la espalda recta, 20 s por lado."))), /*#__PURE__*/React.createElement(WBTable, {
  rows: [['A media mañana la cabeza no responde, aunque hayas dormido bien', 'Levántate 5 min cada 90 min. Pon un temporizador.'], ['Llevas un rato bloqueado y la pantalla no da más', 'Camina 10 minutos antes de volver. No es tiempo perdido.'], ['Acabas el día con el cuerpo tenso sin saber por qué', '2 min de respiración: 4 seg inspirar / 6 seg espirar.'], ['Cuello, hombros y espalda cargados', '5 min de estiramiento desde la silla, a media mañana.'], ['Quieres moverte más pero no encuentras el momento', 'Reuniones caminando, llamadas de pie, escaleras: 20–35 min.']]
}), /*#__PURE__*/React.createElement(WBCrossLink, {
  go: go,
  to: "wellbeing",
  label: "Primera entrega \xB7 04",
  title: "Gestiona el estr\xE9s del d\xEDa a d\xEDa",
  desc: "Desde que te levantas hasta que cierras el ordenador."
}), /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.negro,
    borderRadius: '8px',
    padding: '36px 40px',
    marginTop: '40px',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.serif,
    fontSize: '23px',
    fontStyle: 'italic',
    fontWeight: 300,
    color: T.blanco,
    margin: 0,
    lineHeight: 1.4
  }
}, "Nadie puede dar lo mejor de s\xED en el trabajo si no se cuida primero a s\xED mismo. \xBFQu\xE9 es lo primero que vas a cambiar esta semana?"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '13px',
    fontWeight: 300,
    color: 'rgba(245,243,242,0.7)',
    margin: '20px 0 0'
  }
}, "Esta secci\xF3n es vuestra. Si hay algo que quer\xE9is que abordemos, escribid a", ' ', /*#__PURE__*/React.createElement("a", {
  href: "mailto:rrhh@activum.es",
  style: {
    color: T.acentoLight,
    fontWeight: 500
  }
}, "rrhh@activum.es"))));

/* ════════ 05 · Beneficios para Empleados ════════ */
const BeneficiosBody = () => {
  const ofertas = [{
    cat: 'Moda y deporte',
    marca: 'Adidas',
    desc: '30% en artículos seleccionados de la tienda online oficial y un 5% adicional en outlet ya rebajado. Ideal para nuestro reto de convertir km en becas.'
  }, {
    cat: 'Tecnología',
    marca: 'Samsung',
    desc: 'Hasta un 29% en televisores seleccionados y hasta un 62% en otros modelos y barras de sonido. El Mundial, mejor en grande.'
  }, {
    cat: 'Viajes',
    marca: 'lastminute.com',
    desc: 'Descuento exclusivo en vuelos y escapadas. Para esa escapada improvisada o el viaje que llevas tiempo queriendo hacer.'
  }, {
    cat: 'Formación · Idiomas',
    marca: 'Babbel',
    desc: 'Hasta un 60% en el aprendizaje de idiomas. Solo necesitas 10 minutos al día… y un poco de valentía.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '960px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: '8px',
      overflow: 'hidden',
      background: T.acento,
      backgroundImage: 'url("assets/pattern-dark.svg")',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(110,31,50,0.78)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '52px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "rgba(245,243,242,0.7)"
  }, "Beneficios Activum"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: T.serif,
      fontSize: 'clamp(32px,4vw,52px)',
      fontWeight: 300,
      color: T.blanco,
      margin: '14px 0 12px',
      lineHeight: 1.1
    }
  }, "Este trimestre, ahorra en grande"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '15px',
      fontWeight: 300,
      color: 'rgba(245,243,242,0.82)',
      margin: 0,
      letterSpacing: '0.04em'
    }
  }, "Moda \xB7 Tecnolog\xEDa \xB7 Viajes \xB7 Ocio \xB7 Formaci\xF3n"), /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-negative.svg",
    alt: "Activum",
    style: {
      height: '26px',
      marginTop: '26px',
      opacity: 0.92
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: '32px',
      alignItems: 'center',
      margin: '36px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.75,
      color: T.negro80,
      margin: '0 0 12px'
    }
  }, "Todos los empleados tenemos acceso gratuito a una plataforma exclusiva con descuentos y ventajas en primeras marcas de moda, tecnolog\xEDa, viajes, ocio y formaci\xF3n. Solo necesitas registrarte con tu ", /*#__PURE__*/React.createElement("b", null, "correo corporativo"), " y empezar a disfrutar."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      lineHeight: 1.6,
      color: T.negro50,
      margin: 0
    }
  }, "Cada mes se incorporan nuevas ofertas: merece la pena echar un vistazo antes de reservar vacaciones, renovar tecnolog\xEDa o darte un capricho.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.beige1,
      borderRadius: '8px',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento,
    style: {
      fontSize: '10px'
    }
  }, "C\xF3mo acceder"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      lineHeight: 1.55,
      color: T.negro80,
      margin: '10px 0 16px'
    }
  }, "Desde la web o el apartado de enlaces de Factorial."), /*#__PURE__*/React.createElement("a", {
    href: "https://activum.benefitsatwork.es",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: T.blanco,
      background: T.negro,
      padding: '12px 20px',
      borderRadius: '4px',
      textDecoration: 'none'
    }
  }, "Ir a la plataforma \u2192"))), /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "Descuentos destacados de esta edici\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '18px',
      marginTop: '18px'
    }
  }, ofertas.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '130px 1fr',
      background: T.beige0,
      border: '1px solid rgba(31,29,26,0.10)',
      borderRadius: '8px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: `benLogo${i}`,
    ratio: "1 / 1",
    shape: "rect",
    radius: 0,
    label: "Logo",
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento,
    style: {
      fontSize: '10px'
    }
  }, o.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '20px',
      fontWeight: 400,
      color: T.negro,
      margin: '7px 0 9px'
    }
  }, o.marca), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      lineHeight: 1.55,
      color: T.negro80,
      margin: 0
    }
  }, o.desc))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '12px',
      fontWeight: 300,
      color: T.negro50,
      margin: '20px 0 0',
      textAlign: 'center'
    }
  }, "Cada empleado encuentra el c\xF3digo de descuento en su cuenta personal de la plataforma."));
};

/* ════════ 06 · En Primera Persona (entrevista) ════════ */
const PrimeraBody = () => {
  const qa = [{
    q: 'Si te hubieran dicho hace años que acabarías siendo responsable de Sistemas, ¿qué habrías pensado?',
    a: 'En mis dos primeros años como colaborador, ni se me pasaba por la cabeza. Antes de la pandemia pensé «¿y cuándo se jubile Javier, quién hará su trabajo? Podría ser yo». Pero cuando me lo propusieron, no me lo esperaba.'
  }, {
    q: 'Llegaste a tener una granja de caracoles. ¿Cómo surgió aquella aventura?',
    a: 'Ni lo sé. En Mallorca se consume mucho caracol todo el año. Se había montado una granja grande en un pueblo cercano, en alguna conversación saldría el tema, me puse a investigar y al poco estaba presentando papeles y el plan de negocio en el banco.'
  }, {
    q: 'Mirándolo con perspectiva, ¿qué aprendizaje te dejó?',
    a: 'A ser constante y a priorizar. Los caracoles comían cada día, eso no podías dejar de hacerlo. Los demás trabajos los ibas encajando, pero ese sí o sí se tenía que hacer.'
  }, {
    q: '¿Qué es lo que más disfrutas de tu trabajo al frente del área de Sistemas?',
    a: 'Que tengo contacto con todas las áreas, trato con mucha gente y tengo una visión más completa del trabajo de los demás. Antes, como administrativo de producto, estaba más limitado.'
  }, {
    q: 'Fuera del trabajo, ¿cómo es Daniel?',
    a: 'Soy muy casero. Para desconectar al 100%, casa, sofá y tele. Y si hablamos del Dani fuera del trabajo: familia, amigos, mi proyecto de domótica en casa, una cena. Y, en secreto, las series de abogados y los libros de John Grisham.'
  }, {
    q: 'Si pudieras darle un consejo al Daniel de hace 20 años, ¿cuál sería?',
    a: 'Que fuera valiente y saliera fuera a estudiar o trabajar. Pero sa roqueta (Mallorca) tira mucho: un mallorquín viaja por todo el mundo, pero siempre vuelve a la isla.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '860px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '40px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: '40px'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "primeraMain",
    ratio: "4 / 5",
    radius: 6,
    label: "Foto de Daniel"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '22px',
      fontWeight: 400,
      color: T.negro
    }
  }, "Daniel Ovejero"), /*#__PURE__*/React.createElement(Kicker, {
    color: T.negro50,
    style: {
      fontSize: '10px',
      marginTop: '6px'
    }
  }, "Responsable de Sistemas"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.75,
      color: T.negro80,
      margin: '0 0 30px'
    }
  }, "No todos los caminos son lineales. El de Daniel Ovejero, nuestro Dani, ha pasado por proyectos inesperados, cambios profesionales y muchas reinvenciones hasta convertirse en una de las personas con mayor visi\xF3n transversal de Activum."), qa.slice(0, 3).map((item, i) => /*#__PURE__*/React.createElement(QABlock, _extends({
    key: i
  }, item))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: T.serif,
      fontSize: '27px',
      fontStyle: 'italic',
      fontWeight: 300,
      lineHeight: 1.35,
      color: T.negro,
      margin: '14px 0 32px',
      paddingLeft: '22px',
      borderLeft: `3px solid ${T.acento}`
    }
  }, "\xABSiempre abierto a los cambios y aprovechando las coyunturas que la vida te ofrece.\xBB"), qa.slice(3).map((item, i) => /*#__PURE__*/React.createElement(QABlock, _extends({
    key: i
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.negro,
      borderRadius: '8px',
      padding: '28px 32px',
      marginTop: '12px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acentoLight
  }, "La palabra con la que define Activum"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '44px',
      fontWeight: 300,
      fontStyle: 'italic',
      color: T.blanco,
      marginTop: '10px'
    }
  }, "Familia")))));
};
const QABlock = ({
  q,
  a
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    paddingBottom: '24px',
    marginBottom: '24px',
    borderBottom: `1px solid ${T.beige2}`
  }
}, /*#__PURE__*/React.createElement("h4", {
  style: {
    fontFamily: T.serif,
    fontSize: '19px',
    fontWeight: 500,
    color: T.negro,
    margin: '0 0 12px',
    lineHeight: 1.3
  }
}, q), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '15px',
    fontWeight: 300,
    lineHeight: 1.7,
    color: T.negro80,
    margin: 0
  }
}, a));

/* ════════ 07 · Bit a Bit (infografía de phishing) ════════ */
const BitabitBody = () => {
  const alertas = [{
    n: '1',
    t: 'El remitente improbable',
    d: '¿Realmente esa persona se pondría en contacto conmigo para pedirme esto? Dirección no te pide comprar tarjetas regalo ni enviar dinero.'
  }, {
    n: '2',
    t: 'La composición del mensaje',
    d: 'Qué dice, cómo lo dice, quién lo manda y el @dominio desde el que se envía. Todo el conjunto importa.'
  }, {
    n: '3',
    t: 'Enlaces y peticiones',
    d: 'La inclusión de enlaces y cualquier petición de dinero o de datos personales debe ponerte en alerta.'
  }];
  const senales = [['El remitente', 'Antes de escribirte a ti, Dirección se escribiría entre ellos. Si algo no es lógico, sospecha.'], ['El dominio (tras la @)', 'Fíjate en lo que aparece detrás —y a veces delante— de la @. En el 95% de los casos no tiene sentido.'], ['El cuerpo del correo', 'Escueto, sin formato, con faltas de ortografía, palabras poco habituales o traducciones literales del inglés.'], ['La urgencia', '«Actúa ya», «último aviso», «tu cuenta será bloqueada». Buscan que actúes sin pensar. Tómate un minuto.']];
  const pasos = ['No sigas interactuando: cierra la web o el mensaje abierto.', 'Elimina el correo (Mayús + Supr lo borra del todo, sin pasar por Eliminados).', 'Pasa un examen completo con Defender (Seguridad de Windows).', 'Avísanos para cerrar sesiones, revisar el doble factor y cambiar contraseñas.'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '900px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.serif,
      fontSize: '21px',
      fontStyle: 'italic',
      fontWeight: 300,
      lineHeight: 1.55,
      color: T.negro,
      maxWidth: '62ch',
      margin: '0 0 14px'
    }
  }, "Un correo urgente. Un supuesto mensaje de Direcci\xF3n. Un enlace que parece leg\xEDtimo. As\xED empiezan muchos fraudes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.7,
      color: T.negro80,
      maxWidth: '62ch',
      margin: '0 0 36px'
    }
  }, "El ", /*#__PURE__*/React.createElement("b", null, "phishing"), " (del ingl\xE9s, \xABpescar\xBB) es el enga\xF1o para robar informaci\xF3n haci\xE9ndose pasar por alguien de confianza \u2014por correo, SMS o WhatsApp\u2014. La buena noticia: casi siempre deja pistas. Aprender a verlas evita incidentes."), /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "Tres alertas rojas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      margin: '16px 0 40px'
    }
  }, alertas.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.n,
    style: {
      background: T.negro,
      borderRadius: '8px',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '52px',
      fontWeight: 300,
      color: T.acentoLight,
      lineHeight: 0.9,
      marginBottom: '12px'
    }
  }, a.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '18px',
      fontWeight: 400,
      color: T.blanco,
      marginBottom: '8px',
      lineHeight: 1.25
    }
  }, a.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'rgba(245,243,242,0.7)',
      margin: 0
    }
  }, a.d)))), /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "D\xF3nde fijarse"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: T.serif,
      fontSize: '26px',
      fontWeight: 400,
      color: T.negro,
      margin: '10px 0 20px'
    }
  }, "Anatom\xEDa de un correo sospechoso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
      marginBottom: '20px'
    }
  }, senales.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      background: T.beige0,
      border: '1px solid rgba(31,29,26,0.10)',
      borderRadius: '6px',
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 600,
      color: T.acento,
      fontVariantNumeric: 'tabular-nums',
      marginTop: '2px'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '17px',
      fontWeight: 400,
      color: T.negro
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      lineHeight: 1.55,
      color: T.negro80,
      margin: '4px 0 0'
    }
  }, d))))), /*#__PURE__*/React.createElement(Slot, {
    id: "bitabitEj",
    ratio: "16 / 6",
    radius: 6,
    label: "Ejemplo de dominio sospechoso"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      margin: '40px 0 0',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.beige1,
      borderRadius: '8px',
      padding: '26px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "Ante la duda"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: 1.65,
      color: T.negro80,
      margin: '12px 0 14px'
    }
  }, "No contestes al mensaje. Llama a tu responsable o al CAU para aclararlo, e inf\xF3rmalo como suplantaci\xF3n de identidad (bot\xF3n derecho \u2192 ", /*#__PURE__*/React.createElement("i", null, "Informar de phishing"), ")."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      background: T.blanco,
      border: '1px solid rgba(31,29,26,0.12)',
      borderRadius: '6px',
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: T.negro50
    }
  }, "CAU"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontSize: '18px',
      color: T.negro
    }
  }, "965 04 91 37"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.beige0,
      border: '1px solid rgba(31,29,26,0.10)',
      borderRadius: '8px',
      padding: '26px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "Si ya has hecho clic"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '14px 0 0',
      padding: 0,
      listStyle: 'none',
      counterReset: 'step'
    }
  }, pasos.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      padding: '9px 0',
      borderTop: i ? `1px solid ${T.beige2}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '22px',
      height: '22px',
      flexShrink: 0,
      borderRadius: '9999px',
      background: T.negro,
      color: T.blanco,
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      lineHeight: 1.5,
      color: T.negro80
    }
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.negro,
      borderRadius: '8px',
      padding: '32px 36px',
      marginTop: '20px',
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    n: 2,
    size: 40,
    color: T.blanco
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.serif,
      fontSize: '21px',
      fontStyle: 'italic',
      fontWeight: 300,
      color: T.blanco,
      margin: 0,
      lineHeight: 1.4
    }
  }, "\xABAntes de hacer clic o compartir datos, para y verifica. 10 segundos pueden evitar un incidente.\xBB"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      color: 'rgba(245,243,242,0.6)',
      margin: '10px 0 0'
    }
  }, "Y una segunda: actualiza el ordenador al menos una vez por semana."))));
};

/* ════════ 08 · Galería Activum ════════ */
const GaleriaBody = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px'
  }
}, Array.from({
  length: 9
}).map((_, i) => /*#__PURE__*/React.createElement(Slot, {
  key: i,
  id: `gal${i}`,
  ratio: "4 / 3",
  radius: 4,
  label: "Foto"
}))), /*#__PURE__*/React.createElement(PendingNote, null, "Material a aportar por Comunicaci\xF3n: selecci\xF3n de ", /*#__PURE__*/React.createElement("b", null, "6 a 12 fotos"), " en alta resoluci\xF3n y pies de foto opcionales (m\xE1x. 10 palabras). Priorizar fotos de personas."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: '40px',
    background: T.negro,
    borderRadius: '8px',
    padding: '40px 44px',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("assets/pattern-dark.svg")',
    backgroundSize: '420px',
    opacity: 0.16,
    pointerEvents: 'none'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    maxWidth: '640px'
  }
}, /*#__PURE__*/React.createElement(Kicker, {
  color: T.acento
}, "Participa"), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: T.serif,
    fontSize: '27px',
    fontWeight: 400,
    color: T.blanco,
    margin: '10px 0 16px',
    lineHeight: 1.2
  }
}, "\xBFTienes una foto que merezca estar aqu\xED?"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '15px',
    fontWeight: 300,
    lineHeight: 1.75,
    color: 'rgba(245,243,242,0.78)',
    margin: '0 0 26px'
  }
}, "Esta galer\xEDa est\xE1 abierta a todos los equipos. Si tienes fotograf\xEDas de proyectos, eventos, hitos, visitas, reuniones o momentos que reflejen nuestro trabajo y nuestra cultura, comp\xE1rtelas con nosotros para futuras ediciones."), /*#__PURE__*/React.createElement("a", {
  href: "mailto:comunicacion@activum.es?subject=Foto%20para%20la%20Galer%C3%ADa%20Activum",
  style: {
    display: 'inline-block',
    fontFamily: T.sans,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: T.negro,
    background: T.blanco,
    padding: '14px 30px',
    borderRadius: '4px',
    textDecoration: 'none',
    transition: 'background 200ms, color 200ms'
  },
  onMouseEnter: e => {
    e.currentTarget.style.background = T.acento;
    e.currentTarget.style.color = T.blanco;
  },
  onMouseLeave: e => {
    e.currentTarget.style.background = T.blanco;
    e.currentTarget.style.color = T.negro;
  }
}, "Env\xEDa tu foto a comunicacion@activum.es"))));

/* ── Formulario del buzón (envía por correo a comunicación) ── */
const BuzonForm = () => {
  const [nombre, setNombre] = React.useState('');
  const [tipo, setTipo] = React.useState('Idea');
  const [mensaje, setMensaje] = React.useState('');
  const tipos = ['Idea', 'Historia', 'Sugerencia', 'Proponer entrevistado'];
  const field = {
    fontFamily: T.sans,
    fontSize: '14px',
    color: T.negro,
    background: T.blanco,
    border: '1px solid rgba(31,29,26,0.18)',
    borderRadius: '6px',
    padding: '11px 13px',
    outline: 'none',
    width: '100%'
  };
  const labelSt = {
    fontFamily: T.sans,
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: T.negro80,
    marginBottom: '6px',
    display: 'block'
  };
  const submit = e => {
    e.preventDefault();
    const subject = `Activum Lab · ${tipo}`;
    const body = `Tipo: ${tipo}\n` + (nombre ? `Nombre: ${nombre}\n` : '') + `\n${mensaje}\n`;
    window.location.href = `mailto:comunicacion@activum.es?subject=${encodeURIComponent(subject)}` + `&body=${encodeURIComponent(body)}`;
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: T.beige0,
      border: `1px solid ${T.beige2}`,
      borderRadius: '8px',
      padding: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelSt
  }, "Tu nombre ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.negro50
    }
  }, "(opcional)")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: nombre,
    onChange: e => setNombre(e.target.value),
    placeholder: "C\xF3mo te llamas",
    style: field,
    onFocus: e => e.target.style.borderColor = T.acento,
    onBlur: e => e.target.style.borderColor = 'rgba(31,29,26,0.18)'
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelSt
  }, "Tipo de aportaci\xF3n"), /*#__PURE__*/React.createElement("select", {
    value: tipo,
    onChange: e => setTipo(e.target.value),
    style: field,
    onFocus: e => e.target.style.borderColor = T.acento,
    onBlur: e => e.target.style.borderColor = 'rgba(31,29,26,0.18)'
  }, tipos.map(t => /*#__PURE__*/React.createElement("option", {
    key: t,
    value: t
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelSt
  }, "Tu propuesta"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: 5,
    value: mensaje,
    onChange: e => setMensaje(e.target.value),
    placeholder: "Cu\xE9ntanos tu idea, historia o sugerencia\u2026",
    style: {
      ...field,
      resize: 'vertical',
      lineHeight: 1.6
    },
    onFocus: e => e.target.style.borderColor = T.acento,
    onBlur: e => e.target.style.borderColor = 'rgba(31,29,26,0.18)'
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 300,
      color: T.negro50,
      lineHeight: 1.55,
      margin: '0 0 16px',
      padding: '12px 14px',
      background: T.beige1,
      borderRadius: '6px',
      borderLeft: `3px solid ${T.beige2}`
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, "Protecci\xF3n de datos (Art. 13 RGPD):"), " los datos que facilitas ser\xE1n tratados por Activum para gestionar tu participaci\xF3n en la revista interna, bajo la base legal de inter\xE9s leg\xEDtimo (Art. 6.1.f RGPD). Tu nombre es opcional. Puedes ejercer tus derechos de acceso, rectificaci\xF3n y supresi\xF3n escribiendo a", ' ', /*#__PURE__*/React.createElement("a", {
    href: "mailto:comunicacion@activum.es",
    style: {
      color: T.acento
    }
  }, "comunicacion@activum.es"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: '12px',
      fontWeight: 300,
      color: T.negro50,
      maxWidth: '46ch',
      lineHeight: 1.5
    }
  }, "Al enviar se abrir\xE1 tu correo con el mensaje ya redactado a comunicacion@activum.es. Solo tienes que pulsar enviar."), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      flexShrink: 0,
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: T.blanco,
      background: T.negro,
      padding: '14px 30px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 200ms'
    },
    onMouseEnter: e => e.currentTarget.style.background = T.acento,
    onMouseLeave: e => e.currentTarget.style.background = T.negro
  }, "Enviar propuesta")));
};

/* ════════ 09 · Activum Lab (buzón de participación) ════════ */
const BuzonBody = () => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: '820px'
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.serif,
    fontSize: '21px',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: 1.55,
    color: T.negro,
    margin: '0 0 16px',
    maxWidth: '60ch'
  }
}, "Las mejores ideas no siempre nacen en los despachos o en las reuniones. Muchas veces surgen en el d\xEDa a d\xEDa, en el contacto con los equipos, los clientes o los procesos."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '15px',
    fontWeight: 300,
    lineHeight: 1.75,
    color: T.negro80,
    margin: '0 0 32px',
    maxWidth: '60ch'
  }
}, "Por eso nace ", /*#__PURE__*/React.createElement("b", null, "Activum Lab"), ", un espacio abierto para compartir ideas, propuestas y sugerencias que nos ayuden a seguir mejorando como compa\xF1\xEDa. Ya sea una gran idea o una peque\xF1a sugerencia, queremos escucharte."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '14px',
    marginBottom: '32px'
  }
}, [['¿Qué cambiarías?', 'Algo que harías diferente mañana mismo.', 'assets/ic-cambio.webp'], ['¿Qué potenciar?', 'Lo que funciona bien y deberíamos impulsar.', 'assets/ic-potenciar.png'], ['¿Qué te gustaría ver?', 'Un tema para la newsletter o una iniciativa interna.', null]].map(([t, d, img], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    background: T.beige0,
    border: '1px solid rgba(31,29,26,0.10)',
    borderRadius: '6px',
    padding: '20px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '46px',
    height: '46px',
    borderRadius: '9999px',
    background: T.beige2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, img ? /*#__PURE__*/React.createElement("img", {
  src: img,
  alt: "",
  style: {
    width: '26px',
    height: '26px',
    objectFit: 'contain'
  }
}) : /*#__PURE__*/React.createElement(BrandIcon, {
  n: i % 5 + 1,
  size: 26,
  color: T.negro
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.serif,
    fontSize: '18px',
    fontWeight: 400,
    color: T.negro,
    margin: '14px 0 5px'
  }
}, t), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.sans,
    fontSize: '12px',
    fontWeight: 300,
    color: T.negro80,
    lineHeight: 1.5
  }
}, d)))), /*#__PURE__*/React.createElement(BuzonForm, null), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.sans,
    fontSize: '13px',
    fontWeight: 300,
    color: T.negro50,
    margin: '22px 0 0',
    textAlign: 'center'
  }
}, "Tambi\xE9n puedes escribirnos directamente a", ' ', /*#__PURE__*/React.createElement("a", {
  href: "mailto:comunicacion@activum.es",
  style: {
    color: T.acento,
    fontWeight: 500
  }
}, "comunicacion@activum.es")));

/* ════════ La Nucía One (promoción / publicidad interna) ════════ */
const LaNuciaBody = () => {
  const datos = [['107', 'viviendas'], ['2-4', 'dormitorios'], ['280.000 €', 'precio de salida'], ['Garaje', '+ trastero incluidos']];
  const comunes = ['Piscina infinity', 'Gimnasio', 'Gastrobar', 'Espacio de coworking', 'Áreas infantiles', 'Zonas ajardinadas'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '960px'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    id: "lanuciaMain",
    ratio: "4 / 3",
    radius: 8,
    label: "Sube el render de La Nuc\xEDa One"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '14px',
      margin: '28px 0 36px'
    }
  }, datos.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: T.beige1,
      borderRadius: '6px',
      padding: '22px 18px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '30px',
      fontWeight: 300,
      color: T.negro,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement(Kicker, {
    color: T.negro50,
    style: {
      fontSize: '9px',
      marginTop: '8px'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '720px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.serif,
      fontSize: '21px',
      fontStyle: 'italic',
      fontWeight: 300,
      lineHeight: 1.55,
      color: T.negro,
      margin: '0 0 22px'
    }
  }, "En pleno coraz\xF3n de la Costa Blanca, en La Nuc\xEDa (Alicante), una de las zonas residenciales con mayor proyecci\xF3n de la provincia."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.75,
      color: T.negro80,
      margin: '0 0 16px'
    }
  }, "Un entorno tranquilo y rodeado de naturaleza, sin renunciar a la proximidad de Benidorm, Altea o Alfaz del Pi. El proyecto est\xE1 dise\xF1ado para distintos perfiles: desde familias que buscan su residencia habitual hasta quienes desean una segunda vivienda o una oportunidad de inversi\xF3n."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.sans,
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.75,
      color: T.negro80,
      margin: 0
    }
  }, "Viviendas con amplias terrazas, bajos d\xFAplex con jard\xEDn privado y \xE1ticos con sol\xE1rium, concebidas para maximizar la luz natural. A un paso de la Ciudad Deportiva Camilo Cano, playas y una amplia oferta de ocio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '36px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.acento
  }, "Zonas comunes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '14px'
    }
  }, comunes.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 400,
      color: T.negro,
      background: T.beige0,
      border: '1px solid rgba(31,29,26,0.12)',
      borderRadius: '9999px',
      padding: '8px 16px'
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap',
      background: T.negro,
      borderRadius: '8px',
      padding: '28px 34px',
      marginTop: '36px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontSize: '22px',
      fontWeight: 300,
      color: T.blanco
    }
  }, "\xBFTe interesa o conoces a alguien?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: '13px',
      fontWeight: 300,
      color: 'rgba(245,243,242,0.65)',
      marginTop: '6px'
    }
  }, "lanuciaone.com \xB7 865 66 28 45")), /*#__PURE__*/React.createElement("a", {
    href: "https://lanuciaone.com/",
    target: "_blank",
    rel: "noopener",
    style: {
      flexShrink: 0,
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: T.blanco,
      background: T.acento,
      padding: '14px 28px',
      borderRadius: '4px',
      textDecoration: 'none'
    }
  }, "M\xE1s informaci\xF3n")), /*#__PURE__*/React.createElement(PendingNote, null, "Pendiente: los ", /*#__PURE__*/React.createElement("b", null, "renders"), " de la promoci\xF3n (SharePoint, carpeta Infograf\xEDas). Sustituyo las im\xE1genes en cuanto est\xE9n disponibles."));
};

/* ── Router de cuerpos ── */
const BODIES = {
  apertura: AperturaBody,
  mundo: MundoBody,
  wellbeing: WellbeingBody,
  cuerpo: CuerpoBody,
  beneficios: BeneficiosBody,
  primera: PrimeraBody,
  bitabit: BitabitBody,
  galeria: GaleriaBody,
  voz: BuzonBody,
  lanucia: LaNuciaBody
};

/* ── Vista de artículo completa ── */
const Article = ({
  id,
  go
}) => {
  const s = getSection(id);
  const Body = BODIES[id];
  const idx = SECTIONS.findIndex(x => x.id === id);
  const prev = SECTIONS[idx - 1];
  const next = SECTIONS[idx + 1];
  const wide = id === 'galeria' || id === 'beneficios' || id === 'lanucia';
  const showNav = !s.promo;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('portada'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.sans,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: T.negro50,
      padding: 0,
      marginBottom: '28px'
    },
    onMouseEnter: e => e.currentTarget.style.color = T.acento,
    onMouseLeave: e => e.currentTarget.style.color = T.negro50
  }, "\u2190 Volver a portada"), /*#__PURE__*/React.createElement(ArticleHeader, {
    s: s,
    wide: wide
  }), /*#__PURE__*/React.createElement(Body, {
    go: go
  }), showNav && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '16px',
      marginTop: '56px',
      paddingTop: '28px',
      borderTop: `1px solid ${T.beige2}`
    }
  }, prev ? /*#__PURE__*/React.createElement("button", {
    onClick: () => go(prev.id),
    style: navBtn('left'),
    onMouseEnter: e => e.currentTarget.style.borderColor = T.negro,
    onMouseLeave: e => e.currentTarget.style.borderColor = 'rgba(31,29,26,0.15)'
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.negro50,
    style: {
      fontSize: '9px'
    }
  }, "\u2190 Anterior"), /*#__PURE__*/React.createElement("span", {
    style: navBtnTitle
  }, prev.section)) : /*#__PURE__*/React.createElement("span", null), next ? /*#__PURE__*/React.createElement("button", {
    onClick: () => go(next.id),
    style: {
      ...navBtn('right'),
      textAlign: 'right'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = T.negro,
    onMouseLeave: e => e.currentTarget.style.borderColor = 'rgba(31,29,26,0.15)'
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: T.negro50,
    style: {
      fontSize: '9px'
    }
  }, "Siguiente \u2192"), /*#__PURE__*/React.createElement("span", {
    style: navBtnTitle
  }, next.section)) : /*#__PURE__*/React.createElement("span", null)));
};
const navBtn = side => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  cursor: 'pointer',
  background: T.beige0,
  border: '1px solid rgba(31,29,26,0.15)',
  borderRadius: '6px',
  padding: '14px 20px',
  maxWidth: '46%',
  alignItems: side === 'right' ? 'flex-end' : 'flex-start',
  transition: 'border-color 200ms'
});
const navBtnTitle = {
  fontFamily: T.serif,
  fontSize: '16px',
  fontWeight: 400,
  color: T.negro
};
Object.assign(window, {
  Article
});
