<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Aplicaciones prácticas del monitoreo de datos
    
    .row.mt-4
      .col-lg(data-aos="fade-right")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#CBF0F5;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema8/1.svg")
            .col-md
              p.mb-0 La aplicación práctica de tecnologías y estrategias de gestión de datos en la agricultura puede entenderse mejor a través de estudios de caso y ejemplos reales. Estos ejemplos ofrecen una visión integral de cómo se implementan sistemas de monitoreo y análisis en contextos específicos, destacando los desafíos, soluciones y resultados obtenidos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema8/2.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_8_1 8.1 Implementación de un sistema de monitoreo en cultivos de maíz
    
    .cont_2_4
      p(data-aos="fade-right") El maíz es uno de los cultivos más importantes a nivel mundial, pero su producción enfrenta desafíos significativos debido a las condiciones climáticas cambiantes y la variabilidad del suelo. Este estudio de caso se centra en la implementación de un sistema de monitoreo basado en sensores IoT y plataformas de análisis de datos en una plantación de maíz en una región semiárida.

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Descripción del Proyecto
      
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema8/3.png")
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Objetivo")
              p Optimizar el uso del agua y mejorar la productividad del cultivo.
            .row.col-xl-11.m-auto(titulo="Tecnologías utilizadas")
              p Sensores de humedad del suelo, estaciones meteorológicas y plataformas de análisis como Tableau.
            .row.col-xl-11.m-auto(titulo="Resultados")
              p Reducción del consumo de agua en un 25% y aumento del rendimiento del cultivo en un 15%.
          p.mb-0 #[strong Nota:] este caso demuestra cómo el monitoreo continuo y el análisis de datos en tiempo real pueden transformar la gestión del riego y mejorar la sostenibilidad.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_8_2 8.2 Uso de Big Data para la predicción de rendimiento en plantaciones de café
    
    .row
      .col-lg(data-aos="fade-right")
        p El café es un cultivo de alto valor, pero su producción está altamente influenciada por factores como el clima, el manejo del suelo y la aparición de plagas. Este estudio de caso explora cómo una cooperativa cafetera utiliza Big Data para predecir el rendimiento de sus plantaciones y planificar estrategias de manejo más efectivas.
        .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
          .row
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/4.svg")
            .col.ps-2(style="place-self:center;")
              h3.mb-0.pe-4 Descripción del Proyecto
        
        .p-4(style="background-color:#E3F0D4;")
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 1
              span Objetivo: predecir el rendimiento de la cosecha y optimizar la distribución de insumos.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 2
              span Tecnologías utilizadas: análisis de datos climáticos históricos, modelado predictivo con Python y sistemas de información geográfica (SIG).
            li.d-flex.mb-0
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 3
              span Resultados: mejora de la precisión en las predicciones de rendimiento en un 20% y reducción de costos operativos en un 10%.
        
        p.mt-4.mb-0 #[strong Nota:] este ejemplo destaca el valor del análisis predictivo en la planificación estratégica y la mejora de la eficiencia operativa.

      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema8/4.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_8_3 8.3 Aplicación de Machine Learning en el monitoreo de invernaderos
    
    .cont_2_4
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema8/5.png")
        .col-lg(data-aos="fade-left")
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#CBF0F5;")
            .row
              .col-md-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema8/6.svg")
              .col-md
                p.mb-0 Los invernaderos ofrecen un entorno controlado para la producción agrícola, pero requieren una gestión cuidadosa para optimizar el uso de recursos y maximizar la productividad. Este estudio de caso examina cómo se aplican algoritmos de Machine Learning para monitorear y controlar las condiciones dentro de un invernadero de cultivo de tomate.

      .row.mt-4
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Objetivo")
              p Automatizar el control del microclima y optimizar el uso de energía y agua.
            .row.col-xl-11.m-auto(titulo="Tecnologías utilizadas")
              p Sensores de temperatura y humedad, cámaras multiespectrales y algoritmos de Machine Learning para predecir las necesidades del cultivo.
            .row.col-xl-11.m-auto(titulo="Resultados")
              p Reducción del consumo de energía en un 30% y mejora del rendimiento del cultivo en un 20%.
          p.mb-0 #[strong Nota:] este caso ilustra cómo el uso de IA y ML puede llevar la gestión de invernaderos a un nivel superior de eficiencia y sostenibilidad.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema8/7.png")

          
                                                                                                    
</template>

<script>
export default {
  name: 'Tema8',
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
