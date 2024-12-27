<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-7
            .p-4.bg-10.mb-5
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src='@/assets/curso/intro/1.svg', style='max-width: 90px').mx-auto
                .col-lg
                  p.mb-0 Bienvenidos a esta segunda unidad de la asignatura Diversidad e inclusión, en la cual se abordan algunos aspectos relevantes de la diversidad cultural, así como también de otros asuntos relacionados con la discriminación y la exclusión.
            p.mb-4 En esta unidad, se busca que el estudiante analice la diversidad cultural y la social. También analizaremos los desafíos que surgen de la discriminación, la exclusión y los estereotipos, y cómo estos afectan a diferentes grupos.
            p.mb-0.fw-bold Para alcanzar este objetivo, está unidad se ha dividido en tres grandes subtemas que son:

          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/intro/2.png', alt='')
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/3.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Diversidad cultural y sus expresiones
                p.mb-0.text-center En este subtema, se estudiarán los orígenes y la evolución, las expresiones de esta diversidad, y la diversidad cultural en educación.
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/4.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Discriminación, exclusión y estereotipos
                p.mb-0.text-center En este subtema, se definen los tres conceptos, así como sus manifestaciones y los prejuicios.
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/5.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Estrategias para promover la inclusión cultural en la educación y el trabajo
                p.mb-0.text-center En este subtema, además de conceptualizar la inclusión, se plantean estrategias para implementar este proceso en contextos escolares y laborales.
    .bg-full-width.bg-1.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/intro/6.svg', alt='')
          .col-lg-6.p-cus-full
            p.mb-4 A lo largo de esta unidad, los invitamos a desarrollar una comprensión profunda de estos temas y a reflexionar sobre el contenido y los recursos de apoyo que se les han compartido. El objetivo es que el estudiante adquiera un mayor conocimiento y habilidades para promover la inclusión cultural en sus entornos educativos y laborales. Este proceso de formación no solo enriquecerá su perspectiva profesional, sino que también contribuirá a la construcción de una sociedad más justa y equitativa.
            .bg-11.p-4
              p.mb-0.fw-bold ¡Vamos a comenzar este viaje de aprendizaje y reflexión, juntos!

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
