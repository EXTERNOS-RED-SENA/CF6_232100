<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Conceptos fundamentales
    
    .row
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#CBF0F5")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/1.svg")
            .col-md(style="place-self:center;")
              p.mb-0 La gestión de datos en el contexto agrícola requiere una comprensión clara de los conceptos fundamentales que sustentan la recopilación, análisis y uso de la información. Desde el tipo de datos que se recopilan hasta las tecnologías y metodologías que facilitan su análisis, este capítulo establece los cimientos teóricos necesarios para entender cómo la ciencia de datos, el Big Data y la inteligencia artificial (IA) están transformando la agricultura.
        p.mt-3.mb-0 El objetivo es proporcionar al estudiante un marco conceptual robusto que le permita comprender la naturaleza de los datos agrícolas y cómo su análisis puede mejorar la toma de decisiones, optimizar los recursos y aumentar la sostenibilidad del sistema productivo.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/2.png")
    
    Separador

    .row
      .col-lg(data-aos="fade-right")
        
        .titulo-segundo(data-aos="flip-up")
          h2#t_2_1 2.1 Definición y tipos de datos en el contexto agrícola

        p Los datos son la base para la toma de decisiones en cualquier sistema productivo, y la agricultura no es una excepción. En este sector, los datos provienen de diversas fuentes y pueden tomar muchas formas, desde simples mediciones de temperatura hasta imágenes satelitales complejas. Comprender los tipos de datos disponibles es esencial para su adecuada gestión y análisis.

        .p-4.mt-4(style="background-color:#D7E1EB")
          p.mb-0 En la agricultura, los datos ayudan a responder preguntas críticas: ¿Cómo está creciendo el cultivo? ¿Qué recursos se están utilizando de manera ineficiente? ¿Cuándo es el mejor momento para cosechar? Sin una clasificación y organización adecuada, los datos brutos carecen de valor práctico. Por lo tanto, la habilidad de distinguir entre datos estructurados y no estructurados, y saber cómo utilizarlos, es un primer paso fundamental hacia una agricultura más eficiente y sostenible.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Tipos de datos agrícolas
    
    .cont_2_1
      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/5.png")
        .col-lg(data-aos="fade-left")
          .h-100.p-3.p-lg-4.d-flex.align-content-center.flex-wrap(style="background-color:#01B9D1;border-radius:10px;")
            ul.lista-ul.mb-0
              li.d-flex.bg-white.p-2(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong Datos estructurados:] información organizada en formatos predefinidos como tablas o bases de datos. Ejemplos: lecturas de sensores de temperatura y humedad, registros de producción.
              li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
                i.fas.fa-check-circle(style="color:#78B62E;")
                span #[strong Datos no estructurados:] información que no sigue un formato predefinido. Ejemplos: imágenes satelitales, videos de drones.
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Fuentes principales
      
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema2/6.svg" style="max-width:88px;")
            h5 Sensores IoT
            p.mt-4 Recopilan datos en tiempo real sobre condiciones del suelo y clima.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema2/7.svg" style="max-width:88px;")
            h5 Imágenes satelitales y drones
            p.mt-4 Proveen datos visuales del estado de los cultivos.
        .col-lg.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema2/8.svg" style="max-width:88px;")
            h5 Sistemas de Información Geográfica (SIG)
            p.mt-4  Integran y analizan datos espaciales.

      p.mt-4(data-aos="fade-right") Estos datos permiten a los agricultores anticipar problemas, como plagas o sequías, y optimizar el uso de insumos.

    Separador
      
                                                                                                    
</template>

<script>
export default {
  name: 'Tema2',
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
