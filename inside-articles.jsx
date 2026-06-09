/* ============================================================
   ACTIVUM INSIDE — Vistas de noticia (las 9 secciones)
   Cada sección tiene su propia maqueta editorial.
   ============================================================ */

/* ── Cabecera común de artículo ── */
const ArticleHeader = ({ s, wide = false }) => (
  <header style={{ maxWidth: wide ? 'none' : '760px', marginBottom: '36px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
      {s.num && <span style={{ fontFamily: T.serif, fontSize: '40px', fontWeight: 300,
        color: T.beige2, lineHeight: 1 }}>{s.num}</span>}
      {s.num && <div style={{ height: '28px', width: '1px', background: T.beige2 }} />}
      <Kicker color={T.acento}>
        {s.section}{s.promo ? ' · Promoción destacada' : ''}
      </Kicker>
    </div>
    <h1 style={{ fontFamily: T.serif, fontSize: 'clamp(34px, 4.4vw, 54px)', fontWeight: 300,
      lineHeight: 1.08, letterSpacing: '-0.02em', color: T.negro, margin: 0 }}>
      {s.title}
    </h1>
    <p style={{ fontFamily: T.serif, fontSize: '20px', fontStyle: 'italic', fontWeight: 300,
      lineHeight: 1.5, color: T.negro80, margin: '20px 0 0', maxWidth: '60ch' }}>
      {s.dek}
    </p>
  </header>
);

/* ── Nota de material pendiente ── */
const PendingNote = ({ children }) => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start',
    background: T.beige0, border: `1px dashed ${T.beige2}`, borderRadius: '4px',
    padding: '14px 18px', margin: '28px 0' }}>
    <span style={{ fontFamily: T.sans, fontSize: '9px', fontWeight: 600,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: T.blanco,
      background: T.acento, padding: '4px 8px', borderRadius: '3px', flexShrink: 0,
      marginTop: '1px' }}>Pendiente</span>
    <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.55,
      color: T.negro80, margin: 0 }}>{children}</p>
  </div>
);

/* ════════ 01 · Apertura de Dirección (vídeo + hitos) ════════ */
const AperturaBody = () => {
  const hitos = [
    {
      tag: 'Living',
      titulo: 'Dos activos operativos y rumbo a las 1.000 camas en 2027',
      texto: 'Activum ya cuenta con dos activos preparados para operar dentro del segmento Living y avanza en la hoja de ruta que marca como objetivo las 1.000 camas operativas en 2027.',
    },
    {
      tag: 'Asset Management',
      titulo: 'Residencia de estudiantes en Sevilla con Straco y Yugo',
      texto: 'La compañía desarrolla trabajos de asset management en una residencia de estudiantes en Sevilla, propiedad de Straco y operada por Yugo, optimizando su gestión y maximizando su valor.',
    },
    {
      tag: 'Build to Sell',
      titulo: 'Nuevo proyecto BTS en A Xubias, A Coruña',
      texto: 'Se abre una nueva oportunidad en el modelo Build to Sell con el desarrollo previsto en A Xubias (A Coruña), ampliando la presencia de Activum en mercados estratégicos.',
    },
    {
      tag: 'Carteras en alquiler',
      titulo: 'Privatización de la cartera residencial de Argis',
      texto: 'Activum está comercializando la privatización de una importante cartera de viviendas en alquiler propiedad de Argis, reforzando su capacidad para acompañar a propietarios institucionales en procesos complejos.',
    },
    {
      tag: 'Iniciativa solidaria',
      titulo: 'Kilómetros que se convierten en becas comedor para Honduras',
      texto: 'Próximo lanzamiento de una iniciativa que transformará los kilómetros recorridos por los empleados en una aportación de hasta 1.500 € para becas comedor, de la mano de la Fundación Almas Inquietas y la Fundación Verón.',
    },
  ];

  return (
    <div style={{ maxWidth: '900px' }}>

      {/* Vídeo YouTube */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9',
        borderRadius: '8px', overflow: 'hidden', background: T.negro,
        boxShadow: '0 8px 40px rgba(31,29,26,0.14)' }}>
        <iframe
          src="https://www.youtube.com/embed/tolNFjKYdcQ?rel=0&modestbranding=1"
          title="Mensaje de Cristina Balaguer — Activum Inside Nº1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        />
      </div>

      {/* Autora + texto introductorio */}
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '36px',
        alignItems: 'start', marginTop: '36px' }}>
        <div style={{ background: T.beige0, border: `1px solid rgba(31,29,26,0.10)`,
          borderRadius: '8px', padding: '24px 20px', textAlign: 'center' }}>
          <Slot id="aperturaFoto" ratio="1 / 1" shape="circle" radius={9999} label="Foto"
            style={{ width: '130px', height: '130px', margin: '0 auto 16px' }} />
          <div style={{ fontFamily: T.serif, fontSize: '18px', fontWeight: 400, color: T.negro,
            lineHeight: 1.25 }}>Cristina Balaguer</div>
          <Kicker color={T.negro50} style={{ fontSize: '10px', marginTop: '6px' }}>Directora General</Kicker>
        </div>

        <div>
          <p style={{ fontFamily: T.serif, fontSize: '22px', fontStyle: 'italic',
            fontWeight: 300, lineHeight: 1.55, color: T.negro, margin: '0 0 24px' }}>
            La primera edición de Activum Inside llega en un momento especialmente relevante para la compañía.
          </p>
          <p style={{ fontFamily: T.sans, fontSize: '16px', fontWeight: 300,
            lineHeight: 1.75, color: T.negro80, margin: '0 0 16px' }}>
            Durante los últimos meses, Activum ha continuado avanzando en su estrategia de crecimiento,
            ampliando su presencia en nuevos mercados y consolidando nuevas líneas de actividad que
            marcarán el futuro de la organización.
          </p>
          <p style={{ fontFamily: T.sans, fontSize: '16px', fontWeight: 300,
            lineHeight: 1.75, color: T.negro80, margin: '0 0 16px' }}>
            Uno de los ámbitos que está adquiriendo un peso cada vez más relevante es el <em>Living</em>.
            La transformación de las formas de habitar, la movilidad profesional y el auge de nuevos
            modelos residenciales están generando oportunidades que Activum lleva tiempo incorporando
            a su estrategia.
          </p>
          <p style={{ fontFamily: T.sans, fontSize: '16px', fontWeight: 300,
            lineHeight: 1.75, color: T.negro80, margin: 0 }}>
            Esta diversificación responde a una estrategia clara: seguir ampliando las capacidades
            de la compañía para acompañar a inversores, propietarios y operadores en distintos
            momentos del ciclo inmobiliario, reforzando al mismo tiempo el posicionamiento de Activum
            como socio de referencia en el ámbito residencial.
          </p>
        </div>
      </div>

      {/* Párrafos de cierre */}
      <div style={{ marginTop: '36px', padding: '32px 36px', background: T.beige0,
        borderRadius: '8px', border: `1px solid rgba(31,29,26,0.08)` }}>
        <p style={{ fontFamily: T.sans, fontSize: '16px', fontWeight: 300,
          lineHeight: 1.75, color: T.negro80, margin: '0 0 16px' }}>
          Pero el crecimiento de la compañía no se mide únicamente en proyectos y operaciones.
          Cristina también aprovecha este primer número de Activum Inside para poner en valor uno
          de los aspectos que considera fundamentales para el futuro de la organización: <strong>las personas</strong>.
        </p>
        <p style={{ fontFamily: T.sans, fontSize: '16px', fontWeight: 300,
          lineHeight: 1.75, color: T.negro80, margin: 0 }}>
          Con el lanzamiento de Activum Inside, la compañía da un paso más en su apuesta por la
          comunicación interna, creando un espacio para compartir proyectos, reconocer el trabajo
          de los equipos y reforzar una cultura corporativa basada en la colaboración, el conocimiento
          y una visión compartida de futuro.
        </p>
      </div>

      {/* Hitos del trimestre */}
      <div style={{ marginTop: '56px', paddingTop: '44px', borderTop: `1px solid ${T.beige2}` }}>
        <Kicker color={T.acento}>Hitos del trimestre</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '28px', fontWeight: 400,
          color: T.negro, margin: '12px 0 36px', lineHeight: 1.2 }}>
          Un trimestre en movimiento
        </h3>
        <div style={{ position: 'relative', paddingLeft: '36px' }}>
          <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px',
            width: '2px', background: T.beige2 }} />
          {hitos.map((h, i) => (
            <div key={i} style={{ position: 'relative',
              paddingBottom: i === hitos.length - 1 ? 0 : '40px' }}>
              <div style={{ position: 'absolute', left: '-36px', top: '5px', width: '16px',
                height: '16px', borderRadius: '9999px', background: T.acento,
                border: `3px solid ${T.blanco}`, boxShadow: `0 0 0 1px ${T.beige2}` }} />
              <Kicker color={T.acento} style={{ fontSize: '10px' }}>{h.tag}</Kicker>
              <h4 style={{ fontFamily: T.serif, fontSize: '22px', fontWeight: 400,
                color: T.negro, margin: '7px 0 10px', lineHeight: 1.25 }}>{h.titulo}</h4>
              <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300,
                lineHeight: 1.7, color: T.negro80, margin: 0, maxWidth: '68ch' }}>{h.texto}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

/* ════════ 03 · Activum en el Mundo (RSC) ════════ */
const MundoBody = () => (
  <div style={{ maxWidth: '900px' }}>
    <Slot id="mundoMain" ratio="4 / 3" radius={6} label="Sube la imagen del reto" />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
      margin: '28px 0 36px' }}>
      {[['—', 'Kilómetros recorridos'], ['—', 'Becas escolares'], ['—', 'Personas implicadas']].map(([n, l], i) => (
        <div key={i} style={{ background: T.beige1, borderRadius: '6px', padding: '24px 20px',
          textAlign: 'center' }}>
          <div style={{ fontFamily: T.serif, fontSize: '40px', fontWeight: 300, color: T.acento,
            lineHeight: 1 }}>{n}</div>
          <Kicker color={T.negro50} style={{ fontSize: '10px', marginTop: '8px' }}>{l}</Kicker>
        </div>
      ))}
    </div>
    <p style={{ fontFamily: T.serif, fontSize: '21px', fontStyle: 'italic', fontWeight: 300,
      lineHeight: 1.55, color: T.negro, maxWidth: '60ch', margin: '0 0 22px' }}>
      Cada kilómetro que recorremos se transforma en becas escolares para Honduras. Un reto
      solidario que une al equipo en torno a un propósito común.
    </p>
    <TextPh lines={4} />
    <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: `1px solid ${T.beige2}` }}>
      <Kicker color={T.negro50} style={{ fontSize: '10px' }}>Entidades colaboradoras</Kicker>
      <div style={{ display: 'flex', gap: '16px', marginTop: '14px' }}>
        {[0, 1].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px',
            background: T.beige0, border: '1px solid rgba(31,29,26,0.10)', borderRadius: '6px',
            padding: '12px 18px' }}>
            <Slot id={`mundoEnt${i}`} ratio="1 / 1" radius={4} label="Logo" style={{ width: '40px' }} />
            <span style={{ fontFamily: T.serif, fontSize: '15px', color: T.negro50 }}>Entidad pendiente</span>
          </div>
        ))}
      </div>
    </div>
    <PendingNote>
      Me falta el texto completo de <b>Activum en el Mundo</b> (descripción del reto, datos de
      impacto, entidades colaboradoras y fotos). Esta página queda preparada con esa estructura.
    </PendingNote>
  </div>
);

