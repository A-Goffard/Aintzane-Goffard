// Datos generales del perfil. Edita aquí y se actualiza toda la web.

export const perfil = {
  nombre: 'Aintzane Goffard',
  nombreCompleto: 'Aintzane Goffard Sevillano',
  roles: ['Docente', 'Diseñadora pedagógica STEAM', 'Geóloga', 'Desarrolladora web'],
  lema: 'Conecto ciencia, educación inclusiva y tecnología para diseñar experiencias de aprendizaje que se entienden, se tocan y se recuerdan.',
  email: 'aintzagoffard@gmail.com',
  cv: '/Aintzane-Goffard-CV.pdf',
  ubicacion: 'Bizkaia',
  redes: {
    linkedin: 'https://www.linkedin.com/in/aintzane-goffard-sevillano',
    github: 'https://github.com/A-Goffard'
  },
  // Cifras del hero
  datos: [
    { valor: '+7', texto: 'años diseñando programas educativos' },
    { valor: '3', texto: 'másteres: ciencia, docencia y neuroeducación' },
    { valor: '4', texto: 'publicaciones científicas' }
  ]
}

export const sobreMi = [
  'Soy <strong>docente, diseñadora pedagógica STEAM y geóloga</strong>, con formación en educación, neuropsicología y tecnología. Mi trabajo une las ciencias experimentales, el aprendizaje inclusivo y el desarrollo de soluciones digitales.',
  'Me gusta transformar conceptos complejos en experiencias de aprendizaje comprensibles, prácticas y motivadoras. Para ello combino el Diseño Universal para el Aprendizaje (DUA), las metodologías activas y la experimentación, partiendo de que cada persona aprende de una manera diferente.',
  'Creo en las aulas con vida, los proyectos con propósito y las explicaciones sencillas sin perder rigor técnico ni científico. Uso la tecnología cuando de verdad aporta valor.'
]

// Los tres pilares (mismo enfoque que en Geobizi: ciencia, docencia, tecnología)
export const pilares = [
  {
    id: 'ciencia',
    titulo: 'Ciencia',
    icono: '/imagenes/iconos/natura.png',
    texto: 'Geóloga con un máster en Cuaternario e investigación en micropaleontología y evolución ambiental costera. El rigor del método científico está en la base de todo lo que diseño.'
  },
  {
    id: 'docencia',
    titulo: 'Pedagogía inclusiva',
    icono: '/imagenes/iconos/cerebro.png',
    texto: 'Diseño propuestas pensando en la diversidad del alumnado: reducir barreras y ofrecer distintas formas de acceder al contenido, participar y demostrar lo aprendido (DUA y neuroeducación).'
  },
  {
    id: 'tecnologia',
    titulo: 'EdTech y desarrollo',
    icono: '/imagenes/iconos/pintura.png',
    texto: 'Desarrollo webs, plataformas y recursos interactivos con Python, Vue.js y SQL. Tecnología que resuelve problemas reales y mejora la experiencia de aprender.'
  }
]
