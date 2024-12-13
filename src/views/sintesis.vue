<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row
      .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis1.png")
      .col-xl(data-aos="fade-left")
        .p-4(style="background-color:#D7E1EB")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/sintesis2.svg")
            .col-md(style="place-self:center;")
              p.mb-0 El siguiente diagrama proporciona una visión general sintetizada de los principales temas abordados en este componente. Este mapa conceptual está diseñado para ayudar al estudiante a visualizar la interconexión entre los diversos aspectos que conforman el proceso de monitoreo y análisis de datos en la agricultura.
        
        p.mt-3 En el centro del diagrama se encuentra el concepto principal de gestión y análisis de datos, del cual se ramifican aprendizajes clave que abarcan desde la recolección de datos en campo hasta la implementación de estrategias basadas en datos para optimizar recursos y aumentar la productividad. A través del uso de tecnologías avanzadas como sensores IoT, drones, y plataformas de análisis, el estudiante aprenderá cómo transformar grandes volúmenes de datos en decisiones prácticas y sostenibles.

        .row
          .col-lg
            .p-4(style="background-color:#E3F0D4;border:2px #3BA935 dashed;border-radius:7px;")
              p.mb-0 Cada tema se desglosa en subtemas como el desarrollo de competencias en limpieza y análisis de datos, la interpretación visual de la información mediante herramientas gráficas, y el uso de algoritmos de Machine Learning para la generación de modelos predictivos. Estos conocimientos se complementan con un enfoque ético y sostenible, promoviendo soluciones que minimicen el impacto ambiental mientras se fomenta un pensamiento crítico sobre el papel de la tecnología en la agricultura.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/sintesis3.svg")

    p.mt-4(data-aos="fade-right") Este diagrama sirve como una guía visual que resume la amplitud y profundidad de los temas cubiertos en el componente. Permite al estudiante comprender rápidamente las relaciones entre los conceptos y aplicarlos en su contexto profesional. Le invitamos a utilizar este mapa como un complemento al contenido detallado, sirviendo como una referencia rápida y un recordatorio visual de los aspectos fundamentales de la gestión y análisis de datos en la agricultura.

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5.bgs.p-4.brad
        figure(data-aos="fade-up" data-aos-duration="750")
          img(src="@/assets/curso/sintesis.svg", alt='Se denomina «Síntesis del componente». El diagrama muestra un mapa conceptual de Gestión y análisis de datos para el monitoreo de labores agrícolas, que se ramifica en 10 áreas principales. Abarca desde la importancia del uso eficiente de datos hasta la preparación para desafíos del sector, incluyendo tecnologías avanzadas (sensores IoT, drones), procesamiento de datos, desarrollo de competencias, y estrategias para optimizar recursos. Los subtemas detallan aspectos específicos como técnicas de ciencia de datos, machine learning y análisis de datos agrícolas. https://www.mindomo.com/mindmap/9d4ffd3e098149f8a47984b5c085c6b8 ')
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