/* ════════ 04 · Wellbeing ════════ */
const wbHeadCell = {
  fontFamily: T.sans, fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
  textTransform: 'uppercase', color: 'rgba(245,243,242,0.9)', padding: '14px 18px',
};
const wbCellL = {
  fontFamily: T.serif, fontSize: '15px', fontWeight: 400, color: T.negro,
  padding: '16px 18px', lineHeight: 1.35,
};
const wbCellR = {
  fontFamily: T.sans, fontSize: '13px', fontWeight: 300, color: T.negro80,
  padding: '16px 18px', lineHeight: 1.55, borderLeft: `1px solid ${T.beige2}`,
};

const WBPhase = ({ label, lead }) => (
  <div style={{ marginTop: '44px', marginBottom: '4px' }}>
    <Kicker color={T.acento}>{label}</Kicker>
    <h4 style={{ fontFamily: T.serif, fontSize: '24px', fontWeight: 400, color: T.negro,
      margin: '10px 0 0', lineHeight: 1.2 }}>{lead}</h4>
  </div>
);

const WBIntro = ({ children }) => (
  <p style={{ fontFamily: T.sans, fontSize: '14.5px', fontWeight: 300, lineHeight: 1.7,
    color: T.negro80, margin: '14px 0 8px', maxWidth: '64ch' }}>{children}</p>
);

const WBTip = ({ n, title, children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '46px 1fr', gap: '18px',
    alignItems: 'start', padding: '20px 0', borderTop: `1px solid ${T.beige2}` }}>
    <span style={{ fontFamily: T.serif, fontSize: '32px', fontWeight: 300, color: T.acento,
      lineHeight: 0.9 }}>{n}</span>
    <div>
      <h5 style={{ fontFamily: T.serif, fontSize: '19px', fontWeight: 500, color: T.negro,
        margin: '0 0 8px', lineHeight: 1.25 }}>{title}</h5>
      <div style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.7,
        color: T.negro80 }}>{children}</div>
    </div>
  </div>
);

const WBStat = ({ figure, children }) => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: T.beige1,
    borderRadius: '8px', padding: '22px 26px', margin: '22px 0' }}>
    <div style={{ fontFamily: T.serif, fontSize: '52px', fontWeight: 300, color: T.acento,
      lineHeight: 0.9, flexShrink: 0 }}>{figure}</div>
    <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.6,
      color: T.negro80, margin: 0 }}>{children}</p>
  </div>
);

const WBTable = ({ rows }) => (
  <div style={{ marginTop: '32px', border: `1px solid ${T.beige2}`, borderRadius: '8px',
    overflow: 'hidden' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', background: T.negro }}>
      <div style={wbHeadCell}>Lo que nos pasa</div>
      <div style={{ ...wbHeadCell, borderLeft: '1px solid rgba(245,243,242,0.15)' }}>Qué podemos hacer</div>
    </div>
    {rows.map((r, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr',
        background: i % 2 ? T.beige0 : T.blanco, borderTop: `1px solid ${T.beige2}` }}>
        <div style={wbCellL}>{r[0]}</div>
        <div style={wbCellR}>{r[1]}</div>
      </div>
    ))}
  </div>
);

const WBArticleTitle = ({ id, kicker, title, lead }) => (
  <div id={id} style={{ marginTop: '56px', paddingTop: '40px',
    borderTop: `2px solid ${T.negro}`, scrollMarginTop: '110px' }}>
    <Kicker color={T.acento}>{kicker}</Kicker>
    <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 300,
      letterSpacing: '-0.02em', color: T.negro, margin: '12px 0 0', lineHeight: 1.1 }}>{title}</h2>
    <p style={{ fontFamily: T.serif, fontSize: '19px', fontStyle: 'italic', fontWeight: 300,
      lineHeight: 1.5, color: T.negro80, margin: '14px 0 0', maxWidth: '52ch' }}>{lead}</p>
  </div>
);

