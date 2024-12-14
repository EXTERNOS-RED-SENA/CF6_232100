<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro
      .row
        .col-lg(data-aos="fade-right" data-aos-duration="550")
          .p-4(style="background-color:#E3F0D4;border:2px #3BA935 dashed;border-radius:7px;")
            p.mb-0 En un entorno agrícola cada vez más competitivo y condicionado por factores climáticos y de mercado, el uso eficiente de los datos se ha convertido en una herramienta clave para optimizar la productividad y sostenibilidad de los sistemas productivos. El componente de gestión y análisis de datos para el monitoreo de labores agrícolas está diseñado para capacitar al aprendiz en el manejo integral de la información generada en los procesos agrícolas, desde su recolección en campo hasta su análisis y visualización para la toma de decisiones.
          p.mt-3.mb-0 Este componente abarca el uso de tecnologías avanzadas como sensores IoT, drones y plataformas de análisis de datos, que permiten registrar variables críticas como temperatura, humedad, niveles de radiación solar y comportamiento de los cultivos. Mediante la aplicación de técnicas de ciencia de datos y algoritmos de Machine Learning, el aprendiz podrá procesar grandes volúmenes de información (Big Data) y generar modelos predictivos que mejoren la eficiencia en la gestión de recursos como el agua, fertilizantes y tiempo de cosecha.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" data-aos-duration="550")
          figure
            img(src="@/assets/curso/intro1.svg")
      
      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right" data-aos-duration="550")
          figure
            img(src="@/assets/curso/intro2.png")
        .col-lg(data-aos="fade-left" data-aos-duration="550")
          .p-4(style="background-color:#CBF0F5")
            .row
              .col-md-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/intro3.svg")
              .col-md(style="place-self:center;")
                p.mb-0 La formación proporcionada se centra en desarrollar competencias para procesar los datos obtenidos de sistemas de monitoreo conforme a criterios técnicos. Esto incluye la limpieza, transformación y análisis de datos, además de su correcta interpretación y visualización mediante herramientas gráficas. Al finalizar, el aprendiz estará capacitado para implementar estrategias basadas en datos, optimizando recursos, incrementando la productividad y reduciendo los impactos ambientales negativos.
          p.mt-3.mb-0 Este componente no solo promueve habilidades técnicas esenciales en el manejo de datos, sino que también fomenta un enfoque crítico y reflexivo sobre el papel de la tecnología en la agricultura. En un contexto donde la sostenibilidad es primordial, los aprendices estarán preparados para enfrentar los desafíos del sector con soluciones innovadoras y fundamentadas en datos.
  
      figure.mt-4(data-aos="zoom-in-up" data-aos-duration="500")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/u2ZxUWAU8VM?si=xbBOi3xATQC9iqDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
