export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Diversidad cultural y social',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diversidad cultural y sus expresiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Orígenes y evolución',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diversidad cultural: expresiones culturales ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La diversidad cultural en la educación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Discriminación, exclusión y estereotipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es la discriminación?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de discriminación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '¿Qué es la exclusión?',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Manifestaciones de la exclusión',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: '¿Qué son los estereotipos y los perjuicios? ',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estrategias para promover la inclusión cultural en la educación y el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '¿Qué es la inclusión cultural y cómo se ve reflejada en los entornos educativos y laborales?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias para promover la inclusión en la educación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Estrategias para promover la inclusión cultural en el ámbito laboral',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguado Odina, M. T., Merodio Alonso, G. & Melero Sánchez, H. (2023). Diversidad cultural y equidad en la escuela. UNED - Universidad Nacional de Educación a Distancia.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/228555?page=32',
    },
    {
      referencia:
        'Montoya Agudelo, C. A. (2023). Dignidad humana e inclusión laboral. Fondo Editorial Universidad Cooperativa de Colombia.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/250746?page=150',
    },
    {
      referencia:
        'Buk. (2024). La inclusión laboral: ¿Qué es y por qué debe importarnos? ',
      link:
        'https://www.buk.mx/blog/la-inclusion-laboral-que-es-y-por-que-debe-importarnos',
    },
  ],
  glosario: [
    {
      termino: 'Cultura',
      significado:
        'Conjunto de conocimientos, creencias, arte, leyes, costumbres y cualquier otra capacidad adquirida por los miembros de una sociedad',
    },
    {
      termino: 'Discriminación',
      significado:
        'Trato desigual o perjudicial hacia una persona o grupo, basado en prejuicios como raza, género, orientación sexual o religión',
    },
    {
      termino: 'Diversidad',
      significado:
        'Variedad y diferencia dentro de un grupo, especialmente en términos de raza, etnia, género, orientación sexual, y otros aspectos',
    },
    {
      termino: 'Equidad',
      significado:
        'Principio de justicia que implica dar a cada persona lo que necesita para alcanzar su máximo potencial, versus dar a todos exactamente lo mismo',
    },
    {
      termino: 'Estereotipo',
      significado:
        'Imagen o idea simplificada y generalizada sobre un grupo de personas, que no considera las diferencias individuales',
    },
    {
      termino: 'Inclusión',
      significado:
        'Actitud y práctica de incluir y dar la bienvenida a personas con diferentes características y trasfondos',
    },
    {
      termino: 'Igualdad',
      significado:
        'Principio que asegura que todas las personas, independientemente de sus diferencias, tengan las mismas oportunidades para participar en la sociedad',
    },
    {
      termino: 'Interculturalidad',
      significado:
        'Interacción entre culturas diferentes, de manera respetuosa y beneficiosa para la convivencia en la comunidad',
    },
    {
      termino: 'Prejuicio',
      significado:
        'Opinión o actitud negativa hacia una persona o grupo, basada en estereotipos o ideas preconcebidas',
    },
    {
      termino: 'Pluralidad cultural',
      significado:
        'Existencia de diferentes grupos culturales dentro de una sociedad, que contribuye a la diversidad y la riqueza, destinado a generar actitudes y comportamientos',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