const WBCrossLink = ({ go, to, label, title, desc }) => (
  <div onClick={() => go(to)} style={{ cursor: 'pointer', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center', gap: '20px', background: T.beige1,
    border: `1px solid ${T.beige2}`, borderRadius: '8px', padding: '22px 26px', marginTop: '40px' }}
    onMouseEnter={e => e.currentTarget.style.background = T.beige2}
    onMouseLeave={e => e.currentTarget.style.background = T.beige1}>
    <div>
      <Kicker color={T.acento}>{label}</Kicker>
      <div style={{ fontFamily: T.serif, fontSize: '21px', fontWeight: 400, color: T.negro,
        margin: '8px 0 4px', lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, color: T.negro80,
        lineHeight: 1.5 }}>{desc}</div>
    </div>
    <span style={{ flexShrink: 0, fontFamily: T.serif, fontSize: '28px', color: T.acento }}>→</span>
  </div>
);

const WellbeingBody = ({ go }) => (
  <div style={{ maxWidth: '860px' }}>
    <Slot id="wellbeingMain" ratio="4 / 3" radius={6} label="Imagen de apoyo" />

    <p style={{ fontFamily: T.serif, fontSize: '22px', fontStyle: 'italic', fontWeight: 300,
      lineHeight: 1.5, color: T.negro, margin: '30px 0 18px', maxWidth: '60ch' }}>
      Desde hoy, Personas y Talento os trae una entrega práctica sobre bienestar. Sin
      tecnicismos, sin teoría vacía. Solo cosas que funcionan y que podéis aplicar desde hoy mismo.
    </p>

    {/* Por qué existe esta sección */}
    <div style={{ background: T.beige1, borderRadius: '8px', padding: '24px 28px', margin: '8px 0 4px' }}>
      <Kicker color={T.acento}>Por qué existe esta sección</Kicker>
      <p style={{ fontFamily: T.sans, fontSize: '14.5px', fontWeight: 300, lineHeight: 1.7,
        color: T.negro80, margin: '10px 0 0' }}>
        Trabajamos en un sector exigente, con proyectos complejos y clientes que esperan mucho.
        Eso tiene valor, pero también un coste si no aprendemos a gestionarlo. Esta sección no es
        un extra: es parte de cómo queremos trabajar en Activum.
      </p>
    </div>

    <WBPhase label="Al empezar el día" lead="Empieza con intención, no con urgencia." />
    <WBStat figure="60%">
      de los españoles revisa el móvil en los primeros 15 minutos tras despertarse. Ese gesto
      activa el modo reactivo del cerebro antes de que el sistema prefrontal —juicio y
      planificación— esté plenamente operativo.
    </WBStat>
    <WBTip n="01" title="Los primeros 15 minutos son tuyos.">
      No mires el móvil nada más despertarte. Ese margen antes del ruido digital le da al córtex
      prefrontal tiempo para activarse. Cuando lo primero que ves es un mensaje de trabajo sin
      resolver, llegas a la oficina ya en modo alerta. Cuando te tomas diez minutos con un café y
      sin pantallas, llegas habiendo decidido tú cómo empieza tu día. El trabajo es el mismo; la
      cabeza con la que lo afrontas, no.
    </WBTip>
    <WBTip n="02" title="Elige tres, no treinta.">
      Cada mañana escribe las tres tareas que sí tienen que ocurrir ese día. El cerebro bajo
      estrés infla la lista; reducirla a tres compromisos reales da dirección sin agobiar. No se
      trata de hacer solo tres cosas, sino de identificar las tres que no pueden quedarse sin
      hacer. Empieza por ellas: si al terminarlas tienes energía, sigue con lo demás; si no, el
      día ya ha sido productivo.
    </WBTip>

    <WBPhase label="Durante la jornada" lead="Priorizar y delegar no es rendirse." />
    <WBStat figure="15-23′">
      es lo que tarda el cerebro en recuperar la concentración tras cada cambio de tarea —el
      «coste de cambio de tarea»—. Si nos interrumpimos cada 10 minutos, nunca llegamos a
      concentrarnos de verdad.
    </WBStat>
    <WBTip n="01" title="Urgente no siempre significa importante.">
      Bajo presión, el cerebro trata cualquier interrupción como una amenaza que resolver ya.
      Antes de reaccionar, pregúntate: «¿qué pasa si esto espera dos horas?». Casi siempre la
      respuesta es: nada. Reserva tu mejor energía para lo que realmente mueve las cosas, no para
      lo que simplemente llega primero.
    </WBTip>
    <WBTip n="02" title="Delegar es multiplicar capacidad, no perder control.">
      Si alguien puede resolver una tarea al 80% de cómo la harías tú, delégala. El 20% restante
      rara vez justifica el coste de tenerla ocupando tu cabeza mientras lo que solo tú puedes
      hacer sigue esperando. Ceder no es perder el control: es elegir dónde poner tu energía.
    </WBTip>
    <WBTip n="03" title="Bloques de foco sin interrupciones.">
      Elige una tarea importante, pon el móvil boca abajo, cierra el correo y trabaja 60 minutos
      sin interrupciones. Avanzarás más que en toda una tarde fragmentada. Agrupa la revisión del
      correo en dos momentos fijos al día y protege el resto. No es rigidez: es respeto por tu
      propio rendimiento.
    </WBTip>

    <WBPhase label="Cuando te quedas atascado" lead="El bloqueo es una señal, no un fracaso." />
    <WBIntro>
      Se llama rumiación cognitiva: la mente vuelve una y otra vez a un problema sin resolverlo,
      consumiendo recursos en segundo plano. No es falta de voluntad. Cuanto más intentas forzar
      la solución, más se activa el bucle. Lo que lo interrumpe no es el esfuerzo, es el cambio
      de activación.
    </WBIntro>
    <WBTip n="01" title="Cambia de tarea durante 20 minutos.">
      Levántate y haz algo completamente distinto: ordena la mesa, responde un correo sencillo,
      prepara un café. No es escaquearse: es darle al cerebro la señal de que puede soltar el
      problema. Cuando vuelves, muchas veces algo ha cambiado —no porque hayas pensado más, sino
      porque has dejado de hacerlo.
    </WBTip>
    <WBTip n="02" title="Escríbelo, no lo rumies.">
      Escribe en tres líneas qué es exactamente lo que te bloquea. No para resolverlo: solo para
      sacarlo de la cabeza. El cerebro deja de retenerlo cuando confía en que está registrado en
      algún sitio. Y muchas veces, al escribirlo, la solución aparece sola.
    </WBTip>

    <WBPhase label="Al cerrar el día" lead="Desconectar también es parte del trabajo." />
    <WBIntro>
      El estrés no procesado al final del día se convierte en activación nocturna del sistema
      nervioso: el cuerpo no recibe la señal de que el trabajo ha terminado y sigue en alerta. Un
      cierre consciente —por breve que sea— interrumpe ese mecanismo y protege la energía del día
      siguiente.
    </WBIntro>
    <WBTip n="01" title="Cierre del día en dos minutos.">
      Antes de apagar el ordenador, escribe dos cosas: lo que has completado hoy y las dos o tres
      tareas que siguen mañana. Mientras estén solo en tu cabeza, seguirá procesándolas en bucle
      aunque hayas parado. Cuando están escritas en un sitio de confianza, el sistema cognitivo
      las suelta.
    </WBTip>
    <WBTip n="02" title="Desconectar es un hábito, no un lujo.">
      Elige una hora a partir de la cual no miras el correo ni los mensajes de trabajo. No tiene
      que ser perfecta cada día, pero sí consistente. El límite claro le enseña al sistema
      nervioso cuándo puede bajar la guardia. Y lo que repites cada día acaba convirtiéndose en
      quién eres.
    </WBTip>

    <WBTable rows={[
      ['Empezamos el día en modo alerta antes de decidir nada', '15 min sin móvil al despertar. Tres tareas del día antes de abrir el correo.'],
      ['Trabajamos mucho y no hemos avanzado en nada', 'Bloquea 60–90 min sin notificaciones. Correo en dos momentos al día.'],
      ['Todo parece urgente a la vez', '¿Qué pasa si espera dos horas? Reserva energía para lo que impacta.'],
      ['Llevamos un rato bloqueados', 'Cambia de tarea 20 min. Escribe en tres líneas qué te bloquea.'],
      ['La cabeza no para aunque hayamos salido', 'Cierre de dos minutos: completado hoy + qué sigue mañana.'],
    ]} />

    {/* Sigue leyendo */}
    <WBCrossLink go={go} to="cuerpo" label="Sigue leyendo · 05"
      title="El cuerpo también trabaja"
      desc="Por qué moverse cambia cómo piensas, no solo cómo te sientes." />

    <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, color: T.negro50,
      margin: '22px 0 0', textAlign: 'center' }}>
      Esta sección es vuestra. Escríbenos a{' '}
      <a href="mailto:rrhh@activum.es" style={{ color: T.acento, fontWeight: 500 }}>rrhh@activum.es</a>
    </p>
  </div>
);

