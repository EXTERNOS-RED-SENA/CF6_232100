export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Importancia del monitoreo en la agricultura moderna',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Rol de los datos en la toma de decisiones agrícolas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Relación con la sostenibilidad y la eficiencia productiva',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos fundamentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición y tipos de datos en el contexto agrícola',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Ciencia de datos: principios y aplicaciones en la agricultura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Introducción al <em>Big Data</em> y su impacto en la agricultura',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              '<em>Machine Learning</em> e inteligencia artificial: aplicaciones agrícolas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ciclo de vida de los datos agrícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Recolección de datos: sensores IoT, estaciones meteorológicas y drones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Limpieza y transformación de datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Almacenamiento y organización de datos: herramientas y técnicas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Análisis y visualización: Representación gráfica y <em>dashboards</em>',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas tecnológicas en el monitoreo agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Sensores IoT: tipos y usos prácticos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Plataformas y <em>software</em> para el análisis de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Visualización con herramientas como Excel y Tableau',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Introducción al uso de Python y R para análisis avanzado',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de análisis y modelado de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estadística descriptiva aplicada a datos agrícolas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Modelos predictivos y su implementación en cultivos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Análisis de variables y parámetros clave',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aplicaciones prácticas del monitoreo de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Gestión de sistemas de riego inteligente',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Monitoreo de plagas y enfermedades en tiempo real',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Optimización de la producción mediante análisis de datos climáticos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Ética y sostenibilidad en la gestión de datos agrícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Privacidad y seguridad en la recolección y almacenamiento de datos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Uso responsable de los datos para la sostenibilidad agrícola',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Aplicaciones prácticas del monitoreo de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo:
              'Implementación de un sistema de monitoreo en cultivos de maíz',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Uso de Big Data para la predicción de rendimiento en plantaciones de café',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo:
              'Aplicación de <em>Machine Learning</em> en el monitoreo de invernaderos',
            hash: 't_8_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Gestión y análisis de datos para el monitoreo de labores agrícolas',
    Description:
      'Este componente formativo proporciona bases teóricas y prácticas para gestionar y analizar datos en sistemas productivos agrícolas. A través de tecnologías como sensores IoT, algoritmos de Machine Learning y herramientas de análisis de datos desarrollando habilidades para recolectar, procesar y visualizar información clave. Se focaliza en la toma de decisiones, optimizando recursos y mejorando la productividad bajo criterios de sostenibilidad y eficiencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
}
