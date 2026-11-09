// Proyectos digitales. Cada uno tiene su página en /proyectos/<slug>.
// - portada: imagen de la tarjeta (opcional; si no hay se dibuja una portada de color)
// - tono: color de la portada sin imagen ('violeta' | 'verde' | 'azul' | 'arena')
// - sigla: texto grande de la portada sin imagen
// - enPortada: false para que no salga en la rejilla de la portada (la página sigue existiendo)
// - rol: qué hice yo en el proyecto (lo más importante para quien lee un portfolio)

export const proyectos = [
  {
    slug: 'web-transversalab',
    titulo: 'Web de TransversaLab',
    anio: '2026',
    estado: 'Publicado · en producción',
    tono: 'violeta',
    sigla: 'TLab',
    tecnologias: ['Vue.js', 'Vite SSG', 'Docker', 'Nginx', 'Accesibilidad'],
    resumen: 'Web de mi proyecto de neuroeducación, DUA y neurodiversidad: generada como HTML estático, accesible y sin cookies.',
    enlace: { url: 'https://transversalab.com', texto: 'transversalab.com' },
    descripcion: [
      'Web de TransversaLab, mi proyecto de formación, acompañamiento y asesoramiento en neuroeducación, Diseño Universal para el Aprendizaje (DUA) y neurodiversidad para centros, docentes, familias y personas adultas.',
      'Cada página se genera como HTML estático completo (vite-ssg) y Nginx devuelve errores 404 reales, para que los buscadores indexen bien. Usa la tipografía Atkinson Hyperlegible Next, pensada para baja visión, cumple el contraste WCAG AA en modo claro y oscuro y no tiene cookies, analítica ni llamadas a terceros.'
    ],
    rol: 'Identidad visual, contenidos, diseño y desarrollo completo, y despliegue continuo con GitHub Actions en mi VPS.'
  },
  {
    slug: 'web-geobizi',
    titulo: 'Web de Geobizi',
    anio: '2025 – Actualidad',
    estado: 'Publicado · en evolución',
    tono: 'verde',
    sigla: 'Geobizi',
    tecnologias: ['Vue.js', 'Python (FastAPI)', 'SQLite', 'Docker', 'Nginx'],
    resumen: 'Plataforma de educación ambiental con catálogo de actividades, sistema de reservas, calendario, blog y panel de gestión propio.',
    enlace: { url: 'https://www.geobizi.com/', texto: 'geobizi.com' },
    descripcion: [
      'Web oficial de Geobizi, proyecto de educación ambiental y divulgación científica. Reúne los servicios para centros, instituciones y familias, un sistema de reservas mediante formulario, un calendario con las actividades regulares y un blog de divulgación.',
      'Incluye un panel de administración propio para gestionar actividades, imágenes y contenidos sin tocar código.'
    ],
    rol: 'Diseño, desarrollo full stack, despliegue en VPS propio con Docker y CI/CD, SEO y mantenimiento continuo.'
  },
  {
    slug: 'web-egeo',
    titulo: 'Web oficial de EGEO',
    anio: '2026',
    estado: 'Publicado · en producción',
    tono: 'azul',
    sigla: 'EGEO',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Accesibilidad'],
    resumen: 'Plataforma web del Colegio Oficial de Geólogos del País Vasco: colegiación, difusión de la profesión y recursos geológicos.',
    enlace: { url: 'https://egeo.eus/', texto: 'egeo.eus' },
    descripcion: [
      'Diseño, estructuración y desarrollo de la web oficial del Ilustre Colegio Oficial de Geólogos del País Vasco / Euskal Geologoen Elkargo Ofiziala (EGEO).',
      'Una web orientada a la colegiación, la difusión de la profesión, los recursos geológicos y los trámites institucionales, con navegación bilingüe y un diseño limpio y adaptable.'
    ],
    rol: 'Arquitectura de la información, diseño UX/UI, desarrollo, optimización SEO y de rendimiento.'
  },
  {
    slug: 'soft-skills',
    titulo: 'Proyecto europeo «Soft Skills»',
    anio: '2024',
    estado: 'Publicado',
    tono: 'violeta',
    sigla: 'Erasmus+',
    tecnologias: ['Vue.js', 'i18n', 'JavaScript'],
    resumen: 'Plataforma educativa multilingüe para un consorcio Erasmus+ de nueve socios europeos.',
    enlace: { url: 'https://www.softskills-project.eu/', texto: 'softskills-project.eu' },
    descripcion: [
      'Comenzó como proyecto final del bootcamp, en equipo, y terminó publicado como proyecto real. Es la web del proyecto europeo «Soft Skills», cofinanciado por Erasmus+, en el que nueve socios de Francia, Bélgica, España, Austria y Eslovenia han desarrollado materiales sobre habilidades blandas.'
    ],
    rol: 'Supervisión del equipo, arquitectura de la web, sistema multilingüe y descargas, correcciones finales y entrega al cliente.',
    colaboradores: [
      { nombre: 'Jonathan Domínguez Blanco', url: 'https://www.linkedin.com/in/jonathan-programador-dominguez/' },
      { nombre: 'Andrés Echeverry García', url: 'https://www.linkedin.com/in/andres-echeverry-garcia/' },
      { nombre: 'Jhon Stiven Dávila Bernal', url: 'https://www.linkedin.com/in/jhon-davila-85241a2a9/' },
      { nombre: 'Jesús David Romero', url: 'https://www.linkedin.com/in/jesus-david-romero160/' }
    ]
  },
  {
    slug: 'yincana-sopelakosta',
    titulo: 'Yincana digital SopelaKosta Fest',
    anio: '2024',
    estado: 'Finalizado',
    portada: '/imagenes/proyectos/YincanaSopela3.avif',
    tecnologias: ['Angular', 'JavaScript', 'HTML', 'CSS'],
    resumen: 'Flysch Digital: yincana para familias que une la programación con la educación ambiental en la playa de Arrietara-Atxabiribil.',
    descripcion: [
      'Proyecto desarrollado para el SopelaKosta Fest 2024: Flysch Digital, una yincana digital pensada para familias en la que se unen la parte digital y el entorno. Une la programación con la educación medioambiental en una yincana por la playa de Arrietara-Atxabiribil.',
      'Está pensada para que las familias participantes aprendan sobre la geología y el medio ambiente de la zona al mismo tiempo que disfrutan de una actividad en familia diferente y original: jugar y aprender a la vez.'
    ],
    rol: 'Lo he desarrollado yo íntegramente: la idea, el diseño, la programación, la parte material y el despliegue.',
    imagenes: [
      { src: '/imagenes/proyectos/YincanaSopela3.avif', alt: 'Móvil con la aplicación Flysch Digital delante de los pliegues del flysch' },
      { src: '/imagenes/proyectos/YincanaSopela1.avif', alt: 'Familias recorriendo la playa al pie de los acantilados de flysch' },
      { src: '/imagenes/proyectos/YincanaSopela2.avif', alt: 'Una familia observa de cerca las rocas del acantilado' }
    ]
  },
  {
    slug: 'bilbostack',
    titulo: 'Gamificación técnica en BilboStack',
    anio: '2024',
    estado: 'Finalizado',
    portada: '/imagenes/proyectos/bilbostack2.avif',
    tecnologias: ['JavaScript', 'Metodologías ágiles', 'Coordinación de equipos'],
    resumen: 'Yincana para programadores en el evento tecnológico BilboStack, con el bootcamp de Peñascal F5.',
    enlace: { url: 'https://www.youtube.com/watch?v=YvbhfPTLMoA', texto: 'Vídeo de la actividad' },
    descripcion: [
      'Actividad presentada desde el Bootcamp Full Stack de Peñascal: una yincana para coders en BilboStack, un evento real al que acudieron personas de toda España.',
      'Participaron casi todo el alumnado del bootcamp 2023-2024 y parte del equipo de Peñascal Koop. Es un proyecto al que le tengo un cariño especial.'
    ],
    rol: 'Ideación y prediseño; una vez aprobado, coordinación general, liderazgo del desarrollo principal, supervisión de los equipos y enlace con la organización de BilboStack.',
    imagenes: [
      { src: '/imagenes/proyectos/bilbostack2.avif', alt: 'Equipo de coordinación de la actividad en el escenario de BilboStack' },
      { src: '/imagenes/proyectos/bilbostack1.avif', alt: 'Pantalla del juego con las claves que debían resolver los participantes' }
    ],
    colaboradores: [
      { nombre: 'Elías Javier Riquelme', url: 'https://www.linkedin.com/in/elias-javier-riquelme-b62655297/' },
      { nombre: 'Jonathan Ibáñez Pérez', url: 'https://www.linkedin.com/in/jonathan-iba%C5%84ez-perez/' },
      { nombre: 'Jonathan Domínguez Blanco', url: 'https://www.linkedin.com/in/jonathan-programador-dominguez/' },
      { nombre: 'Andrés Echeverry García', url: 'https://www.linkedin.com/in/andres-echeverry-garcia/' },
      { nombre: 'Oussama Brahmi', url: 'https://www.linkedin.com/in/oussama-brahmi-lurnova/' },
      { nombre: 'Jhon Stiven Dávila Bernal', url: 'https://www.linkedin.com/in/jhon-davila-85241a2a9/' },
      { nombre: 'David Altamirano', url: 'https://www.linkedin.com/in/jdaltamiranodev/' },
      { nombre: 'Jesús David Romero', url: 'https://www.linkedin.com/in/jesus-david-romero160/' },
      { nombre: 'Abderrahmane Hichou', url: 'https://www.linkedin.com/in/abderrahmane-hichou-95818a2ab/' },
      { nombre: 'Kelthoum Djebbour', url: 'https://www.linkedin.com/in/djebbour-kelthoum-438071258/' },
      { nombre: 'Tina Calleja', url: 'https://www.linkedin.com/in/tina-calleja/' },
      { nombre: 'Johan Sebastián Rodríguez', url: 'https://www.linkedin.com/in/johan-sebastian-rodriguez-g/' },
      { nombre: 'Anna Mosiakova', url: 'https://www.linkedin.com/in/anna-mosiakova-b5874927a/' }
    ]
  },
  {
    slug: 'gestion-dispositivos',
    titulo: 'Gestión de dispositivos (Inventory)',
    anio: '2025',
    estado: 'En uso',
    tono: 'arena',
    sigla: 'Inventory',
    tecnologias: ['Python', 'SQLite', 'JavaScript'],
    resumen: 'Aplicación para controlar el uso, el estado y el mantenimiento de los portátiles de un centro formativo.',
    descripcion: [
      'Aplicación de gestión de dispositivos para controlar el uso y el estado de los portátiles del centro, con una base de datos que registra la información necesaria para su mantenimiento.',
      'Es escalable a nuevos dispositivos, aulas y centros, e incluye la generación de informes de uso y estado.'
    ],
    rol: 'Análisis de necesidades con la Cooperativa Peñascal, diseño de la aplicación y de la base de datos, e implementación de principio a fin.'
  },
  {
    slug: 'portfolio-personal',
    titulo: 'Este portfolio',
    anio: '2026',
    estado: 'Publicado · lo estás viendo',
    tono: 'violeta',
    sigla: 'AG',
    enPortada: false,
    tecnologias: ['Vue.js', 'Docker', 'Nginx', 'Accesibilidad'],
    resumen: 'Portfolio ligero y accesible, con tema claro/oscuro, sin cookies ni rastreadores y desplegado en VPS propio.',
    enlace: { url: 'https://github.com/A-Goffard', texto: 'GitHub' },
    descripcion: [
      'Web personal para mostrar mi trayectoria y mis proyectos. Sigue la misma filosofía que mi trabajo: sencilla, accesible y ligera, con atención al rendimiento y al impacto ambiental.',
      'Imágenes en AVIF, fuentes servidas desde el propio servidor (sin llamadas a terceros), modo oscuro y navegación pensada para teclado y lectores de pantalla.'
    ],
    rol: 'Diseño y desarrollo completo, y despliegue automático en el mismo VPS que la web de Geobizi.'
  }
]

export const proyectosPortada = proyectos.filter((p) => p.enPortada !== false)

export function buscarProyecto(slug) {
  return proyectos.find((p) => p.slug === slug)
}
