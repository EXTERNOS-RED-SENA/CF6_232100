<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Aplicaciones prácticas del monitoreo de datos

    .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E3F0D4;border:2px #3BA935 dashed;border-radius:7px;" data-aos="fade-up" data-aos-duration="600")
      .row
        .col-md-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/tema6/1.svg")
        .col-md
          p.mb-0 La agricultura moderna se enfrenta a desafíos complejos que exigen soluciones prácticas e innovadoras. La integración de tecnologías de monitoreo y análisis de datos ha permitido desarrollar aplicaciones que optimizan cada etapa del proceso productivo, desde la siembra hasta la cosecha. Estas aplicaciones no solo mejoran la eficiencia operativa, sino que también promueven la sostenibilidad al reducir el uso de insumos y mitigar el impacto ambiental.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_6_1 6.1 Gestión de sistemas de riego inteligente

    .row
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#CBF0F5;")
          p.mb-0 El riego es una de las actividades más críticas en la agricultura, especialmente en regiones con recursos hídricos limitados. Los sistemas de riego inteligente utilizan datos en tiempo real para optimizar la cantidad y frecuencia del riego, asegurando que cada planta reciba la cantidad exacta de agua que necesita.
        p.mb-0.mt-4 Estos sistemas combinan sensores de humedad del suelo con algoritmos de análisis que ajustan automáticamente los ciclos de riego en función de las condiciones climáticas y las necesidades específicas de los cultivos. Esto no solo reduce el desperdicio de agua, sino que también mejora la salud del suelo y aumenta los rendimientos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/2.png")
    
    .cont_2_4.pt-5
      .cont_decorativo.mb-4(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Implementación en campo
      
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema6/3.png")
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Sensores de humedad y temperatura del suelo")
              p Capturan datos críticos que alimentan el sistema de riego.
            .row.col-xl-11.m-auto(titulo="Controladores automáticos")
              p Ajustan el riego en función de los datos recibidos.
            .row.col-xl-11.m-auto(titulo="Sistemas híbridos")
              p Permiten a los agricultores supervisar y ajustar el sistema desde cualquier lugar.
          p.mb-0 El riego inteligente es una herramienta poderosa para gestionar recursos de manera eficiente y sostenible.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_6_2 6.2 Monitoreo de plagas y enfermedades en tiempo real
    
    .cont_1_1
      .row(data-aos="fade-up")
        .col-lg.pe-lg-0
          .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#D7E1EB;")
            p.mb-0 Las plagas y enfermedades representan una amenaza constante para la agricultura, causando pérdidas significativas si no se manejan adecuadamente. El monitoreo en tiempo real utiliza sensores, imágenes satelitales y modelos predictivos para detectar la presencia de plagas y enfermedades antes de que se conviertan en un problema generalizado.
        .col-lg-auto.ps-lg-0.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema6/4.png")
      
      .row.mt-5
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema6/5.svg")
        .col-lg(data-aos="fade-left")
          p Esta detección temprana permite a los agricultores tomar medidas inmediatas, como la aplicación localizada de pesticidas o el ajuste de prácticas culturales, minimizando el impacto en los cultivos y reduciendo la dependencia de productos químicos.
          .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
            .row
              .col-auto.pe-0(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/4.svg")
              .col.ps-2(style="place-self:center;")
                h3.mb-0.pe-4 Tecnologías utilizadas
          
          .p-4(style="background-color:#E3F0D4;")
            ol.lista-ol--cuadro.mb-0
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                  span.fw-bold(style="color:#12263F;") 1
                span #[strong Cámaras multiespectrales:] identifican patrones en las hojas que indican infecciones.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                  span.fw-bold(style="color:#12263F;") 2
                span #[strong Modelos predictivos:] anticipan brotes de plagas basados en datos climáticos y de cultivo.
              li.d-flex.mb-0
                .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                  span.fw-bold(style="color:#12263F;") 3
                span #[strong Sistemas de alerta temprana:] notifican a los agricultores cuando se detectan condiciones favorables para plagas o enfermedades.
          
          p.mt-4.mb-0 El monitoreo de plagas y enfermedades mejora la seguridad alimentaria y reduce las pérdidas económicas.
      
      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_6_3 6.3 Optimización de la producción mediante análisis de datos climáticos
    
    p(data-aos="fade-right") El clima es uno de los factores más influyentes en la producción agrícola. Un análisis preciso de los datos climáticos permite a los agricultores anticipar eventos como sequías, heladas o lluvias intensas, y adaptar sus estrategias para minimizar los riesgos asociados.
    
    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/6.png")
      .col-lg(data-aos="fade-left")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#F3F0EA;border:2px #9D978D dashed;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema6/7.svg")
            .col-md
              p.mb-0 El uso de datos climáticos históricos y en tiempo real ayuda a planificar actividades agrícolas como la siembra y la cosecha, asegurando que se realicen en las condiciones más favorables. Además, la integración de estos datos con modelos predictivos mejora la toma de decisiones a largo plazo, como la selección de cultivos adaptados a condiciones climáticas específicas.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Elementos estratégicos
    
    .row
      .col-lg-8(data-aos="fade-right")
        .p-3.p-lg-4(style="background-color:#01B9D1;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Estaciones meteorológicas:] proporcionan datos climáticos precisos y localizados.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Tableau:] facilita la creación de dashboards interactivos que integran múltiples fuentes de datos.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Software de modelado climático:] simula escenarios futuros y su impacto en la producción.
        p.mb-0.mt-4 La optimización basada en datos climáticos ayuda a los agricultores a gestionar la incertidumbre y mejorar la resiliencia de sus sistemas productivos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/8.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 4.
      span Resumen aplicaciones prácticas del monitoreo y procesamiento de datosltura.
    .p-3.p-lg-4.pt-xl-5.pb-xl-5(style="background-color:#EAEFF4;")
      figure(data-aos="fade-up")
        img(src="@/assets/curso/tema6/9.svg" alt="La Figura 4 se denomina «Resumen aplicaciones prácticas del monitoreo y procesamiento de datos». Presenta un mapa conceptual que se estructura en cuatro secciones principales: los desafíos en la agricultura, la integración de tecnologías de monitoreo y análisis de datos, las aplicaciones específicas (que incluyen optimización del proceso productivo, mejora de eficiencia operativa y promoción de la sostenibilidad), y los beneficios de estas aplicaciones como el aumento de productividad y la reducción de costos. Para acceder al diagrama: https://www.mindomo.com/mindmap/ca22a9cacb574536bd69fc35575e3b26")
    figcaption.mt-2.fw-normal Fuente: OIT, 2024.

                                                                                                    
</template>

<script>
export default {
  name: 'Tema6',
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
