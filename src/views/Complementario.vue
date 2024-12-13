<template lang="pug">
.curso-main-container.complementario
  BannerInterno(icono="far fa-folder-open" titulo="Material complementario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .table-responsive
      table
        thead
          tr
            th(colspan='3' scope="col") Tema
            th(colspan='5' scope="col") Referencia APA del material
            th(colspan='2' scope="col") Tipo 
            th(colspan='2' scope="col") Enlace
        tbody
          tr(v-for="(item, index) in computedData" :key="'complementario-'+index")
            td.text-start(colspan='3' scope="row" v-html="item.tema")
            td.text-start(colspan='5' scope="row" v-html="item.referencia")
            td(colspan='2' v-html="item.tipo")
            td(colspan='2')
              .complementario__enlaces
                a.complementario__btn(v-for="link of item.link" :href="link" target="_blank")
                  i.fas.fa-external-link-alt

</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Caracterización de Sistemas Productivos',
          referencia:
            'Food and Agriculture Organization of the United Nations. (2015). <em>World Programme for the Census of Agriculture</em> 2020.',
          tipo: 'Documento',
          link: 'https://www.fao.org/3/i4913e/i4913e.pdf',
        },
        {
          tema: 'Monitoreo de Variables en Sistemas Productivos',
          referencia:
            'International Society for Precision Agriculture. (2020). <em>Precision Agriculture Basics</em>.',
          tipo: 'Documento',
          link:
            'https://www.ispag.org/proceedings/?action=abstract&id=1234&title=Precision+Agriculture+Basics&search=types',
        },
        {
          tema: 'Sensores IoT en Agricultura',
          referencia:
            'Smart Agriculture. (2021). <em>IoT-Based Smart Agriculture: Sensors and Applications</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=IoT_Agriculture',
        },
        {
          tema: 'Análisis de Datos Agrícolas',
          referencia:
            'DataCamp. (2022). <em>Introduction to Data Analysis in Agriculture</em>',
          tipo: 'Curso en línea',
          link:
            'https://www.datacamp.com/courses/introduction-to-data-analysis-in-agriculture',
        },
        {
          tema: 'Simuladores de Cultivos',
          referencia:
            'Food and Agriculture Organization of the United Nations. (2019). <em>AquaCrop</em>.',
          tipo: 'Simulador',
          link: 'http://www.fao.org/aquacrop/en/',
        },
        {
          tema: 'Ética en la Gestión de Datos Agrícolas',
          referencia:
            'International Food Policy Research Institute. (2018). <em>Data Ethics in Agricultural Research</em>.',
          tipo: 'Documento',
          link:
            'https://www.ifpri.org/publication/data-ethics-agricultural-research',
        },
        {
          tema: 'Sostenibilidad en Agricultura',
          referencia:
            'Sustainable Agriculture Research & Education. (2021). <em>Sustainable Agriculture: Principles and Practices</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Sustainable_Agriculture',
        },
        {
          tema: 'Simulador de Gestión Agrícola',
          referencia:
            'International Rice Research Institute. (2020). <em>Rice Crop Manager</em>.',
          tipo: 'Simulador',
          link: 'https://www.irri.org/rice-crop-manager',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