/* ════════ 05 · El cuerpo también trabaja ════════ */
const CuerpoBody = ({ go }) => (
  <div style={{ maxWidth: '860px' }}>
    <Slot id="cuerpoMain" ratio="4 / 3" radius={6} label="Imagen de apoyo" />
    <p style={{ fontFamily: T.serif, fontSize: '22px', fontStyle: 'italic', fontWeight: 300,
      lineHeight: 1.5, color: T.negro, margin: '30px 0 8px', maxWidth: '60ch' }}>
      Segunda entrega de bienestar de Personas y Talento. Esta vez, el cuerpo: por qué moverse
      cambia cómo piensas, no solo cómo te sientes.
    </p>

    <WBPhase label="Lo que pasa cuando no nos movemos" lead="El sedentarismo no es solo un problema físico." />
    <WBStat figure="90′">
      A partir de hora y media sentados, el flujo sanguíneo al cerebro disminuye de forma
      medible, la atención cae y la capacidad de decidir se deteriora. No es falta de motivación:
      es fisiología.
    </WBStat>
    <WBTip n="01" title="Levántate cada 90 minutos, aunque sean 5.">
      No hace falta pasear ni hacer ejercicio. Basta con ponerte de pie, ir a por agua o
      estirarte en el pasillo. Ese gesto activa la circulación, restablece el oxígeno y resetea
      la atención. Pon un temporizador: la intención sola no funciona, siempre hay una razón para
      no levantarse justo cuando más lo necesitas.
    </WBTip>
    <WBTip n="02" title="Caminar desbloquea lo que la pantalla atasca.">
      Sal a caminar diez minutos sin móvil, sin auriculares, sin objetivo. Caminar aumenta el
      pensamiento creativo y asociativo hasta un 81% respecto a estar sentado. No es casualidad
      que las mejores ideas lleguen en la ducha o paseando: el cerebro en movimiento conecta de
      forma diferente.
    </WBTip>

    <WBPhase label="El bucle entre tensión física y mental" lead="El estrés tensa el cuerpo. El cuerpo tenso mantiene el estrés." />
    <WBIntro>
      Comprueba ahora mismo tus hombros: ¿subidos hacia las orejas? ¿la mandíbula apretada? El
      estrés mental genera tensión muscular real, y esa tensión mantiene activo el sistema de
      alerta. Es un bucle que se autoalimenta —e interrumpirlo no requiere gimnasio, solo dos
      minutos y saber qué hacer.
    </WBIntro>
    <WBTip n="01" title="Dos minutos de respiración lenta interrumpen el ciclo.">
      Inspira contando cuatro segundos, espira contando seis. Repítelo durante dos minutos. No es
      relajación: es una intervención fisiológica que activa el nervio vago, el freno natural del
      sistema de alerta. Puedes hacerlo en la silla, en el coche o en el baño. Funciona.
    </WBTip>
    <WBTip n="02" title="Integra el movimiento en lo que ya haces.">
      No añadas una actividad más: haz diferente lo que ya haces. La llamada que no necesita
      pantalla, caminando. La reunión de dos personas, de pie o dando una vuelta. Las escaleras en
      vez del ascensor. Sumado, son entre 20 y 35 minutos de movimiento sin tocar la agenda.
    </WBTip>
    <WBTip n="03" title="Cinco minutos para soltar la tensión.">
      Tres estiramientos desde la silla, sin material:
      <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
        <li style={{ marginBottom: '6px' }}><b>Cuello.</b> Lleva la oreja al hombro, 20 s cada lado. Deja caer el peso con suavidad.</li>
        <li style={{ marginBottom: '6px' }}><b>Trapecios y hombros.</b> Entrelaza los dedos y estira hacia el techo, 15 s; luego junta los omóplatos. Dos veces.</li>
        <li><b>Espalda baja.</b> Cruza un tobillo sobre la rodilla contraria e inclínate adelante con la espalda recta, 20 s por lado.</li>
      </ul>
    </WBTip>

    <WBTable rows={[
      ['A media mañana la cabeza no responde, aunque hayas dormido bien', 'Levántate 5 min cada 90 min. Pon un temporizador.'],
      ['Llevas un rato bloqueado y la pantalla no da más', 'Camina 10 minutos antes de volver. No es tiempo perdido.'],
      ['Acabas el día con el cuerpo tenso sin saber por qué', '2 min de respiración: 4 seg inspirar / 6 seg espirar.'],
      ['Cuello, hombros y espalda cargados', '5 min de estiramiento desde la silla, a media mañana.'],
      ['Quieres moverte más pero no encuentras el momento', 'Reuniones caminando, llamadas de pie, escaleras: 20–35 min.'],
    ]} />

    {/* Volver a la primera entrega */}
    <WBCrossLink go={go} to="wellbeing" label="Primera entrega · 04"
      title="Gestiona el estrés del día a día"
      desc="Desde que te levantas hasta que cierras el ordenador." />

    {/* Cierre */}
    <div style={{ background: T.negro, borderRadius: '8px', padding: '36px 40px', marginTop: '40px',
      textAlign: 'center' }}>
      <p style={{ fontFamily: T.serif, fontSize: '23px', fontStyle: 'italic', fontWeight: 300,
        color: T.blanco, margin: 0, lineHeight: 1.4 }}>
        Nadie puede dar lo mejor de sí en el trabajo si no se cuida primero a sí mismo.
        ¿Qué es lo primero que vas a cambiar esta semana?
      </p>
      <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300,
        color: 'rgba(245,243,242,0.7)', margin: '20px 0 0' }}>
        Esta sección es vuestra. Si hay algo que queréis que abordemos, escribid a{' '}
        <a href="mailto:rrhh@activum.es" style={{ color: T.acentoLight, fontWeight: 500 }}>
          rrhh@activum.es
        </a>
      </p>
    </div>
  </div>
);

