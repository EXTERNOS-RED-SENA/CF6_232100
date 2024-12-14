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
        .col-auto.pe-0(style="place-self:center;")
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
          .col-auto.pe-0(style="place-self:center;")
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

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Ciencia de datos: principios y aplicaciones en la agricultura

    .row(data-aos="fade-up")
      .col-lg.pe-lg-0
        .h-100.p-4.p-xl-5.d-flex.align-content-center.flex-wrap(style="background-color:#F3F0EA;")
          p.mb-0 La ciencia de datos es una disciplina que combina habilidades de estadística, informática y conocimiento específico del dominio para transformar datos en información útil. En la agricultura, esta transformación es crucial para abordar problemas complejos, como el manejo eficiente de recursos o la predicción de eventos adversos.
      .col-lg-auto.ps-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/9.png")
    
    p.mt-4(data-aos="fade-right") A medida que los sistemas agrícolas se vuelven más dependientes de tecnologías de monitoreo y análisis, la capacidad de manejar grandes volúmenes de datos y extraer insights significativos se ha convertido en una habilidad esencial. La ciencia de datos proporciona las herramientas necesarias para analizar patrones, desarrollar modelos predictivos y visualizar información de manera que sea accesible y útil para los agricultores y otros actores del sector.

    .cont_2_4
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 La ciencia de datos en la agricultura tiene aplicaciones clave
      
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/11.png")
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Predicción de rendimientos")
              p Ayuda a prever la producción con base en datos históricos y actuales.
            .row.col-xl-11.m-auto(titulo="Optimización de insumos")
              p Identifica la cantidad exacta de recursos necesarios para cada parcela.
            .row.col-xl-11.m-auto(titulo="Monitoreo de la salud del cultivo")
              p Usa datos en tiempo real para detectar problemas temprano.
            .row.col-xl-11.m-auto(titulo="Herramientas clave")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#3C6D9D !important;")
                  span Algoritmos estadísticos.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#3C6D9D !important;")
                  span Plataformas de visualización como Tableau o Power BI.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#3C6D9D !important;")
                  span Lenguajes de programación como Python y R para análisis avanzado.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3 Introducción al Big Data y su impacto en la agricultura

    .cont_2_4
      .row
        .col-lg.mb-4.mb-lg-0(data-aos="fade-up")
          .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#CBF0F5;border-radius:10px;")
            p.mb-0 El concepto de Big Data se refiere a la gestión de volúmenes masivos de datos que son demasiado grandes, rápidos y diversos para ser procesados con herramientas tradicionales. En la agricultura, el Big Data está transformando la forma en que los agricultores entienden y manejan sus sistemas productivos, permitiendo una integración más profunda de diversas fuentes de datos.
        .col-lg.d-none.d-lg-block(data-aos="fade-down" data-aos-duration="800")
          figure
            img(src="@/assets/curso/tema2/12.png")
        .col-lg(data-aos="fade-up")
          .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E3F0D4;border-radius:7px;border:2px #3BA935 dashed;")
            p.mb-0 El análisis de Big Data facilita la implementación de prácticas agrícolas de precisión, lo que significa que cada decisión, desde la siembra hasta la cosecha, se basa en un análisis detallado de datos específicos para cada parcela. Esto permite no solo maximizar la eficiencia y los rendimientos, sino también mitigar riesgos como plagas, enfermedades y fenómenos climáticos adversos.

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Características del big data
      
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-3.pb-0.h-100.bg-white.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            .row
              .col-auto.pe-lg-0
                figure.mb-3
                  img.d-inline(src="@/assets/curso/tema2/13.svg" style="max-width:88px;")
              .col
                h5 Volumen
                p.mb-0 Grandes cantidades de datos provenientes de múltiples fuentes.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-3.pb-0.h-100.bg-white.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            .row
              .col-auto.pe-lg-0
                figure.mb-3
                  img.d-inline(src="@/assets/curso/tema2/13.svg" style="max-width:88px;")
              .col
                h5 Velocidad
                p.mb-0 Captura y análisis en tiempo real.
        .col-lg.col-md-9(data-aos="zoom-in")
          .p-3.pb-0.h-100.bg-white.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            .row
              .col-auto.pe-lg-0
                figure.mb-3
                  img.d-inline(src="@/assets/curso/tema2/13.svg" style="max-width:88px;")
              .col
                h5 Variedad
                p.mb-0 Combinación de datos estructurados y no estructurados.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Aplicaciones en la agricultura
    
    .row
      .col-lg(data-aos="fade-right")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#D7E1EB;")
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 1
              span #[strong Agricultura de precisión:] maximiza el uso eficiente de insumos.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 2
              span #[strong Predicción climática:] anticipa eventos meteorológicos extremos.
            li.d-flex.mb-0
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 3
              span #[strong Gestión de riesgos:] detecta problemas antes de que impacten significativamente.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/14.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4 Machine Learning e inteligencia artificial: aplicaciones agrícolas

    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/15.png")
      .col-lg(data-aos="fade-left")
        p El #[em Machine Learning] y la Inteligencia Artificial representan un salto significativo en la capacidad de los sistemas agrícolas para procesar y analizar datos. A diferencia de los métodos tradicionales, estas tecnologías pueden aprender de los datos y mejorar sus predicciones y decisiones con el tiempo.
        .p-4(style="background-color:#F3F0EA;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema2/16.svg")
            .col-md
              p.mb-0 El impacto de la IA y el ML en la agricultura es notable. Desde la detección automática de plagas mediante imágenes hasta la predicción del mejor momento para la cosecha, estas herramientas permiten una gestión más eficiente, precisa y proactiva de los sistemas agrícolas. Al automatizar tareas complejas y proporcionar insights detallados, el ML y la IA están ayudando a los agricultores a enfrentar desafíos cada vez más complejos en un entorno dinámico.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Tipos

    .row
      .col-lg(data-aos="fade-right")
        .h-100.p-3.p-lg-4.d-flex.align-content-center.flex-wrap(style="background-color:#78B62E;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong #[em Machine Learning]:] identifica patrones y hace predicciones basadas en datos históricos.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Inteligencia Artificial:] extiende las capacidades del ML a través de aplicaciones como el procesamiento de imágenes y la automatización de decisiones.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/17.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Aplicaciones clave
    
    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Detección de plagas y enfermedades")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema2/18.svg')
          .col-md
            h5 Detección de plagas y enfermedades
            p.mb-0 Utiliza algoritmos para identificar problemas en imágenes de cultivos.
      .py-3.py-md-4(titulo="Optimización de rutas de maquinaria agrícola")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema2/19.svg')
          .col-md
            h5 Optimización de rutas de maquinaria agrícola
            p.mb-0 Reduce costos operativos.
      .py-3.py-md-4(titulo="Sistemas de recomendación")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema2/20.svg')
          .col-md
            h5 Sistemas de recomendación
            p.mb-0 Sugieren cultivos basados en análisis de mercado y condiciones loca.


                                                                                                    
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
