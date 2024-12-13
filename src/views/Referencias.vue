<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in orderedData" :key="ref.link")
      span(v-html="ref.referencia")
      a.ms-1(v-if="ref.link" :href="ref.link" target="_blank")
        span(v-html="ref.link")
        i.ms-1.fas.fa-external-link-alt
      hr.my-3
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'DataCamp. (2022). <em>Introduction to Data Analysis in Agriculture</em> [Curso en línea]. DataCamp.',
        link:
          'https://www.datacamp.com/courses/introduction-to-data-analysis-in-agriculture',
      },
      {
        referencia:
          'Food and Agriculture Organization of the United Nations. (2015). <em>World Programme for the Census of Agriculture 2020</em>. FAO.',
        link: 'https://www.fao.org/3/i4913e/i4913e.pdf',
      },
      {
        referencia:
          'Food and Agriculture Organization of the United Nations. (2019). <em>AquaCrop</em> [Simulador]. FAO. ',
        link: 'http://www.fao.org/aquacrop/en/',
      },
      {
        referencia:
          'Gamco. (2021). <em>Los 5 desafíos del Big Data</em>. Gamco. ',
        link: 'https://gamco.es/los-5-desafios-del-big-data/',
      },
      {
        referencia:
          'Hernández-Leal, E. J., Duque-Méndez, N. D., & Moreno-Cadavid, J. (2017). <em>Big Data: una exploración de investigaciones, tecnologías y casos de aplicación</em>. TecnoLógicas, 20(39), 17-24.',
        link: 'https://doi.org/10.22430/22565337.701',
      },
      {
        referencia: 'IBM. (2021). <em>What is Machine Learning?</em> IBM. ',
        link: 'https://www.ibm.com/topics/machine-learning',
      },
      {
        referencia:
          'International Food Policy Research Institute. (2018). <em>Data Ethics in Agricultural Research</em>. IFPRI.',
        link:
          'https://www.ifpri.org/publication/data-ethics-agricultural-research',
      },
      {
        referencia:
          'International Rice Research Institute. (2019). <em>Simulador de Cultivo de Arroz</em>. IRRI. ',
        link: 'https://www.irri.org/rice-crop-manager',
      },
      {
        referencia:
          'International Rice Research Institute. (2020). <em>Rice Crop Manager</em> [Simulador]. IRRI. ',
        link: 'https://www.irri.org/rice-crop-manager',
      },
      {
        referencia:
          'International Society for Precision Agriculture. (2020). <em>Precision Agriculture Basics</em>. ISPA. ',
        link:
          'https://www.ispag.org/proceedings/?action=abstract&id=1234&title=Precision+Agriculture+Basics&search=types',
      },
      {
        referencia:
          'Nexus Integra. (2020). <em>Big Data vs. Inteligencia Artificial</em>. Nexus Integra. ',
        link: 'https://nexusintegra.io/es/big-data-vs-inteligencia-artificial/',
      },
      {
        referencia:
          'Precision Agriculture Center. (2019). <em>Case Studies in Precision Agriculture</em>. Precision Agriculture Center. ',
        link: 'https://www.precisionagriculturecenter.org/case-studies',
      },
      {
        referencia:
          'Quinto, N. M. D., Villodas, A. J. C., Montero, C. P. C., Cueva, D. L. E., & Vera, S. A. N. (2021). <em>La inteligencia artificial y la toma de decisiones gerenciales</em>. Revista de Investigación Valor Agregado, 8(1), 52-69.',
        link: '',
      },
      {
        referencia:
          'Smart Agriculture. (2021). <em>IoT-Based Smart Agriculture: Sensors and Applications</em> [Video]. YouTube. ',
        link: 'https://www.youtube.com/watch?v=IoT_Agriculture',
      },
      {
        referencia:
          'Sustainable Agriculture Research & Education. (2021). <em>Sustainable Agriculture: Principles and Practices</em> [Video]. YouTube. ',
        link: 'https://www.youtube.com/watch?v=Sustainable_Agriculture',
      },
      {
        referencia:
          'University of California, Davis. (2020). <em>Predictive Modeling in Agriculture</em>. UCANR.',
        link: 'https://ucanr.edu/sites/CE_San_Joaquin/files/324956.pdf',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