/* ════════ 05 · Beneficios para Empleados ════════ */
const BeneficiosBody = () => {
  const ofertas = [
    {
      cat: 'Moda y deporte', marca: 'Adidas', slotId: 'benImg0',
      desc: 'Prepárate para nuestro reto de convertir km en becas escolares en Honduras con este descuento del 30% en artículos seleccionados en la tienda online oficial de Adidas y un 5% adicional en artículos outlet ya rebajados. La actitud y las ganas de ayudar ya las tenemos… ahora sólo te faltan las zapatillas y la ropa. Corre (y nunca mejor dicho) y no dejes escapar este descuento.',
    },
    {
      cat: 'Tecnología', marca: 'Samsung', slotId: 'benImg1',
      desc: 'El Mundial, mejor en grande. Aprovecha los descuentos exclusivos de Samsung para empleados y disfruta de hasta un 29% en televisores seleccionados y hasta un 62% en otros modelos y barras de sonido. Porque hay goles, paradas… y polémicas arbitrales que merecen verse con la mejor calidad posible.',
    },
    {
      cat: 'Viajes', marca: 'lastminute.com', slotId: 'benImg2',
      desc: 'Seguro que ya hay muchos de vosotros que ya tienen cerrado el verano… y luego estamos el resto, mirando vuelos un martes a las 23:47 "solo por curiosidad". Sea para una escapada improvisada, unas vacaciones en la playa o ese viaje que llevas tiempo queriendo hacer, aprovecha este descuento exclusivo de lastminute.com y empieza a preparar la maleta. Ámsterdam, Baleares, Nueva York… el problema no será encontrar destino, sino decidir cuál elegir.',
    },
    {
      cat: 'Formación · Idiomas', marca: 'Babbel', slotId: 'benImg3',
      desc: 'Siempre decimos que algún día aprenderemos inglés, italiano o francés… hasta que llega el verano y acabamos comunicándonos con un "thank you", una sonrisa y lenguaje de signos. Aunque, viendo que hasta Antonio Lodeiro se ha lanzado ya con el holandés, quizá ha llegado el momento de dejar las excusas atrás. Aprovecha este descuento de hasta el 60% en Babbel. Solo necesitas 10 minutos al día… y un poco de valentía.',
    },
  ];
  return (
    <div style={{ maxWidth: '960px' }}>

      {/* Banner */}
      <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden',
        background: T.acento, backgroundImage: 'url("assets/pattern-dark.svg")',
        backgroundSize: 'cover' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(110,31,50,0.78)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '52px 48px', textAlign: 'center' }}>
          <Kicker color="rgba(245,243,242,0.7)">Beneficios Activum</Kicker>
          <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300,
            color: T.blanco, margin: '14px 0 12px', lineHeight: 1.1 }}>
            Este trimestre, ahorra en grande
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300,
            color: 'rgba(245,243,242,0.82)', margin: 0, letterSpacing: '0.04em' }}>
            Moda · Tecnología · Viajes · Ocio · Formación
          </p>
          <img src="assets/logo-negative.svg" alt="Activum"
            style={{ height: '26px', marginTop: '26px', opacity: 0.92 }} />
        </div>
      </div>

      {/* Pregunta titular */}
      <p style={{ fontFamily: T.serif, fontSize: '26px', fontWeight: 400, fontStyle: 'italic',
        lineHeight: 1.35, color: T.negro, margin: '40px 0 20px', maxWidth: '60ch' }}>
        ¿Todavía no conoces la plataforma de descuentos para empleados de Activum?
      </p>

      {/* Intro + acceso */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '32px',
        alignItems: 'start', marginBottom: '44px' }}>
        <div>
          <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
            color: T.negro80, margin: '0 0 14px' }}>
            Desde hace unas semanas todos los empleados tenemos acceso gratuito a una plataforma
            exclusiva con descuentos y ventajas en primeras marcas de moda, tecnología, viajes,
            ocio, formación y mucho más.
          </p>
          <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
            color: T.negro80, margin: '0 0 14px' }}>
            El acceso es muy sencillo: solo necesitas registrarte con tu <strong>correo
            corporativo</strong> y comenzar a disfrutar de todas las ventajas disponibles.
          </p>
          <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.7,
            color: T.negro50, margin: 0 }}>
            Además, cada mes se incorporan nuevas ofertas y promociones, por lo que merece la
            pena echarle un vistazo de vez en cuando… especialmente antes de reservar unas
            vacaciones, renovar tecnología o darte algún capricho.
          </p>
        </div>
        <div style={{ background: T.beige1, borderRadius: '8px', padding: '26px' }}>
          <Kicker color={T.acento} style={{ fontSize: '10px' }}>Cómo acceder</Kicker>
          <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.6,
            color: T.negro80, margin: '12px 0 8px' }}>
            Desde la web:
          </p>
          <a href="https://activum.benefitsatwork.es" target="_blank" rel="noopener"
            style={{ display: 'block', fontFamily: T.sans, fontSize: '13px', fontWeight: 500,
              color: T.acento, textDecoration: 'none', marginBottom: '16px',
              wordBreak: 'break-all' }}>
            activum.benefitsatwork.es →
          </a>
          <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.6,
            color: T.negro80, margin: '0 0 20px' }}>
            O directamente desde el apartado de enlaces de la pantalla de inicio de <strong>Factorial</strong>.
          </p>
          <a href="https://activum.benefitsatwork.es" target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: T.sans,
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: T.blanco, background: T.negro, padding: '12px 20px', borderRadius: '4px',
              textDecoration: 'none' }}>
            Ir a la plataforma →
          </a>
        </div>
      </div>

      {/* Descuentos destacados */}
      <Kicker color={T.acento}>Descuentos destacados de esta edición</Kicker>
      <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.65,
        color: T.negro80, margin: '12px 0 28px', maxWidth: '70ch' }}>
        Y para ponértelo todavía más fácil, hemos seleccionado algunos de los descuentos
        destacados que puedes encontrar ahora mismo en la plataforma:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {ofertas.map((o, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '0',
            background: T.beige0, border: '1px solid rgba(31,29,26,0.10)', borderRadius: '8px',
            overflow: 'hidden' }}>
            <Slot id={o.slotId} ratio="4 / 3" shape="rect" radius={0} label={`Imagen ${o.marca}`}
              style={{ height: '100%' }} />
            <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', gap: '10px' }}>
              <Kicker color={T.acento} style={{ fontSize: '10px' }}>{o.cat}</Kicker>
              <div style={{ fontFamily: T.serif, fontSize: '24px', fontWeight: 400,
                color: T.negro, lineHeight: 1.1 }}>{o.marca}</div>
              <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.65,
                color: T.negro80, margin: 0 }}>{o.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 300, color: T.negro50,
        margin: '24px 0 0', textAlign: 'center' }}>
        Encuentra el código de descuento en tu cuenta personal de la plataforma.
      </p>
    </div>
  );
};

