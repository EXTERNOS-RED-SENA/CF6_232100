<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Importancia del monitoreo en la agricultura moderna

    .row
      .col-lg.mb-4.mb-lg-0(data-aos="fade-up" data-aos-duration="600")
        .h-100.p-4(style="background-color:#D7E1EB;border-radius:10px;")
          p.mb-0 La agricultura enfrenta desafíos complejos, como el cambio climático, la volatilidad de los mercados y la presión sobre los recursos naturales. El monitoreo agrícola se presenta como una solución estratégica, ya que permite la supervisión continua de las actividades productivas. Su principal objetivo es proporcionar datos precisos y en tiempo real que ayuden a los agricultores a identificar problemas y oportunidades.
      .col-lg.d-none.d-lg-block(data-aos="fade-down" data-aos-duration="800")
        figure
          img(src="@/assets/curso/tema1/1.png")
      .col-lg(data-aos="fade-up" data-aos-duration="600")
        .h-100.p-4(style="background-color:#F3F0EA;border-radius:10px;")
          p.mb-0 La adopción de tecnologías como sensores IoT, drones y estaciones meteorológicas ha revolucionado la manera en que se recopila la información. Estas herramientas permiten una cobertura más amplia y detallada de los cultivos, facilitando la detección temprana de enfermedades, el control de plagas y la optimización de sistemas de riego. En última instancia, el monitoreo agrícola contribuye a aumentar la rentabilidad y la resiliencia de las explotaciones agrícolas frente a condiciones adversas.

    Separador

    .cont_1_1

      .titulo-segundo(data-aos="flip-up")
        h2#t_1_1 1.1 Rol de los datos en la toma de decisiones agrícolas
      
      p(data-aos="fade-right") En la actualidad, los datos se han convertido en un recurso estratégico para la gestión agrícola. La toma de decisiones basada en datos permite a los productores optimizar el uso de insumos y planificar actividades con mayor precisión. Por ejemplo, los datos climáticos pueden ayudar a prever eventos meteorológicos extremos, mientras que la información sobre la humedad del suelo puede guiar el manejo eficiente del agua.

      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/2.png")
        .col-lg(data-aos="fade-left")
          .p-4.h-100(style="background-color:#E3F0D4;border:2px #3BA935 dashed;border-radius:7px;")
            .row
              .col-md-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema1/3.svg")
              .col-md
                p.mb-0 La integración de datos históricos con mediciones en tiempo real ofrece una perspectiva completa del estado del sistema productivo. Esto no solo mejora la eficiencia operativa, sino que también minimiza riesgos y reduce costos. Herramientas de análisis y visualización transforman estos datos en información accionable, lo que facilita la toma de decisiones estratégicas y operativas.

      Separador

      .row
        .col-lg(data-aos="fade-right")
          .titulo-segundo(data-aos="flip-up")
            h2#t_1_2 1.2 Relación con la sostenibilidad y la eficiencia productiva
          p El monitoreo agrícola desempeña un papel crucial en la sostenibilidad del sector. Al proporcionar datos detallados, permite a los agricultores implementar prácticas de agricultura de precisión, lo que significa aplicar insumos como agua y fertilizantes de manera específica y eficiente. Esto no solo mejora la productividad, sino que también minimiza el impacto ambiental al reducir el uso excesivo de recursos.
          .p-4.mt-4(style="background-color:#F3F0EA")
            .row
              .col-md-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/4.svg")
              .col-md(style="place-self:center;")
                p.mb-0 Además, la sostenibilidad se ve reforzada por la capacidad del monitoreo para adaptar las prácticas agrícolas a condiciones cambiantes. Los agricultores pueden responder rápidamente a eventos climáticos extremos o cambios en la salud del suelo, asegurando la continuidad de la producción y la conservación del entorno natural.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/5.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 1.
      span Introducción al monitoreo agrícola.
    .p-3.p-lg-4.pt-xl-5.pb-xl-5(style="background-color:#EAEFF4;")
      figure(data-aos="fade-up")
        img(src="@/assets/curso/tema1/6.svg" alt="La Figura 1 se denomina «Introducción al monitoreo agrícola». Presenta un mapa conceptual sobre el tema, que se divide en seis secciones principales: importancia, beneficios, aplicaciones, tecnologías utilizadas, desafíos y conclusiones del monitoreo agrícola, cada una con sus respectivas subdivisiones que detallan aspectos específicos de cada tema. Para acceder al diagrama: https://www.mindomo.com/mindmap/f3b0c216d7654928a710777ef5f2fd07 ")
    figcaption.mt-2.fw-normal Fuente: OIT, 2024.
                                                                                                    
</template>

<script>
export default {
  name: 'Tema1',
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
