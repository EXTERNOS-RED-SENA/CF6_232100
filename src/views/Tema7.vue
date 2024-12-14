<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Ética y sostenibilidad en la gestión de datos agrícolas

    .row(data-aos="fade-up")
      .col-lg.pe-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#F3F0EA;")
          p.mb-0 La implementación de tecnologías avanzadas en la agricultura no solo transforma la manera en que se producen los alimentos, sino que también plantea nuevos desafíos éticos y ambientales. La gestión de datos agrícolas, a través de sensores, plataformas y sistemas de análisis, requiere una consideración cuidadosa de la privacidad, la seguridad y el impacto ambiental.
      .col-lg-auto.ps-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema7/1.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_7_1 7.1 Privacidad y seguridad en la recolección y almacenamiento de datos

    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema7/2.png")
      .col-lg(data-aos="fade-left")
        p La privacidad y seguridad de los datos son aspectos críticos en la gestión de información agrícola. Con la proliferación de dispositivos IoT y sistemas en la nube, se recopilan grandes volúmenes de datos que incluyen información sobre el rendimiento del cultivo, las condiciones del suelo y las prácticas de manejo. Si no se gestionan adecuadamente, estos datos pueden ser vulnerables a accesos no autorizados, uso indebido o incluso robos de información.
        .p-4.mt-4(style="background-color:#D7E1EB;")
          p.mb-0 Además, la recolección y uso de datos deben cumplir con regulaciones locales e internacionales sobre privacidad, garantizando que los datos sean utilizados de manera ética y transparente. La confianza en el manejo de la información es crucial para fomentar la adopción de tecnologías avanzadas en el sector agrícola.
    
    .cont_2_4.pt-5
      .cont_decorativo.mb-4(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Consideraciones críticas
      
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema7/3.svg" style="max-width:88px;")
            h5 Protección de datos sensibles 
            p.mt-4 Garantizar que la información recopilada se almacene y utilice de manera segura.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema7/3.svg" style="max-width:88px;")
            h5 Cifrado y seguridad en la nube
            p.mt-4 Implementación de tecnologías que protejan los datos durante su transmisión y almacenamiento.
        .col-lg.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_2_2(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema7/3.svg" style="max-width:88px;")
            h5 Regulaciones de privacidad 
            p.mt-4 Cumplimiento de normativas como el GDPR o equivalentes locales, que establecen derechos sobre la protección de datos.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_7_2 7.2 Uso responsable de los datos para la sostenibilidad agrícola
    
    p(data-aos="fade-right") El manejo de datos en la agricultura tiene un impacto directo en la sostenibilidad de los sistemas productivos. A través del análisis y la optimización basados en datos, los agricultores pueden reducir el uso de insumos como agua, fertilizantes y pesticidas, minimizando el impacto ambiental. Sin embargo, para que estas prácticas sean realmente sostenibles, es fundamental adoptar un enfoque responsable en la gestión de los datos.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E3F0D4;border:2px #3BA935 dashed;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema7/4.svg")
            .col-md
              p.mb-0 El uso responsable de los datos no solo mejora la eficiencia operativa, sino que también contribuye a la conservación de los recursos naturales y a la mitigación del cambio climático. Esto requiere una planificación cuidadosa para evitar el desperdicio y garantizar que los datos se utilicen para apoyar objetivos de sostenibilidad a largo plazo.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7/5.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Prácticas sostenibles
    
    .row
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema7/6.png")
      .col-lg-8(data-aos="fade-left")
        .p-3.p-lg-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#01B9D1;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span Optimización de insumos: uso de datos para aplicar recursos de manera precisa y eficiente.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span Reducción de residuos: identificación de áreas de mejora para minimizar el desperdicio.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span Monitoreo del impacto ambiental: uso de datos para evaluar y mitigar los efectos de las prácticas agrícolas sobre el ecosistema.

      
                                                                                                    
</template>

<script>
export default {
  name: 'Tema7',
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
