<template lang="pug">
.curso-main-container.glosario
  BannerInterno(icono="fas fa-atlas" titulo="Glosario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .glosario__letra-item.mb-2(v-for="letra in orderedData" :key="'letra-'+letra.letra")
      .glosario__letra-item__letra.me-4
        .glosario__letra-item__letra__icono
          span {{letra.letra}}
      .glosario__letra-item__texto
        p.mb-3(v-for="termino in letra.terminos")
          strong
            i.lista-ul__vineta
          strong(v-html="termino.terminoHtml || termino.termino") 
          strong : 
          span(v-html="termino.significado")
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Actuador',
          significado:
            'Dispositivo que recibe señales de control y realiza una acción física, como abrir una válvula o activar un motor, en función de los datos recibidos de un sistema IoT.',
        },
        {
          termino: 'Agricultura de Precisión',
          significado:
            'Técnica de gestión agrícola que utiliza datos detallados para optimizar el uso de insumos y mejorar el rendimiento y sostenibilidad del sistema productivo.',
        },
        {
          termino: 'AWS IoT',
          significado:
            'Plataforma de Amazon Web Services para gestionar y analizar dispositivos IoT a escala industrial, con capacidades avanzadas de <em>Machine Learning</em> e inteligencia artificial.',
        },
        {
          termino: '<em>Big Data</em>',
          significado:
            'Manejo y análisis de grandes volúmenes de datos, caracterizados por su volumen, velocidad y variedad, utilizados en la agricultura para identificar patrones y tendencias.',
        },
        {
          termino: 'Ciencia de Datos',
          significado:
            'Disciplina que combina estadística, informática y conocimiento del dominio para analizar grandes volúmenes de datos y extraer información valiosa para la toma de decisiones.',
        },
        {
          termino: '<em>Dashboards</em>',
          significado:
            'Interfaces visuales interactivas que muestran datos clave en tiempo real, facilitando el monitoreo y análisis de sistemas productivos agrícolas.',
        },
        {
          termino: 'Ética en la Gestión de Datos',
          significado:
            'Principios y normas que guían el uso responsable y transparente de los datos, respetando la privacidad y los derechos de los productores.',
        },
        {
          termino: 'Internet de las Cosas (IoT)',
          significado:
            'Conjunto de dispositivos físicos conectados a Internet, que recopilan, comparten y analizan datos para automatizar procesos y facilitar la toma de decisiones en tiempo real.',
        },
        {
          termino: 'LoRaWAN',
          significado:
            'Protocolo de comunicación de largo alcance y bajo consumo de energía, ideal para conectar dispositivos IoT en áreas extensas, como campos agrícolas.',
        },
        {
          termino: '<em>Machine Learning</em>',
          significado:
            'Rama de la inteligencia artificial que permite a las máquinas aprender y mejorar sus predicciones basándose en datos históricos y en tiempo real.',
        },
        {
          termino: 'Microcontrolador (MCU)',
          significado:
            'Circuito integrado que funciona como el cerebro de un sistema IoT, procesando los datos de los sensores y transmitiéndolos a plataformas en la nube. Ejemplos: ESP32, ESP8266.',
        },
        {
          termino: 'Modelos Predictivos',
          significado:
            'Algoritmos que utilizan datos históricos y actuales para prever resultados futuros, como el rendimiento de cultivos o la aparición de plagas.',
        },
        {
          termino: 'Monitoreo Agrícola',
          significado:
            'Proceso de supervisión y recopilación de datos en tiempo real sobre las condiciones del cultivo, suelo y clima, utilizando tecnologías avanzadas como sensores y drones.',
        },
        {
          termino: 'Plataforma en la Nube',
          significado:
            'Entorno digital en línea donde se almacenan, procesan y visualizan los datos de los dispositivos IoT, permitiendo el acceso y gestión remota del sistema.',
        },
        {
          termino: 'Riego Inteligente',
          significado:
            'Sistema automatizado de riego que utiliza sensores y algoritmos para ajustar la cantidad y frecuencia del agua aplicada, optimizando el uso del recurso hídric.',
        },
        {
          termino: 'Seguridad de Datos',
          significado:
            'Prácticas y tecnologías que garantizan la protección de datos agrícolas contra accesos no autorizados, robos o manipulaciones.',
        },
        {
          termino: 'Sensor',
          significado:
            'Dispositivo que detecta y mide variables físicas como temperatura, humedad, presión, y las convierte en datos digitales para su procesamiento y análisis en sistemas IoT.',
        },
        {
          termino: 'Sensores IoT',
          significado:
            'Dispositivos conectados a internet que recopilan y transmiten datos en tiempo real, utilizados en la agricultura para medir variables como humedad, temperatura y pH.',
        },
        {
          termino: 'Simulador Agrícola',
          significado:
            'Herramienta virtual que permite modelar escenarios agrícolas para analizar y prever el comportamiento de sistemas productivos bajo diferentes condiciones.',
        },
        {
          termino: 'Sostenibilidad Agrícola',
          significado:
            'Práctica de gestión que busca equilibrar la productividad agrícola con la conservación del medio ambiente y el uso eficiente de recursos.',
        },
        {
          termino: 'ThingSpeak',
          significado:
            'Plataforma en la nube popular para proyectos IoT pequeños, que permite almacenar y visualizar datos de sensores en tiempo real, y configurar alertas automáticas.',
        },
        {
          termino: 'Variables Agrícolas',
          significado:
            'Factores medibles que afectan la producción agrícola, como la humedad del suelo, temperatura, nutrientes y plagas.',
        },
        {
          termino: 'Visualización de Datos',
          significado:
            'Representación gráfica de la información, utilizando gráficos, mapas y <em>dashboards</em> para facilitar la interpretación y toma de decisiones basadas en datos.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