/* ════════ 06 · En Primera Persona (entrevista) ════════ */
const PrimeraBody = () => {
  const qa = [
    {
      q: 'Si te hubieran dicho hace años que acabarías siendo responsable de Sistemas, ¿qué habrías pensado?',
      a: 'En mis dos primeros años como colaborador, ni se me pasaba por la cabeza. Antes de la pandemia pensé «¿y cuándo se jubile Javier, quién hará su trabajo? Podría ser yo». Pero cuando me lo propusieron, no me lo esperaba.',
    },
    {
      q: 'Llegaste a tener una granja de caracoles. ¿Cómo surgió aquella aventura?',
      a: 'Ni lo sé. En Mallorca se consume mucho caracol todo el año. Se había montado una granja grande en un pueblo cercano, en alguna conversación saldría el tema, me puse a investigar y al poco estaba presentando papeles y el plan de negocio en el banco.',
    },
    {
      q: 'Mirándolo con perspectiva, ¿qué aprendizaje te dejó?',
      a: 'A ser constante y a priorizar. Los caracoles comían cada día, eso no podías dejar de hacerlo. Los demás trabajos los ibas encajando, pero ese sí o sí se tenía que hacer.',
    },
    {
      q: '¿Qué es lo que más disfrutas de tu trabajo al frente del área de Sistemas?',
      a: 'Que tengo contacto con todas las áreas, trato con mucha gente y tengo una visión más completa del trabajo de los demás. Antes, como administrativo de producto, estaba más limitado.',
    },
    {
      q: 'Fuera del trabajo, ¿cómo es Daniel?',
      a: 'Soy muy casero. Para desconectar al 100%, casa, sofá y tele. Y si hablamos del Dani fuera del trabajo: familia, amigos, mi proyecto de domótica en casa, una cena. Y, en secreto, las series de abogados y los libros de John Grisham.',
    },
    {
      q: 'Si pudieras darle un consejo al Daniel de hace 20 años, ¿cuál sería?',
      a: 'Que fuera valiente y saliera fuera a estudiar o trabajar. Pero sa roqueta (Mallorca) tira mucho: un mallorquín viaja por todo el mundo, pero siempre vuelve a la isla.',
    },
  ];
  return (
    <div style={{ maxWidth: '860px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px',
        alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: '40px' }}>
          <Slot id="primeraMain" ratio="4 / 5" radius={6} label="Foto de Daniel" />
          <div style={{ marginTop: '16px' }}>
            <div style={{ fontFamily: T.serif, fontSize: '22px', fontWeight: 400, color: T.negro }}>
              Daniel Ovejero
            </div>
            <Kicker color={T.negro50} style={{ fontSize: '10px', marginTop: '6px' }}>Responsable de Sistemas</Kicker>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: T.sans, fontSize: '16px', fontWeight: 300, lineHeight: 1.75,
            color: T.negro80, margin: '0 0 30px' }}>
            No todos los caminos son lineales. El de Daniel Ovejero, nuestro Dani, ha pasado
            por proyectos inesperados, cambios profesionales y muchas reinvenciones hasta
            convertirse en una de las personas con mayor visión transversal de Activum.
          </p>
          {qa.slice(0, 3).map((item, i) => <QABlock key={i} {...item} />)}

          <blockquote style={{ fontFamily: T.serif, fontSize: '27px', fontStyle: 'italic',
            fontWeight: 300, lineHeight: 1.35, color: T.negro, margin: '14px 0 32px',
            paddingLeft: '22px', borderLeft: `3px solid ${T.acento}` }}>
            «Siempre abierto a los cambios y aprovechando las coyunturas que la vida te ofrece.»
          </blockquote>

          {qa.slice(3).map((item, i) => <QABlock key={i} {...item} />)}

          <div style={{ background: T.negro, borderRadius: '8px', padding: '28px 32px',
            marginTop: '12px', textAlign: 'center' }}>
            <Kicker color={T.acentoLight}>La palabra con la que define Activum</Kicker>
            <div style={{ fontFamily: T.serif, fontSize: '44px', fontWeight: 300, fontStyle: 'italic',
              color: T.blanco, marginTop: '10px' }}>Familia</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QABlock = ({ q, a }) => (
  <div style={{ paddingBottom: '24px', marginBottom: '24px',
    borderBottom: `1px solid ${T.beige2}` }}>
    <h4 style={{ fontFamily: T.serif, fontSize: '19px', fontWeight: 500, color: T.negro,
      margin: '0 0 12px', lineHeight: 1.3 }}>{q}</h4>
    <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.7,
      color: T.negro80, margin: 0 }}>{a}</p>
  </div>
);

/* ════════ 07 · Bit a Bit (infografía de phishing) ════════ */
const BitabitBody = () => {
  const alertas = [
    { n: '1', t: 'El remitente improbable', d: '¿Realmente esa persona se pondría en contacto conmigo para pedirme esto? Dirección no te pide comprar tarjetas regalo ni enviar dinero.' },
    { n: '2', t: 'La composición del mensaje', d: 'Qué dice, cómo lo dice, quién lo manda y el @dominio desde el que se envía. Todo el conjunto importa.' },
    { n: '3', t: 'Enlaces y peticiones', d: 'La inclusión de enlaces y cualquier petición de dinero o de datos personales debe ponerte en alerta.' },
  ];
  const senales = [
    ['El remitente', 'Antes de escribirte a ti, Dirección se escribiría entre ellos. Si algo no es lógico, sospecha.'],
    ['El dominio (tras la @)', 'Fíjate en lo que aparece detrás —y a veces delante— de la @. En el 95% de los casos no tiene sentido.'],
    ['El cuerpo del correo', 'Escueto, sin formato, con faltas de ortografía, palabras poco habituales o traducciones literales del inglés.'],
    ['La urgencia', '«Actúa ya», «último aviso», «tu cuenta será bloqueada». Buscan que actúes sin pensar. Tómate un minuto.'],
  ];
  const pasos = [
    'No sigas interactuando: cierra la web o el mensaje abierto.',
    'Elimina el correo (Mayús + Supr lo borra del todo, sin pasar por Eliminados).',
    'Pasa un examen completo con Defender (Seguridad de Windows).',
    'Avísanos para cerrar sesiones, revisar el doble factor y cambiar contraseñas.',
  ];
  return (
    <div style={{ maxWidth: '900px' }}>
      <p style={{ fontFamily: T.serif, fontSize: '21px', fontStyle: 'italic', fontWeight: 300,
        lineHeight: 1.55, color: T.negro, maxWidth: '62ch', margin: '0 0 14px' }}>
        Un correo urgente. Un supuesto mensaje de Dirección. Un enlace que parece legítimo.
        Así empiezan muchos fraudes.
      </p>
      <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.7,
        color: T.negro80, maxWidth: '62ch', margin: '0 0 36px' }}>
        El <b>phishing</b> (del inglés, «pescar») es el engaño para robar información
        haciéndose pasar por alguien de confianza —por correo, SMS o WhatsApp—. La buena
        noticia: casi siempre deja pistas. Aprender a verlas evita incidentes.
      </p>

      {/* 3 alertas rojas */}
      <Kicker color={T.acento}>Tres alertas rojas</Kicker>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
        margin: '16px 0 40px' }}>
        {alertas.map(a => (
          <div key={a.n} style={{ background: T.negro, borderRadius: '8px', padding: '24px',
            position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontFamily: T.serif, fontSize: '52px', fontWeight: 300,
              color: T.acentoLight, lineHeight: 0.9, marginBottom: '12px' }}>{a.n}</div>
            <div style={{ fontFamily: T.serif, fontSize: '18px', fontWeight: 400, color: T.blanco,
              marginBottom: '8px', lineHeight: 1.25 }}>{a.t}</div>
            <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.6,
              color: 'rgba(245,243,242,0.7)', margin: 0 }}>{a.d}</p>
          </div>
        ))}
      </div>

      {/* Señales en un correo */}
      <Kicker color={T.acento}>Dónde fijarse</Kicker>
      <h3 style={{ fontFamily: T.serif, fontSize: '26px', fontWeight: 400, color: T.negro,
        margin: '10px 0 20px' }}>Anatomía de un correo sospechoso</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px',
        marginBottom: '20px' }}>
        {senales.map(([t, d], i) => (
          <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start',
            background: T.beige0, border: '1px solid rgba(31,29,26,0.10)', borderRadius: '6px',
            padding: '18px 20px' }}>
            <span style={{ fontFamily: T.sans, fontSize: '11px', fontWeight: 600, color: T.acento,
              fontVariantNumeric: 'tabular-nums', marginTop: '2px' }}>0{i + 1}</span>
            <div>
              <div style={{ fontFamily: T.serif, fontSize: '17px', fontWeight: 400, color: T.negro }}>{t}</div>
              <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.55,
                color: T.negro80, margin: '4px 0 0' }}>{d}</p>
            </div>
          </div>
        ))}
      </div>
      <Slot id="bitabitEj" ratio="16 / 6" radius={6} label="Ejemplo de dominio sospechoso" />

      {/* Si ya has hecho clic */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px',
        margin: '40px 0 0', alignItems: 'start' }}>
        <div style={{ background: T.beige1, borderRadius: '8px', padding: '26px' }}>
          <Kicker color={T.acento}>Ante la duda</Kicker>
          <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.65,
            color: T.negro80, margin: '12px 0 14px' }}>
            No contestes al mensaje. Llama a tu responsable o al CAU para aclararlo, e infórmalo
            como suplantación de identidad (botón derecho → <i>Informar de phishing</i>).
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: T.blanco, border: '1px solid rgba(31,29,26,0.12)', borderRadius: '6px',
            padding: '10px 16px' }}>
            <span style={{ fontFamily: T.sans, fontSize: '10px', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: T.negro50 }}>CAU</span>
            <span style={{ fontFamily: T.serif, fontSize: '18px', color: T.negro }}>965 04 91 37</span>
          </div>
        </div>
        <div style={{ background: T.beige0, border: '1px solid rgba(31,29,26,0.10)',
          borderRadius: '8px', padding: '26px' }}>
          <Kicker color={T.acento}>Si ya has hecho clic</Kicker>
          <ol style={{ margin: '14px 0 0', padding: 0, listStyle: 'none',
            counterReset: 'step' }}>
            {pasos.map((p, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start',
                padding: '9px 0', borderTop: i ? `1px solid ${T.beige2}` : 'none' }}>
                <span style={{ width: '22px', height: '22px', flexShrink: 0, borderRadius: '9999px',
                  background: T.negro, color: T.blanco, fontFamily: T.sans, fontSize: '11px',
                  fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {i + 1}</span>
                <span style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.5,
                  color: T.negro80 }}>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Consejo final */}
      <div style={{ background: T.negro, borderRadius: '8px', padding: '32px 36px',
        marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <BrandIcon n={2} size={40} color={T.blanco} />
        <div>
          <p style={{ fontFamily: T.serif, fontSize: '21px', fontStyle: 'italic', fontWeight: 300,
            color: T.blanco, margin: 0, lineHeight: 1.4 }}>
            «Antes de hacer clic o compartir datos, para y verifica. 10 segundos pueden evitar
            un incidente.»
          </p>
          <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300,
            color: 'rgba(245,243,242,0.6)', margin: '10px 0 0' }}>
            Y una segunda: actualiza el ordenador al menos una vez por semana.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ════════ 08 · Galería Activum ════════ */
