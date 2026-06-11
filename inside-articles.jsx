/* ============================================================
   ACTIVUM INSIDE — Vistas de noticia (las 9 secciones)
   Cada sección tiene su propia maqueta editorial.
   ============================================================ */

/* ── Cabecera común de artículo ── */
const ArticleHeader = ({ s, wide = false }) => {
  const mob = useIsMobile();
  return (
  <header style={{ maxWidth: wide ? 'none' : '760px', marginBottom: mob ? '24px' : '36px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
      {s.num && <span style={{ fontFamily: T.serif, fontSize: '40px', fontWeight: 300,
        color: T.beige2, lineHeight: 1 }}>{s.num}</span>}
      {s.num && <div style={{ height: '28px', width: '1px', background: T.beige2 }} />}
      <Kicker color={T.acento}>
        {s.section}{s.promo ? ' · Promoción destacada' : ''}
      </Kicker>
    </div>
    <h1 style={{ fontFamily: T.serif,
      fontSize: mob ? 'clamp(26px, 7vw, 34px)' : 'clamp(34px, 4.4vw, 54px)',
      fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.02em', color: T.negro, margin: 0 }}>
      {s.title}
    </h1>
    <p style={{ fontFamily: T.serif, fontSize: mob ? '16px' : '20px', fontStyle: 'italic',
      fontWeight: 300, lineHeight: 1.5, color: T.negro80, margin: '14px 0 0', maxWidth: '60ch' }}>
      {s.dek}
    </p>
  </header>
  );
};

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
  const mob = useIsMobile();
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
      texto: 'Los kilómetros recorridos por los empleados, con un objetivo de 1.000 km que irán desbloqueando donaciones por hitos, de la mano de Almas Inquietas y la Fundación Verón.',
    },
  ];

  return (
    <div style={{ maxWidth: '900px' }}>

      {/* Vídeo YouTube */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9',
        borderRadius: '8px', overflow: 'hidden', background: T.negro,
        boxShadow: '0 8px 40px rgba(31,29,26,0.14)' }}>
        <iframe
          src="https://www.youtube.com/embed/cQYDi9yHUtg?rel=0&modestbranding=1"
          title="Mensaje de Cristina Balaguer — Activum Inside Nº1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        />
      </div>

      {/* Autora + texto introductorio */}
      <div style={{ display: 'grid',
        gridTemplateColumns: mob ? '1fr' : '200px 1fr',
        gap: mob ? '20px' : '36px', alignItems: 'start', marginTop: '36px' }}>
        <div style={{ background: T.beige0, border: `1px solid rgba(31,29,26,0.10)`,
          borderRadius: '8px', padding: '24px 20px', textAlign: 'center' }}>
          <img src="assets/cristina-balaguer.jpg" alt="Cristina Balaguer"
            style={{ width: '130px', height: '130px', borderRadius: '9999px',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block', margin: '0 auto 16px' }} />
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


/* ════════ 02 · Activum en el Mundo (RSC — Ride the Wave) ════════ */

/* Vídeo tutorial con marco de teléfono móvil + botón pantalla completa */
const PhoneFrame = ({ src, width }) => (
  <div style={{ position: 'relative', width }}>
    <svg viewBox="0 0 260 486" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', position: 'absolute', top: 0, left: 0,
        zIndex: 2, pointerEvents: 'none' }}>
      <rect x="5" y="5" width="250" height="476" rx="32" ry="32"
        fill="none" stroke={T.negro} strokeWidth="10" />
      <rect x="14" y="14" width="232" height="458" rx="24" ry="24"
        fill="none" stroke={T.beige2} strokeWidth="2" />
      <rect x="98" y="19" width="64" height="9" rx="4.5" fill={T.beige2} />
      <rect x="92" y="455" width="76" height="9" rx="4.5" fill={T.beige2} />
    </svg>
    <div style={{ margin: '38px 24px 34px', borderRadius: '18px', overflow: 'hidden',
      position: 'relative', zIndex: 1, background: T.negro }}>
      <video src={src} controls playsInline
        style={{ width: '100%', height: '100%', display: 'block',
          objectFit: 'cover', objectPosition: 'center center' }} />
    </div>
  </div>
);

const PhoneTutorial = ({ src }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <div style={{ position: 'relative' }}>
        <PhoneFrame src={src} width="200px" />
        {/* Botón pantalla completa */}
        <button onClick={() => setOpen(true)}
          title="Pantalla completa"
          style={{ position: 'absolute', bottom: '44px', right: '-12px', zIndex: 10,
            width: '36px', height: '36px', borderRadius: '9999px',
            background: T.negro, border: `2px solid ${T.beige2}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(31,29,26,0.22)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            stroke={T.blanco} strokeWidth="1.6" strokeLinecap="round">
            <path d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9" />
          </svg>
        </button>
      </div>

      {/* Modal pantalla completa */}
      {open && (
        <div onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(31,29,26,0.88)', display: 'flex',
            alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()}
            style={{ position: 'relative' }}>
            {/* El teléfono tiene ratio 260:486 ≈ 1:1.87 — limitamos ancho a 44vh para que quepa en el 85% de la pantalla */}
            <PhoneFrame src={src} width="min(280px, 44vh)" />
            <button onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: '-16px', right: '-16px',
                width: '36px', height: '36px', borderRadius: '9999px',
                background: T.blanco, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(31,29,26,0.3)', zIndex: 1 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                stroke={T.negro} strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MundoBody = () => {
  const mob = useIsMobile();
  const hitos = [
    { km: '150 km', emoji: '🌊', label: 'Hito 1' },
    { km: '350 km', emoji: '🌊', label: 'Hito 2' },
    { km: '650 km', emoji: '🌊', label: 'Hito 3' },
    { km: '1.000 km', emoji: '🏁', label: 'Meta' },
  ];
  const clubs = [
    { nombre: 'Activum Sobre Ruedas', deporte: 'Ciclistas', url: 'https://www.strava.com/clubs/2165995' },
    { nombre: 'Activum en Ruta', deporte: 'Runners, senderistas y caminantes', url: 'https://www.strava.com/clubs/2165992' },
    { nombre: 'Activum Bajo el Agua', deporte: 'Nadadores', url: 'https://www.strava.com/clubs/2165990' },
  ];
  return (
    <div style={{ maxWidth: '900px' }}>

      {/* Imagen principal */}
      <img src="assets/mundo-portada.png" alt="Ride the Wave — Súbete a la Ola"
        style={{ width: '100%', aspectRatio: '16 / 7', objectFit: 'cover', objectPosition: 'center top',
          borderRadius: '8px', display: 'block' }} />

      {/* Kicker de entrega */}
      <p style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: T.negro50, margin: '28px 0 0' }}>
        Primera entrega · Verano 2026
      </p>

      {/* Párrafo de apertura */}
      <p style={{ fontFamily: T.serif, fontSize: '22px', fontStyle: 'italic', fontWeight: 300,
        lineHeight: 1.55, color: T.negro, margin: '14px 0 22px', maxWidth: '62ch' }}>
        Este verano, cada paso que damos tiene un destino. Y ese destino está en Honduras.
      </p>

      <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
        color: T.negro80, margin: '0 0 14px', maxWidth: '70ch' }}>
        Hay personas que un día se dan cuenta de que vivir es urgente. Que el tiempo pasa y las
        excusas también. Y entonces deciden que sí. Que merece la pena. Que el cuerpo aguanta y el
        propósito empuja. Alejandro es una de esas personas. El 4 de julio sale de Praga en bicicleta.
        Su destino es Madrid. Son 4.000 kilómetros. Setenta días. Solo él, la bici y el camino.
      </p>
      <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
        color: T.negro80, margin: '0 0 14px', maxWidth: '70ch' }}>
        Pero detrás de ese reto hay algo que lo hace diferente a cualquier aventura deportiva:
        cada kilómetro que Alejandro recorra tiene un destinatario. Dieciséis niños y niñas en
        Honduras que este año, gracias a lo que se recaude, tendrán asegurada su beca comedor
        durante un curso entero.
      </p>

      {/* Cita destacada */}
      <blockquote style={{ fontFamily: T.serif, fontSize: '26px', fontStyle: 'italic',
        fontWeight: 300, lineHeight: 1.35, color: T.negro, margin: '28px 0 36px',
        paddingLeft: '22px', borderLeft: `3px solid ${T.acento}` }}>
        «Un kilómetro. Una beca. Un curso. Una vida que cambia de dirección.»
      </blockquote>

      {/* Almas Inquietas */}
      <div style={{ borderTop: `1px solid ${T.beige2}`, paddingTop: '36px', marginTop: '8px' }}>
        <Kicker color={T.acento}>Almas Inquietas</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '26px', fontWeight: 400, color: T.negro,
          margin: '10px 0 14px', lineHeight: 1.2 }}>
          La asociación que convierte movimiento en impacto
        </h3>
        <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
          color: T.negro80, margin: '0 0 14px', maxWidth: '70ch' }}>
          Alejandro pertenece a Almas Inquietas, una asociación que nació con una idea tan sencilla
          como transformadora: el movimiento une. No hace falta ser deportista de élite. No hace
          falta cruzar Europa. Hace falta creer que cuando nos movemos juntos, el mundo se mueve
          con nosotros.
        </p>
        <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
          color: T.negro80, margin: 0, maxWidth: '70ch' }}>
          Han organizado retos solidarios, torneos, rutas. Y ahora lanzan su iniciativa más
          ambiciosa: <strong>Ride the Wave</strong>. Un reto que une deporte, comunidad y causa
          en una sola ola.
        </p>
      </div>

      {/* Fotos Ride the Wave */}
      <div style={{ display: 'grid',
        gridTemplateColumns: mob ? '1fr' : '1fr 1fr',
        gap: '10px', marginTop: '28px', marginBottom: '8px' }}>
        <img src="assets/mundo-foto-1.jpg" alt="Ride the Wave"
          style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover',
            objectPosition: 'center 35%', borderRadius: '6px', display: 'block' }} />
        <img src="assets/mundo-foto-2.jpg" alt="Ride the Wave"
          style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover',
            objectPosition: 'center 65%', borderRadius: '6px', display: 'block' }} />
      </div>

      {/* Fundación Verón */}
      <div style={{ borderTop: `1px solid ${T.beige2}`, paddingTop: '36px', marginTop: '36px' }}>
        <Kicker color={T.acento}>La causa</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '26px', fontWeight: 400, color: T.negro,
          margin: '10px 0 14px', lineHeight: 1.2 }}>
          Fundación Verón y las becas comedor de Honduras
        </h3>
        <div style={{ display: 'grid',
          gridTemplateColumns: mob ? '1fr' : '1fr 200px',
          gap: mob ? '16px' : '32px', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
              color: T.negro80, margin: '0 0 14px' }}>
              Al otro lado del océano, la Fundación Verón trabaja en Honduras para que la educación
              sea una puerta abierta para todos. Su programa de Beca Comedor garantiza que los
              alumnos puedan ir al colegio con las condiciones que necesitan para aprender. Porque
              a veces lo que un niño necesita para llegar lejos es, simplemente, que alguien le
              asegure el punto de partida.
            </p>
            <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
              color: T.negro80, margin: 0 }}>
              El objetivo de Ride the Wave es recaudar <strong>4.000 euros</strong>: una cifra que
              cubre las becas comedor de dieciséis alumnos durante un año completo.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            {[['4.000 €', 'Objetivo de recaudación'], ['16', 'Becas comedor'], ['1 año', 'Cobertura completa']].map(([n, l], i) => (
              <div key={i} style={{ background: T.beige1, borderRadius: '6px',
                padding: '18px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: T.serif, fontSize: '28px', fontWeight: 300,
                  color: T.acento, lineHeight: 1 }}>{n}</div>
                <Kicker color={T.negro50} style={{ fontSize: '9px', marginTop: '6px' }}>{l}</Kicker>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activum + Clubs */}
      <div style={{ borderTop: `1px solid ${T.beige2}`, paddingTop: '36px', marginTop: '36px' }}>
        <Kicker color={T.acento}>Y aquí entramos nosotros</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '26px', fontWeight: 400, color: T.negro,
          margin: '10px 0 14px', lineHeight: 1.2 }}>
          Los Clubs Deportivos Activum en Strava
        </h3>
        <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
          color: T.negro80, margin: '0 0 22px', maxWidth: '70ch' }}>
          Activum se suma a Ride the Wave como empresa colaboradora. Por eso este verano nacen los
          Clubs Deportivos Activum en Strava. Tres espacios, un mismo propósito. Da igual cuál sea
          tu deporte: hay un sitio para ti.
        </p>
        <div style={{ display: 'grid',
          gridTemplateColumns: mob ? '1fr' : 'repeat(3, 1fr)',
          gap: '12px', marginBottom: '36px' }}>
          {clubs.map((c, i) => (
            <a key={i} href={c.url} target="_blank" rel="noopener"
              style={{ display: 'block', background: T.beige0,
                border: '1px solid rgba(31,29,26,0.10)', borderRadius: '8px', padding: '22px 18px',
                textDecoration: 'none' }}>
              <div style={{ fontFamily: T.serif, fontSize: '17px', fontWeight: 400,
                color: T.negro, marginBottom: '6px', lineHeight: 1.2 }}>{c.nombre}</div>
              <div style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 300,
                color: T.negro50, marginBottom: '14px' }}>{c.deporte}</div>
              <span style={{ fontFamily: T.sans, fontSize: '11px', fontWeight: 500,
                color: T.acento, letterSpacing: '0.06em' }}>Unirse al club →</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── RECUADRO — Cómo unirte en 3 pasos ── */}
      <div style={{ background: T.negro, borderRadius: '10px', overflow: 'hidden',
        boxShadow: '0 4px 28px rgba(31,29,26,0.16)', margin: '0 0 44px' }}>
        <div style={{ padding: '36px 40px 32px', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: T.negro }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Kicker color={T.acentoLight}>Únete ahora</Kicker>
            <h3 style={{ fontFamily: T.serif, fontSize: '28px', fontWeight: 400, color: T.blanco,
              margin: '10px 0 28px', lineHeight: 1.2 }}>Cómo unirte en 3 pasos</h3>

            {/* Paso 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px',
              alignItems: 'start', marginBottom: '28px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '9999px',
                background: T.acento, display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: T.serif, fontSize: '22px', fontWeight: 300,
                  color: T.blanco }}>1</span>
              </div>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: '20px', fontWeight: 400,
                  color: T.blanco, marginBottom: '6px' }}>Descarga Strava</div>
                <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.65,
                  color: 'rgba(245,243,242,0.78)', margin: 0 }}>
                  Si aún no la tienes, descarga la app gratuita en App Store o Google Play y crea
                  tu cuenta.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px',
              alignItems: 'start', marginBottom: '28px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '9999px',
                background: T.acento, display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: T.serif, fontSize: '22px', fontWeight: 300,
                  color: T.blanco }}>2</span>
              </div>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: '20px', fontWeight: 400,
                  color: T.blanco, marginBottom: '6px' }}>Únete a tu club</div>
                <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.65,
                  color: 'rgba(245,243,242,0.78)', margin: '0 0 12px' }}>
                  Accede al club que corresponda a tu deporte principal (o a los tres, que todo suma):
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {clubs.map((c, i) => (
                    <a key={i} href={c.url} target="_blank" rel="noopener"
                      style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 400,
                        color: T.acentoLight, textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <img src="assets/icono-clic.png" alt="" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                      {c.nombre}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px',
              alignItems: 'start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '9999px',
                background: T.acento, display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: T.serif, fontSize: '22px', fontWeight: 300,
                  color: T.blanco }}>3</span>
              </div>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: '20px', fontWeight: 400,
                  color: T.blanco, marginBottom: '6px' }}>Registra tus actividades</div>
                <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.65,
                  color: 'rgba(245,243,242,0.78)', margin: '0 0 12px' }}>
                  Tienes dos opciones:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ background: 'rgba(245,243,242,0.07)', borderRadius: '6px',
                    padding: '14px 16px' }}>
                    <div style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: T.acentoLight, marginBottom: '4px' }}>En directo</div>
                    <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.6,
                      color: 'rgba(245,243,242,0.75)', margin: 0 }}>
                      Abre Strava antes de empezar, pulsa el botón de grabación y deja que registre
                      tu recorrido automáticamente.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(245,243,242,0.07)', borderRadius: '6px',
                    padding: '14px 16px' }}>
                    <div style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: T.acentoLight, marginBottom: '4px' }}>A posteriori</div>
                    <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.6,
                      color: 'rgba(245,243,242,0.75)', margin: 0 }}>
                      Si has salido sin el móvil, ve a «+» en la app, selecciona «Registrar actividad
                      manualmente», elige el tipo de deporte, añade la distancia y la fecha.
                    </p>
                  </div>
                </div>
                <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 400, lineHeight: 1.6,
                  color: T.acentoLight, margin: '14px 0 0' }}>
                  En ambos casos, añade <strong style={{ color: T.blanco }}>#ActivumRidesTheWave</strong> en la
                  descripción de tu actividad.
                </p>
              </div>
            </div>

            {/* Nota de inicio */}
            <div style={{ marginTop: '28px', paddingTop: '24px',
              borderTop: '1px solid rgba(245,243,242,0.12)' }}>
              <p style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300, lineHeight: 1.65,
                color: 'rgba(245,243,242,0.65)', margin: 0 }}>
                El contador oficial arranca el <strong style={{ color: T.blanco }}>4 de julio</strong>,
                pero no esperes hasta entonces. Descárgate Strava ahora, únete a tu club y
                familiarízate con la app. ¡Así el día que Alejandro salga de Praga, tú ya estarás
                listo para sumar desde el primer kilómetro!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tutorial vídeo — texto + móvil */}
      <div style={{ display: 'grid',
        gridTemplateColumns: mob ? '1fr' : '1fr 220px',
        gap: mob ? '20px' : '36px', alignItems: 'center', marginBottom: '44px' }}>
        <div>
          <Kicker color={T.acento}>Tutorial</Kicker>
          <h3 style={{ fontFamily: T.serif, fontSize: '24px', fontWeight: 400, color: T.negro,
            margin: '10px 0 14px', lineHeight: 1.2 }}>
            ¿Tienes dudas con Strava?
          </h3>
          <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.75,
            color: T.negro80, margin: 0 }}>
            Hemos preparado un vídeo tutorial paso a paso para que no te quedes sin sumar.
            Aprenderás a descargarte la app, unirte a los clubs y registrar actividades
            sin complicaciones.
          </p>
        </div>
        <PhoneTutorial src="assets/tutorial-strava.mp4" />
      </div>

      {/* Nuestro reto — hitos */}
      <div style={{ borderTop: `1px solid ${T.beige2}`, paddingTop: '36px', marginTop: '8px' }}>
        <Kicker color={T.acento}>Nuestro reto colectivo</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '26px', fontWeight: 400, color: T.negro,
          margin: '10px 0 14px', lineHeight: 1.2 }}>
          1.000 km entre todos
        </h3>
        <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
          color: T.negro80, margin: '0 0 28px', maxWidth: '70ch' }}>
          Mientras Alejandro pedalea de Praga a Madrid, nosotros pedaleamos, corremos y nadamos
          desde aquí. El objetivo del equipo Activum este verano es llegar a 1.000 km colectivos
          entre todos los clubs. Cada vez que alcancemos un hito, Activum libera una parte de su
          donación a la Fundación Verón.
        </p>
        <div style={{ display: 'grid',
          gridTemplateColumns: mob ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '12px' }}>
          {hitos.map((h, i) => (
            <div key={i} style={{ background: i === hitos.length - 1 ? T.acento : T.beige1,
              borderRadius: '8px', padding: '22px 16px', textAlign: 'center' }}>
              <img src={i === hitos.length - 1 ? 'assets/icono-meta.png' : 'assets/hito.png'} alt=""
                style={{ height: '28px', objectFit: 'contain', display: 'block',
                  margin: '0 auto 8px',
                  filter: i === hitos.length - 1 ? 'brightness(0) invert(1)' : 'none' }} />
              <div style={{ fontFamily: T.sans, fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: i === hitos.length - 1 ? 'rgba(245,243,242,0.75)' : T.negro50,
                marginBottom: '6px' }}>{h.label}</div>
              <div style={{ fontFamily: T.serif, fontSize: '26px', fontWeight: 300,
                color: i === hitos.length - 1 ? T.blanco : T.negro,
                lineHeight: 1 }}>{h.km}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cierre */}
      <div style={{ background: T.beige1, borderRadius: '8px', padding: '32px 36px',
        marginTop: '36px', textAlign: 'center' }}>
        <p style={{ fontFamily: T.serif, fontSize: '22px', fontStyle: 'italic', fontWeight: 300,
          color: T.negro, margin: '0 0 14px', lineHeight: 1.4 }}>
          Porque cada kilómetro que recorremos se transforma en algo real.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap',
          marginBottom: '28px' }}>
          {['#RideTheWave', '#ActivumRidesTheWave', '#CadaKMSuma'].map(tag => (
            <span key={tag} style={{ fontFamily: T.sans, fontSize: '12px', fontWeight: 500,
              color: T.acento, background: 'rgba(142,45,68,0.09)', borderRadius: '9999px',
              padding: '6px 14px' }}>{tag}</span>
          ))}
        </div>
        {/* Logos entidades */}
        <div style={{ borderTop: `1px solid ${T.beige2}`, paddingTop: '24px' }}>
          <Kicker color={T.negro50} style={{ fontSize: '9px' }}>Entidades colaboradoras</Kicker>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: '40px', marginTop: '18px', flexWrap: 'wrap' }}>
            <img src="assets/logo-almas-inquietas.png" alt="Almas Inquietas"
              style={{ height: '60px', objectFit: 'contain', display: 'block' }} />
            <img src="assets/logo-fundacion-veron.png" alt="Fundación Verón"
              style={{ height: '80px', objectFit: 'contain', display: 'block' }} />
          </div>
        </div>
      </div>

    </div>
  );
};

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
    <img src="assets/estres.jpg" alt=""
      style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover',
        borderRadius: '6px', display: 'block' }} />

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
    <img src="assets/estirar.jpg" alt=""
      style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover',
        borderRadius: '6px', display: 'block' }} />
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
  const mob = useIsMobile();
  const ofertas = [
    {
      cat: 'Moda y deporte', marca: 'Adidas', img: 'assets/logo-adidas.png',
      desc: 'Prepárate para nuestro reto de convertir km en becas comedor en Honduras con este descuento del 30% en artículos seleccionados en la tienda online oficial de Adidas y un 5% adicional en artículos outlet ya rebajados. La actitud y las ganas de ayudar ya las tenemos… ahora sólo te faltan las zapatillas y la ropa. Corre (y nunca mejor dicho) y no dejes escapar este descuento.',
    },
    {
      cat: 'Tecnología', marca: 'Samsung', img: 'assets/samsung.png',
      desc: 'El Mundial, mejor en grande. Aprovecha los descuentos exclusivos de Samsung para empleados y disfruta de hasta un 29% en televisores seleccionados y hasta un 62% en otros modelos y barras de sonido. Porque hay goles, paradas… y polémicas arbitrales que merecen verse con la mejor calidad posible.',
    },
    {
      cat: 'Viajes', marca: 'lastminute.com', img: 'assets/lastminute.jpg',
      desc: 'Seguro que ya hay muchos de vosotros que ya tienen cerrado el verano… y luego estamos el resto, mirando vuelos un martes a las 23:47 "solo por curiosidad". Sea para una escapada improvisada, unas vacaciones en la playa o ese viaje que llevas tiempo queriendo hacer, aprovecha este descuento exclusivo de lastminute.com y empieza a preparar la maleta. Ámsterdam, Baleares, Nueva York… el problema no será encontrar destino, sino decidir cuál elegir.',
    },
    {
      cat: 'Formación · Idiomas', marca: 'Babbel', img: 'assets/babbel.jpg',
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
      <div style={{ display: 'grid',
        gridTemplateColumns: mob ? '1fr' : '1fr 300px',
        gap: mob ? '20px' : '32px', alignItems: 'start', marginBottom: '44px' }}>
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
          <div key={i} style={{ display: 'grid',
            gridTemplateColumns: mob ? '1fr' : '260px 1fr',
            gap: '0', background: T.beige0, border: '1px solid rgba(31,29,26,0.10)',
            borderRadius: '8px', overflow: 'hidden' }}>
            <img src={o.img} alt={o.marca}
              style={{ width: '100%', height: mob ? '180px' : '100%', objectFit: 'cover',
                display: 'block' }} />
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
      q: 'Si alguien te hubiera dicho hace años que acabarías siendo responsable de Sistemas en Activum, ¿qué habrías pensado?',
      a: 'En mis 2 primeros años como colaborador ni pasárseme por la cabeza. Pero te voy a dar una exclusiva: antes de la pandemia, un día en esas relaciones de ideas que pasan por mi cabeza, pensé «¿y cuándo se jubile Javier quién va a hacer su trabajo? Pues podría ser yo». Pero la verdad, en el momento que se me propuso, veníamos de la convulsión con InmoCaixa, no me lo esperaba ni pensaba que pudiera ocurrir.',
    },
    {
      q: 'Hubo un momento en tu vida en el que incluso llegaste a tener una granja de caracoles. ¿Cómo surgió aquella aventura y qué recuerdas de esa etapa?',
      a: 'Ni lo sé. Intento recordar qué me llevó a esa decisión y no lo recuerdo. En Mallorca se consume mucho caracol, no solo el día de San Marcos, todo el año: caragolades, tapas, en arrós brut… En aquel momento se había montado una granja grande en un pueblo cercano y supongo que en alguna conversación saldría el tema. Me puse a investigar y al poco estaba presentando papeles en la Conselleria y el plan de negocio en el banco.',
    },
    {
      q: 'Mirándolo con perspectiva, ¿qué aprendizaje te dejó aquella experiencia y qué sigues aplicando hoy en tu trabajo?',
      a: 'A ser constante y a priorizar. Los caracoles comían cada día, no podías dejar de hacer eso. En la granja había muchos otros trabajos que hacer también, pero ese, sí o sí, se tenía que hacer. Lo podías hacer por la mañana, a mediodía o a última hora, pero había que hacerlo. Los demás trabajos los ibas encajando.',
    },
    {
      q: 'Tu trayectoria profesional ha pasado por distintas etapas y reinvenciones. ¿Cómo definirías ese recorrido?',
      a: 'No te sabría decir, creo que no he sido consciente de ello. Han venido y las he ido asumiendo, era lo que tocaba. Ahora que me lo haces pensar, no sé si he sido a lo mejor algo inconsciente. De 4 horitas para ayudar a los comerciales de Mallorca y sacarme un dinero extra —pues con la granja no llegaba— a estar ahora aquí como sujeto de esta primera entrevista.',
    },
    {
      q: '¿Hay alguna decisión o cambio profesional que haya marcado un antes y un después en tu carrera?',
      a: 'Dos. El primero cuando mi amiga me llamó para preguntarme si me interesaría trabajar como administrativo. Activum estaba en una sala pequeña oscura cuadrada junto al patio de luces y la cocina, y Juan Trocóniz le preguntó a mi amiga si estaría interesado. No sé qué vio Montse Ribó en mí, pero me contrató. Y la segunda, el paso de comercial de CAB a controlar los más de 6.000 activos que tenía en aquel momento InmoCaixa. Se marchaba Natalia Castelló y pensaron en mí para dar el salto a las 9 provincias en las que Activum gestionaba el producto de InmoCaixa. Durante algo más de 5 años fui «Producto InmoCaixa».',
    },
    {
      q: '¿Qué es lo que más disfrutas de tu trabajo al frente del área de Sistemas?',
      a: 'Que tengo contacto con todas las áreas, trato con mucha gente y tengo una visión más completa del trabajo de los demás. Antes, como administrativo de producto adjudicado, estaba más limitado al trato con el equipo comercial y administración de ventas.',
    },
    {
      q: 'Muchas veces el trabajo de Sistemas sucede «entre bambalinas». ¿Qué parte del trabajo del equipo crees que no se ve y merece más reconocimiento?',
      a: 'No sé si estoy de acuerdo con esa afirmación. Supongo que todo el mundo entiende que, si tiene acceso a SharePoint, su cuenta le permite acceder al correo, a los programas ofimáticos, puede hacer llamadas, tiene un ordenador y un teléfono con los que trabajar… que todo eso no es por arte de magia y hay gente detrás trabajando para ello. Pero si no se lo habían planteado, lo reivindico ahora: estamos aquí desde Sistemas haciendo que todo esto funcione.',
    },
    {
      q: '¿Cómo ha evolucionado el área de Sistemas en los últimos años y hacia dónde crees que va?',
      a: 'Llevo relativamente poco, pero sí que tenemos que ir hacia una gestión más tecnológica. Muchos procesos son manuales, mucha información guardada en Excel del que hay que ir tirando para buscar algunos datos. Tenemos que darle una vuelta al departamento.',
    },
    {
      q: '¿Cuál ha sido el proyecto, reto o momento profesional que más te ha marcado dentro de Activum?',
      a: 'Me han marcado la elección para llevar el producto de InmoCaixa, el premio «Mejor Actitud 2021» elegido por los compañeros —déjame dar las gracias de nuevo, soy muy hablador pero en ese momento no supe qué decir y creo que no di suficientemente las gracias. GRACIAS—. Y para acabar, este último cambio a Sistemas.',
    },
    {
      q: 'Desde tu punto de vista, ¿cómo ayuda el área de Sistemas al día a día del resto de equipos?',
      a: 'Intentamos que todo funcione lo mejor posible. Hay problemas que escapan a nuestro control —dependemos de proveedores telefónicos, informáticos, de software…— pero en lo que depende de Activum, se intenta que esté todo a punto para que cada uno pueda desempeñar su trabajo.',
    },
    {
      q: '¿Qué proyecto o reto te hace especial ilusión de cara al futuro?',
      a: 'Conseguir implementar herramientas MDM o EMM. Para no andar con tecnicismos: herramientas que permiten al departamento configurar ordenadores y móviles en remoto, ahorrando horas de trabajo. Creas los perfiles necesarios —por ejemplo, Comerciales— y todos los usuarios bajo ese perfil tienen una configuración pensada para ellos.',
    },
    {
      q: 'Fuera del trabajo, ¿cómo es Daniel? ¿Qué te gusta hacer para desconectar?',
      a: 'Soy muy casero. Si estamos hablando de desconectar al 100%, casa, sofá y tele. Si hablamos del Dani fuera del trabajo: familia, amigos, mi proyecto de domótica en casa, una cena.',
    },
    {
      q: '¿Tienes alguna afición, hobby o pasión que poca gente conozca?',
      a: 'Las series de abogados. Y los libros de John Grisham.',
    },
    {
      q: 'Si pudieras volver atrás y darle un consejo al Daniel de hace 20 años, ¿qué le dirías?',
      a: 'Que fuera valiente y saliera fuera a estudiar y/o trabajar. Pero sa roqueta (Mallorca) tira mucho. Un mallorquín saldrá de viaje, irá por todo el mundo, pero vuelve a sa roqueta.',
    },
    {
      q: '¿Qué valor o palabra crees que define mejor a Activum?',
      a: 'Familia.',
    },
    {
      q: '¿Qué te gustaría que el resto de compañeros pensara cuando escucha «equipo de Sistemas»?',
      a: 'Mejor si no lo piensan, eso es que tienen algún problema y me llaman, jajaja. Pues que estamos aquí para ayudarles en sus problemas y hacerles el día más fácil.',
    },
    {
      q: '¿Hay algún compañero, equipo o área que te haya sorprendido especialmente durante tu etapa en Activum?',
      a: 'No voy a dar nombres. Mi abuela decía que se dice el pecado, pero no el pecador. Esas personas ya lo saben. Las llevo muy muy dentro. Gracias.',
    },
    {
      q: '¿Qué destacarías de trabajar en una compañía como Activum?',
      a: 'La cercanía y el trato con los demás. No me he encontrado aún con nadie con quien no puedas hablar. De abajo hacia arriba y al revés.',
    },
    {
      q: 'Si tuvieras que resumir tu trayectoria profesional en una frase, ¿cuál sería?',
      a: 'Siempre abierto a los cambios y aprovechando las coyunturas que la vida te ofrece.',
    },
    {
      q: 'Y para terminar: después de todas las etapas, cambios y reinvenciones vividas… ¿qué has aprendido del camino?',
      a: 'A adaptarse. A cambiar el chip y ponerse cuanto antes con las exigencias del puesto. No crear resistencias. Lo conocido nos es fácil, los cambios cuestan, y si encima no ponemos de nuestra parte, peor.',
    },
  ];
  const mob = useIsMobile();
  return (
    <div style={{ maxWidth: '860px' }}>
      <div style={{ display: 'grid',
        gridTemplateColumns: mob ? '1fr' : '280px 1fr',
        gap: mob ? '24px' : '40px', alignItems: 'start' }}>
        <div style={mob ? {} : { position: 'sticky', top: '40px' }}>
          <img src="assets/daniel-ovejero.jpg" alt="Daniel Ovejero"
            style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover',
              objectPosition: 'center top', display: 'block', borderRadius: '6px' }} />
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
          {qa.slice(0, 4).map((item, i) => <QABlock key={i} {...item} />)}

          <blockquote style={{ fontFamily: T.serif, fontSize: '27px', fontStyle: 'italic',
            fontWeight: 300, lineHeight: 1.35, color: T.negro, margin: '14px 0 32px',
            paddingLeft: '22px', borderLeft: `3px solid ${T.acento}` }}>
            «De 4 horitas para ayudar a los comerciales… a estar aquí como sujeto de esta primera entrevista.»
          </blockquote>

          {qa.slice(4).map((item, i) => <QABlock key={i+4} {...item} />)}

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
  const mob = useIsMobile();
  const pasos = [
    'No sigas interactuando: cierra la web o el mensaje abierto.',
    'Elimina el correo (Mayús + Supr lo borra del todo, sin pasar por Eliminados).',
    'Pasa un examen completo con Defender (Seguridad de Windows).',
    'Avísanos para cerrar sesiones, revisar el doble factor y cambiar contraseñas.',
  ];
  const Screenshot = ({ src, caption }) => (
    <figure style={{ margin: 0 }}>
      <img src={src} alt={caption} style={{ width: '100%', display: 'block',
        borderRadius: '6px', border: '1px solid rgba(31,29,26,0.12)',
        boxShadow: '0 2px 12px rgba(31,29,26,0.08)' }} />
      {caption && <figcaption style={{ fontFamily: T.sans, fontSize: '11px', fontWeight: 300,
        color: T.negro50, marginTop: '6px', letterSpacing: '0.02em' }}>{caption}</figcaption>}
    </figure>
  );
  return (
    <div style={{ maxWidth: '900px' }}>

      {/* Intro */}
      <p style={{ fontFamily: T.serif, fontSize: '21px', fontStyle: 'italic', fontWeight: 300,
        lineHeight: 1.55, color: T.negro, maxWidth: '62ch', margin: '0 0 14px' }}>
        Un correo urgente. Un supuesto mensaje de Dirección. Un enlace que parece legítimo.
        Así empiezan muchos fraudes.
      </p>
      <p style={{ fontFamily: T.sans, fontSize: '15px', fontWeight: 300, lineHeight: 1.7,
        color: T.negro80, maxWidth: '66ch', margin: '0 0 44px' }}>
        El <strong>phishing</strong> es el engaño para robar información haciéndose pasar por
        alguien de confianza. La buena noticia: casi siempre deja pistas. Aprender a verlas
        evita incidentes. Aquí tienes ejemplos reales que han llegado a nuestros buzones.
      </p>

      {/* Bloque 1 — El remitente */}
      <div style={{ marginBottom: '44px' }}>
        <Kicker color={T.acento}>Señal 1 — El remitente</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '24px', fontWeight: 400, color: T.negro,
          margin: '10px 0 12px' }}>¿Quién te escribe realmente?</h3>
        <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.7,
          color: T.negro80, margin: '0 0 20px', maxWidth: '66ch' }}>
          Fíjate en el dominio que aparece entre los símbolos <code style={{ background: T.beige1,
          padding: '1px 5px', borderRadius: '3px', fontSize: '13px' }}>&lt; &gt;</code>. En el 95%
          de los casos no tiene ninguna relación con la empresa que supuestamente te escribe.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Screenshot src="assets/bitabit/remitente-1-grupovia.png"
            caption="Grupo Vía escribe a Daniel Ovejero desde @grupovia.eu — dominio desconocido." />
          <Screenshot src="assets/bitabit/remitente-2-vikasrana.png"
            caption="vikasrana880@yahoo.com — una cuenta personal de Yahoo haciéndose pasar por empresa." />
          <Screenshot src="assets/bitabit/remitente-3-advancedfleet.png"
            caption="Advanced Fleet Management Consulting desde @advancedfleetmanagementconsult.mdrctr.com — dominio largo y sin sentido." />
        </div>
      </div>

      {/* Bloque 2 — El cuerpo */}
      <div style={{ marginBottom: '44px' }}>
        <Kicker color={T.acento}>Señal 2 — El cuerpo del mensaje</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '24px', fontWeight: 400, color: T.negro,
          margin: '10px 0 12px' }}>Escueto, en inglés y lleno de enlaces raros</h3>
        <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.7,
          color: T.negro80, margin: '0 0 20px', maxWidth: '66ch' }}>
          Los mensajes de phishing suelen ser muy cortos, mal redactados o directamente en
          otro idioma. Si incluyen enlaces largos o piden datos personales, para y sospecha.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Screenshot src="assets/bitabit/cuerpo-email.png"
            caption="Mensaje en inglés, tono formal forzado. Nadie legítimo te escribe así en frío." />
          <Screenshot src="assets/bitabit/cuerpo-email-completo.png"
            caption="El mismo correo completo: URLs de tracking, cursos FUNDAE inventados y teléfono de contacto falso." />
        </div>
      </div>

      {/* Bloque 3 — Cómo reportarlo */}
      <div style={{ marginBottom: '44px' }}>
        <Kicker color={T.acento}>Qué hacer</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: '24px', fontWeight: 400, color: T.negro,
          margin: '10px 0 12px' }}>Repórtalo en Outlook en tres clics</h3>
        <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.7,
          color: T.negro80, margin: '0 0 20px', maxWidth: '66ch' }}>
          No lo borres sin más. Reportarlo ayuda a que los filtros de toda la empresa lo
          bloqueen automáticamente en el futuro.
        </p>
        <div style={{ display: 'grid',
          gridTemplateColumns: mob ? '1fr' : '1fr 1fr',
          gap: '12px', marginBottom: '12px' }}>
          <div>
            <Screenshot src="assets/bitabit/outlook-informe-boton.png"
              caption="1. Selecciona el correo y haz clic en «Informe» en la barra superior." />
          </div>
          <div>
            <Screenshot src="assets/bitabit/outlook-informe-desplegable.png"
              caption="2. En el desplegable, elige «Informar de suplantación de identidad (phishing)»." />
          </div>
        </div>
        <Screenshot src="assets/bitabit/outlook-confirmar-eliminar.png"
          caption="3. Confirma y el correo se eliminará de forma permanente del buzón." />
      </div>

      {/* Si ya has hecho clic */}
      <div style={{ display: 'grid',
        gridTemplateColumns: mob ? '1fr' : '1fr 1fr',
        gap: '20px', margin: '0 0 0 0', alignItems: 'start' }}>
        <div style={{ background: T.beige1, borderRadius: '8px', padding: '26px' }}>
          <Kicker color={T.acento}>Ante la duda</Kicker>
          <p style={{ fontFamily: T.sans, fontSize: '14px', fontWeight: 300, lineHeight: 1.65,
            color: T.negro80, margin: '12px 0 14px' }}>
            No contestes al mensaje. Llama a tu responsable o al CAU para aclararlo.
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
          <ol style={{ margin: '14px 0 0', padding: 0, listStyle: 'none' }}>
            {pasos.map((p, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start',
                padding: '9px 0', borderTop: i ? `1px solid ${T.beige2}` : 'none' }}>
                <span style={{ width: '22px', height: '22px', flexShrink: 0, borderRadius: '9999px',
                  background: T.negro, color: T.blanco, fontFamily: T.sans, fontSize: '11px',
                  fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {i + 1}</span>
                <span style={{ fontFamily: T.sans, fontSize: '13px', fontWeight: 300,
                  lineHeight: 1.5, color: T.negro80 }}>{p}</span>
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
const GaleriaBody = () => {
  const mob = useIsMobile();
  const [lightbox, setLightbox] = React.useState(null);
  const fotos = [
    { src: 'assets/galeria/gal-7.jpg',  pos: 'center center' },
    { src: 'assets/galeria/gal-2.jpg',  pos: 'center center' },
    { src: 'assets/galeria/gal-13.jpg', pos: 'center 18%' },
    { src: 'assets/galeria/gal-4.jpg',  pos: 'center 35%' },
    { src: 'assets/galeria/gal-9.jpg',  pos: 'center center' },
    { src: 'assets/galeria/gal-14.jpg', pos: 'center center' },
    { src: 'assets/galeria/gal-1.jpg',  pos: 'center 65%' },
    { src: 'assets/galeria/gal-11.jpg', pos: 'center center' },
    { src: 'assets/galeria/gal-5.jpg',  pos: 'center 40%' },
    { src: 'assets/galeria/gal-10.jpg', pos: 'center center' },
    { src: 'assets/galeria/gal-3.jpg',  pos: 'center 40%' },
    { src: 'assets/galeria/gal-15.jpg', pos: 'center center' },
    { src: 'assets/galeria/gal-8.jpg',  pos: 'center center' },
    { src: 'assets/galeria/gal-6.jpg',  pos: 'center 30%' },
    { src: 'assets/galeria/gal-12.jpg', pos: 'center center' },
    { src: 'assets/galeria/gal-16.jpg', pos: 'center center' },
  ];
  return (
  <div>
    <div style={{ display: 'grid',
      gridTemplateColumns: mob ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: mob ? '8px' : '12px' }}>
      {fotos.map((f, i) => (
        <div key={i} onClick={() => setLightbox(i)}
          style={{ cursor: 'zoom-in', borderRadius: '6px', overflow: 'hidden',
            aspectRatio: '4 / 3' }}>
          <img src={f.src} alt="Equipo Activum"
            style={{ width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: f.pos, display: 'block',
              transition: 'transform 300ms', }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
      ))}
    </div>

    {/* Lightbox */}
    {lightbox !== null && (
      <div onClick={() => setLightbox(null)}
        style={{ position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(31,29,26,0.92)', display: 'flex',
          alignItems: 'center', justifyContent: 'center' }}>
        {/* Anterior */}
        {lightbox > 0 && (
          <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }}
            style={{ position: 'absolute', left: '24px', background: 'rgba(245,243,242,0.15)',
              border: 'none', borderRadius: '9999px', width: '48px', height: '48px',
              cursor: 'pointer', color: '#F5F3F2', fontSize: '22px', display: 'flex',
              alignItems: 'center', justifyContent: 'center' }}>‹</button>
        )}
        <img src={fotos[lightbox].src} alt="Equipo Activum"
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain',
            borderRadius: '6px', boxShadow: '0 8px 60px rgba(0,0,0,0.5)' }} />
        {/* Siguiente */}
        {lightbox < fotos.length - 1 && (
          <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }}
            style={{ position: 'absolute', right: '24px', background: 'rgba(245,243,242,0.15)',
              border: 'none', borderRadius: '9999px', width: '48px', height: '48px',
              cursor: 'pointer', color: '#F5F3F2', fontSize: '22px', display: 'flex',
              alignItems: 'center', justifyContent: 'center' }}>›</button>
        )}
        {/* Cerrar */}
        <button onClick={() => setLightbox(null)}
          style={{ position: 'absolute', top: '20px', right: '20px',
            background: 'rgba(245,243,242,0.15)', border: 'none', borderRadius: '9999px',
            width: '40px', height: '40px', cursor: 'pointer', color: '#F5F3F2',
            fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        {/* Contador */}
        <div style={{ position: 'absolute', bottom: '24px', left: '50%',
          transform: 'translateX(-50%)', fontFamily: "'Roboto', sans-serif",
          fontSize: '12px', color: 'rgba(245,243,242,0.6)', letterSpacing: '0.1em' }}>
          {lightbox + 1} / {fotos.length}
        </div>
      </div>
    )}


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
};

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
      <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 700 ? '1fr' : '1fr 1fr',
        gap: '16px', marginBottom: '16px' }}>
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
const BuzonBody = () => {
  const mob = useIsMobile();
  return (
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
    <div style={{ display: 'grid',
      gridTemplateColumns: mob ? '1fr' : 'repeat(3, 1fr)',
      gap: '12px', marginBottom: '32px' }}>
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
};

/* ════════ La Nucía One (promoción / publicidad interna) ════════ */
const LaNuciaBody = () => {
  const mob = useIsMobile();
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
      <img src="assets/video-lanucia-one.png" alt="La Nucía One"
        style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover',
          borderRadius: '8px', display: 'block' }} />

      <div style={{ display: 'grid',
        gridTemplateColumns: mob ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: '12px', margin: '28px 0 36px' }}>
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
