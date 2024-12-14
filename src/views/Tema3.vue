<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ciclo de vida de los datos agrícolas
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/1.png")
      .col-lg(data-aos="fade-left")
        p.mb-4 El manejo de datos en la agricultura no es un proceso aislado, sino un ciclo continuo que abarca desde la recolección de datos hasta su análisis y posterior aplicación en la toma de decisiones. Este ciclo de vida asegura que los datos sean gestionados de manera efectiva, maximizando su valor en cada etapa. En el contexto agrícola, donde las decisiones deben tomarse rápidamente y con precisión, la comprensión del ciclo de vida de los datos es crucial.
        .p-4(style="background-color:#F3F0EA;")
          p.mb-0 En este apartado se aborda las etapas principales del ciclo de vida de los datos agrícolas, proporcionando al aprendiz un marco estructurado para comprender cómo se gestionan y utilizan los datos en sistemas productivos. Desde la recolección y almacenamiento hasta la visualización y análisis, se explorarán las mejores prácticas y tecnologías aplicadas en cada fase.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1 Recolección de datos: sensores IoT, estaciones meteorológicas y drones

    .row
      .col-lg(data-aos="fade-right")
        .p-4.h-100(style="background-color:#CBF0F5;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema3/2.svg")
            .col-md
              p.mb-0 La recolección de datos es el primer paso en el ciclo de vida de los datos y sienta las bases para todo el proceso de gestión de la información. En la agricultura, los datos se recopilan de múltiples fuentes, incluidas tecnologías avanzadas como sensores IoT, estaciones meteorológicas y drones. Estas herramientas permiten capturar información detallada sobre las condiciones del suelo, el clima y la salud de los cultivos en tiempo real.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/3.png")
    
    p.mt-4(data-aos="fade-right") La precisión y la frecuencia de la recolección de datos son esenciales para garantizar decisiones informadas. Además, la automatización de este proceso a través de tecnologías IoT reduce los errores humanos y asegura la consistencia en la captura de información.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Aspectos clave

    .cont_3_1.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        CarouselRED(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-5.mb-4.mb-lg-0
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/5.png')
            .col-lg-7
              h5 Sensores IoT
              p.mt-4 Dispositivos que miden variables como humedad, temperatura y pH del suelo.
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-5.mb-4.mb-lg-0
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/6.png')
            .col-lg-7
              h5 Estaciones meteorológicas
              p.mt-4 Proporcionan datos climáticos específicos como precipitación, velocidad del viento y radiación solar.
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-5.mb-4.mb-lg-0
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/7.png')
            .col-lg-7
              h5 Drones
              p.mt-4 Capturan imágenes de alta resolución y datos multiespectrales para evaluar la salud de los cultivos y detectar problemas.

    p.mt-4(data-aos="fade-right") Estas tecnologías permiten un monitoreo constante y detallado de los sistemas agrícolas, facilitando la toma de decisiones proactivas.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Limpieza y transformación de datos

    .cont_2_4
      .row
        .col-lg(data-aos="fade-right")
          p Los datos recolectados en campo suelen contener errores, valores faltantes o inconsistencias que deben ser corregidos antes de su análisis. La limpieza y transformación de datos son etapas esenciales que garantizan la calidad y utilidad de la información.
          p.mb-0 Este proceso no solo mejora la precisión de los modelos predictivos, sino que también optimiza la toma de decisiones al eliminar ruidos que podrían distorsionar los resultados. La limpieza incluye la corrección de errores y la normalización de datos, mientras que la transformación adapta la información a formatos específicos para su análisis posterior.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/8.png")
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Aspectos clave
      
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema3/9.svg" style="max-width:88px;")
            h5 Técnicas de limpieza
            p.mt-4 Eliminación de duplicados, imputación de datos faltantes y detección de valores atípicos.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema3/10.svg" style="max-width:88px;")
            h5 Transformación de datos 
            p.mt-4 Conversión de datos categóricos en numéricos, escalado y normalización.
        .col-lg.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema3/11.svg" style="max-width:88px;")
            h5 Herramientas recomendadas
            p.mt-4 Software como Excel, Python (Pandas, Numpy) y R para automatizar procesos de limpieza y transformación.

    p.mt-4(data-aos="fade-right") La limpieza y transformación son pasos fundamentales para garantizar que los análisis sean precisos y confiables.

    Separador

    .row
      .col-lg(data-aos="fade-right")
        
        .titulo-segundo(data-aos="flip-up")
          h2#t_3_3 3.3 Almacenamiento y organización de datos: herramientas y técnicas

        p El almacenamiento adecuado de datos asegura su accesibilidad, seguridad y uso eficiente a lo largo del tiempo. En la agricultura, donde se generan grandes volúmenes de información de manera continua, es fundamental contar con sistemas de almacenamiento robustos y organizados.

        .p-4.mt-4(style="background-color:#F3F0EA")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/12.svg")
            .col-md(style="place-self:center;")
              p.mb-0 La elección del sistema de almacenamiento ya sea local o en la nube, depende de varios factores, como la escalabilidad, el costo y los requisitos de seguridad. Una buena organización facilita la integración de datos de múltiples fuentes y su uso eficiente en análisis posteriores.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/13.png")

    .cont_2_4.pt-5
      .cont_decorativo.mb-4(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Aspectos clave
      
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/14.png")
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Bases de datos relacionales")
              p Herramientas como MySQL y PostgreSQL para gestionar datos estructurados.
            .row.col-xl-11.m-auto(titulo="Almacenamiento en la nube")
              p Soluciones escalables como Google Cloud, AWS y Azure.
            .row.col-xl-11.m-auto(titulo="Sistemas híbridos")
              p Combinan almacenamiento local y en la nube para maximizar eficiencia y seguridad.
          p.mb-0 La organización adecuada permite una recuperación rápida y un análisis más efectivo de los datos almacenados.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_4 3.4 Análisis y visualización: Representación gráfica y dashboards
    
    p(data-aos="fade-right") El análisis y la visualización de datos son etapas donde la información bruta se transforma en conocimiento útil. En la agricultura, estas etapas son cruciales para identificar patrones, prever problemas y tomar decisiones basadas en datos.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .p-4.h-100(style="background-color:#E3F0D4;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema3/15.svg")
            .col-md
              p.mb-0 Las herramientas de visualización, como dashboards interactivos, facilitan la comprensión de datos complejos y permiten monitorear múltiples variables en tiempo real. Esto es especialmente útil para gestionar grandes extensiones de tierra, donde el monitoreo manual sería impráctico y costoso.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/16.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Aspectos clave

    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/17.png")
      .col-lg(data-aos="fade-left")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Análisis descriptivo y predictivo")
            p Uso de modelos estadísticos para identificar tendencias y prever resultados.
          .row.col-xl-11.m-auto(titulo="Dashboards interactivos")
            p Herramientas como Tableau y Power BI para representar datos de manera visual y dinámica.
          .row.col-xl-11.m-auto(titulo="Librerías de visualización en Python")
            p Matplotlib, Seaborn y Plotly para crear gráficos personalizados.
        p.mb-0 La capacidad de analizar y visualizar datos efectivamente es esencial para la toma de decisiones informadas en la gestión agrícola.
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 2.
      span Resumen ciclo de vida de las datos agrícolas.
    .p-3.p-lg-4.pt-xl-5.pb-xl-5(style="background-color:#EAEFF4;")
      figure(data-aos="fade-up")
        img(src="@/assets/curso/tema3/18.svg" alt="La Figura 2 se denomina « Resumen ciclo de vida de las datos agrícolas». El mapa conceptual. Presenta un mapa conceptual que se divide en tres áreas principales: la definición del ciclo de vida de los datos con sus etapas desde la generación hasta la aplicación, la importancia del ciclo en la agricultura (que incluye la precisión de la información, accesibilidad y uso para decisiones), y los beneficios del manejo eficiente que comprende la optimización de recursos, sostenibilidad de cultivos y capacidad de respuesta a cambios. Para acceder al diagrama: https://www.mindomo.com/mindmap/42ed64a4c85045c3be91833eecb39717")
    figcaption.mt-2.fw-normal Fuente: OIT, 2024.


                                                                                                    
</template>

<script>
export default {
  name: 'Tema3',
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