const GaleriaBody = () => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
      {Array.from({ length: 9 }).map((_, i) => (
        <Slot key={i} id={`gal${i}`} ratio="4 / 3" radius={4} label="Foto" />
      ))}
    </div>
    <PendingNote>
      Material a aportar por Comunicación: selección de <b>6 a 12 fotos</b> en alta resolución
      y pies de foto opcionales (máx. 10 palabras). Priorizar fotos de personas.
    </PendingNote>

    {/* Llamada a participar — sube tu foto */}
    <div style={{ marginTop: '40px', background: T.negro, borderRadius: '8px',
      padding: '40px 44px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("assets/pattern-dark.svg")',
        backgroundSize: '420px', opacity: 0.16, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: '640px' }}>
        <Kicker color={T.acento}>Participa</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '27px', fontWeight: 400, color: T.blanco,
          margin: '10px 0 16px', lineHeight: 1.2 }}>
          ¿Tienes una foto que merezca estar aquí?
        </h3>
        <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
          color: 'rgba(245,243,242,0.78)', margin: '0 0 26px' }}>
          Esta galería está abierta a todos los equipos. Si tienes fotografías de proyectos,
          eventos, hitos, visitas, reuniones o momentos que reflejen nuestro trabajo y nuestra
          cultura, compártelas con nosotros para futuras ediciones.
        </p>
        <a href="mailto:comunicacion@activum.es?subject=Foto%20para%20la%20Galer%C3%ADa%20Activum"
          style={{ display: 'inline-block', fontFamily: T.sans, fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: T.negro, background: T.blanco,
            padding: '14px 30px', borderRadius: '4px', textDecoration: 'none',
            transition: 'background 200ms, color 200ms' }}
          onMouseEnter={e => { e.currentTarget.style.background = T.acento; e.currentTarget.style.color = T.blanco; }}
          onMouseLeave={e => { e.currentTarget.style.background = T.blanco; e.currentTarget.style.color = T.negro; }}>
          Envía tu foto a comunicacion@activum.es
        </a>
      </div>
    </div>
  </div>
);

/* ── Formulario del buzón (envía por correo a comunicación) ── */
const BuzonForm = () => {
  const [nombre, setNombre] = React.useState('');
  const [tipo, setTipo] = React.useState('Idea');
  const [mensaje, setMensaje] = React.useState('');
  const tipos = ['Idea', 'Historia', 'Sugerencia', 'Proponer entrevistado'];

  const field = {
    fontFamily: T.sans, fontSize: '14px', color: T.negro, background: T.blanco,
    border: '1px solid rgba(31,29,26,0.18)', borderRadius: '6px', padding: '11px 13px',
    outline: 'none', width: '100%',
  };
  const labelSt = {
    fontFamily: T.sans, fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: T.negro80, marginBottom: '6px', display: 'block',
  };

  const submit = e => {
    e.preventDefault();
    const subject = `Activum Lab · ${tipo}`;
    const body =
      `Tipo: ${tipo}\n` +
      (nombre ? `Nombre: ${nombre}\n` : '') +
      `\n${mensaje}\n`;
    window.location.href =
      `mailto:comunicacion@activum.es?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={submit} style={{ background: T.beige0, border: `1px solid ${T.beige2}`,
      borderRadius: '8px', padding: '28px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
        marginBottom: '16px' }}>
        <div>
          <label style={labelSt}>Tu nombre <span style={{ color: T.negro50 }}>(opcional)</span></label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}
            placeholder="Cómo te llamas" style={field}
            onFocus={e => e.target.style.borderColor = T.acento}
            onBlur={e => e.target.style.borderColor = 'rgba(31,29,26,0.18)'} />
        </div>
        <div>
          <label style={labelSt}>Tipo de aportación</label>
          <select value={tipo} onChange={e => setTipo(e.target.value)} style={field}
            onFocus={e => e.target.style.borderColor = T.acento}
            onBlur={e => e.target.style.borderColor = 'rgba(31,29,26,0.18)'}>
            {tipos.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={labelSt}>Tu propuesta</label>
        <textarea required rows={5} value={mensaje} onChange={e => setMensaje(e.target.value)}
          placeholder="Cuéntanos tu idea, historia o sugerencia…"
          style={{ ...field, resize: 'vertical', lineHeight: 1.6 }}
          onFocus={e => e.target.style.borderColor = T.acento}
          onBlur={e => e.target.style.borderColor = 'rgba(31,29,26,0.18)'} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '16px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 300, color: T.negro50,
          maxWidth: '46ch', lineHeight: 1.5 }}>
          Al enviar se abrirá tu correo con el mensaje ya redactado a
          comunicacion@activum.es. Solo tienes que pulsar enviar.
        </span>
        <button type="submit"
          style={{ flexShrink: 0, fontFamily: T.sans, fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: T.blanco, background: T.negro,
            padding: '14px 30px', borderRadius: '4px', border: 'none', cursor: 'pointer',
            transition: 'background 200ms' }}
          onMouseEnter={e => e.currentTarget.style.background = T.acento}
          onMouseLeave={e => e.currentTarget.style.background = T.negro}>
          Enviar propuesta
        </button>
      </div>
    </form>
  );
};

/* ════════ 09 · Activum Lab (buzón de participación) ════════ */
const BuzonBody = () => (
  <div style={{ maxWidth: '820px' }}>
    <p style={{ fontFamily: T.serif, fontSize: '21px', fontStyle: 'italic', fontWeight: 300,
      lineHeight: 1.55, color: T.negro, margin: '0 0 16px', maxWidth: '60ch' }}>
      Las mejores ideas no siempre nacen en los despachos o en las reuniones. Muchas veces
      surgen en el día a día, en el contacto con los equipos, los clientes o los procesos.
    </p>
    <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
      color: T.negro80, margin: '0 0 32px', maxWidth: '60ch' }}>
      Por eso nace <b>Activum Lab</b>, un espacio abierto para compartir ideas, propuestas y
      sugerencias que nos ayuden a seguir mejorando como compañía. Ya sea una gran idea o una
      pequeña sugerencia, queremos escucharte.
    </p>

    {/* Preguntas que invitan a participar */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px',
      marginBottom: '32px' }}>
      {[
        ['¿Qué cambiarías?', 'Algo que harías diferente mañana mismo.', 'assets/ic-cambio.webp'],
        ['¿Qué potenciar?', 'Lo que funciona bien y deberíamos impulsar.', 'assets/ic-potenciar.png'],
        ['¿Qué te gustaría ver?', 'Un tema para la newsletter o una iniciativa interna.', null],
      ].map(([t, d, img], i) => (
        <div key={i} style={{ background: T.beige0, border: '1px solid rgba(31,29,26,0.10)',
          borderRadius: '6px', padding: '20px' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '9999px',
            background: T.beige2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {img
              ? <img src={img} alt="" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
              : <BrandIcon n={(i % 5) + 1} size={26} color={T.negro} />}
          </div>
          <div style={{ fontFamily: T.serif, fontSize: '18px', fontWeight: 400, color: T.negro,
            margin: '14px 0 5px' }}>{t}</div>
          <div style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 300, color: T.negro80,
            lineHeight: 1.5 }}>{d}</div>
        </div>
      ))}
    </div>

    {/* Formulario — envía por correo a comunicación */}
    <BuzonForm />

    <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, color: T.negro50,
      margin: '22px 0 0', textAlign: 'center' }}>
      También puedes escribirnos directamente a{' '}
      <a href="mailto:comunicacion@activum.es" style={{ color: T.acento, fontWeight: 500 }}>
        comunicacion@activum.es
      </a>
    </p>
  </div>
);

/* ════════ La Nucía One (promoción / publicidad interna) ════════ */
const LaNuciaBody = () => {
  const datos = [
    ['107', 'viviendas'],
    ['2-4', 'dormitorios'],
    ['280.000 €', 'precio de salida'],
    ['Garaje', '+ trastero incluidos'],
  ];
  const comunes = ['Piscina infinity', 'Gimnasio', 'Gastrobar', 'Espacio de coworking',
    'Áreas infantiles', 'Zonas ajardinadas'];
  return (
    <div style={{ maxWidth: '960px' }}>
      <Slot id="lanuciaMain" ratio="4 / 3" radius={8} label="Sube el render de La Nucía One" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px',
        margin: '28px 0 36px' }}>
        {datos.map(([n, l], i) => (
          <div key={i} style={{ background: T.beige1, borderRadius: '6px', padding: '22px 18px',
            textAlign: 'center' }}>
            <div style={{ fontFamily: T.serif, fontSize: '30px', fontWeight: 300, color: T.negro,
              lineHeight: 1 }}>{n}</div>
            <Kicker color={T.negro50} style={{ fontSize: '9px', marginTop: '8px' }}>{l}</Kicker>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '720px' }}>
        <p style={{ fontFamily: T.serif, fontSize: '21px', fontStyle: 'italic', fontWeight: 300,
          lineHeight: 1.55, color: T.negro, margin: '0 0 22px' }}>
          En pleno corazón de la Costa Blanca, en La Nucía (Alicante), una de las zonas
          residenciales con mayor proyección de la provincia.
        </p>
        <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
          color: T.negro80, margin: '0 0 16px' }}>
          Un entorno tranquilo y rodeado de naturaleza, sin renunciar a la proximidad de
          Benidorm, Altea o Alfaz del Pi. El proyecto está diseñado para distintos perfiles:
          desde familias que buscan su residencia habitual hasta quienes desean una segunda
          vivienda o una oportunidad de inversión.
        </p>
        <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
          color: T.negro80, margin: 0 }}>
          Viviendas con amplias terrazas, bajos dúplex con jardín privado y áticos con
          solárium, concebidas para maximizar la luz natural. A un paso de la Ciudad Deportiva
          Camilo Cano, playas y una amplia oferta de ocio.
        </p>
      </div>

      {/* Zonas comunes */}
      <div style={{ marginTop: '36px' }}>
        <Kicker color={T.acento}>Zonas comunes</Kicker>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '14px' }}>
          {comunes.map(c => (
            <span key={c} style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 400,
              color: T.negro, background: T.beige0, border: '1px solid rgba(31,29,26,0.12)',
              borderRadius: '9999px', padding: '8px 16px' }}>{c}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '24px', flexWrap: 'wrap', background: T.negro, borderRadius: '8px',
        padding: '28px 34px', marginTop: '36px' }}>
        <div>
          <div style={{ fontFamily: T.serif, fontSize: '22px', fontWeight: 300, color: T.blanco }}>
            ¿Te interesa o conoces a alguien?
          </div>
          <div style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300,
            color: 'rgba(245,243,242,0.65)', marginTop: '6px' }}>
            lanuciaone.com · 865 66 28 45
          </div>
        </div>
        <a href="https://lanuciaone.com/" target="_blank" rel="noopener"
          style={{ flexShrink: 0, fontFamily: T.sans, fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: T.blanco,
            background: T.acento, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none' }}>
          Más información
        </a>
      </div>
      <PendingNote>
        Pendiente: los <b>renders</b> de la promoción (SharePoint, carpeta Infografías). Sustituyo
        las imágenes en cuanto estén disponibles.
      </PendingNote>
    </div>
  );
};

/* ── Router de cuerpos ── */
const BODIES = {
  apertura: AperturaBody, mundo: MundoBody,
  wellbeing: WellbeingBody, cuerpo: CuerpoBody, beneficios: BeneficiosBody, primera: PrimeraBody,
  bitabit: BitabitBody, galeria: GaleriaBody, voz: BuzonBody,
  lanucia: LaNuciaBody,
};

/* ── Vista de artículo completa ── */
const Article = ({ id, go }) => {
  const s = getSection(id);
  const Body = BODIES[id];
  const idx = SECTIONS.findIndex(x => x.id === id);
  const prev = SECTIONS[idx - 1];
  const next = SECTIONS[idx + 1];
  const wide = id === 'galeria' || id === 'beneficios' || id === 'lanucia';
  const showNav = !s.promo;
  return (
    <div>
      <button onClick={() => go('portada')}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none',
          border: 'none', cursor: 'pointer', fontFamily: T.sans, fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: T.negro50,
          padding: 0, marginBottom: '28px' }}
        onMouseEnter={e => e.currentTarget.style.color = T.acento}
        onMouseLeave={e => e.currentTarget.style.color = T.negro50}>
        ← Volver a portada
      </button>
      <ArticleHeader s={s} wide={wide} />
      <Body go={go} />
      {/* Navegación prev / next */}
      {showNav && (
      <nav style={{ display: 'flex', justifyContent: 'space-between', gap: '16px',
        marginTop: '56px', paddingTop: '28px', borderTop: `1px solid ${T.beige2}` }}>
        {prev ? (
          <button onClick={() => go(prev.id)} style={navBtn('left')}
            onMouseEnter={e => e.currentTarget.style.borderColor = T.negro}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(31,29,26,0.15)'}>
            <Kicker color={T.negro50} style={{ fontSize: '9px' }}>← Anterior</Kicker>
            <span style={navBtnTitle}>{prev.section}</span>
          </button>
        ) : <span />}
        {next ? (
          <button onClick={() => go(next.id)} style={{ ...navBtn('right'), textAlign: 'right' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = T.negro}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(31,29,26,0.15)'}>
            <Kicker color={T.negro50} style={{ fontSize: '9px' }}>Siguiente →</Kicker>
            <span style={navBtnTitle}>{next.section}</span>
          </button>
        ) : <span />}
      </nav>
      )}
    </div>
  );
};

const navBtn = side => ({
  display: 'flex', flexDirection: 'column', gap: '6px', cursor: 'pointer',
  background: T.beige0, border: '1px solid rgba(31,29,26,0.15)', borderRadius: '6px',
  padding: '14px 20px', maxWidth: '46%', alignItems: side === 'right' ? 'flex-end' : 'flex-start',
  transition: 'border-color 200ms',
});
const navBtnTitle = {
  fontFamily: T.serif, fontSize: '16px', fontWeight: 400, color: T.negro,
};

Object.assign(window, { Article });
