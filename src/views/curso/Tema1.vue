<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Diversidad cultural y sus expresiones'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/1.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 En esta unidad, estaremos explorando la diversidad cultural y sus expresiones, también veremos los términos de discriminación, exclusión y estereotipos, para finalizar con estrategia para promover la inclusión cultural en la educación y el trabajo.
        .bg-1.p-4.mb-4
          p.mb-0 Recordemos que, la diversidad cultural es un concepto que engloba la riqueza de formas de vida, creencias, costumbres, lenguas, tradiciones y formas de organización social que existen en el mundo. La diversidad cultural es una realidad compleja que abarca un amplio abanico de expresiones humanas, desde lenguas y creencias hasta costumbres y artes. 
        p.mb-0 Esta diversidad no solo enriquece nuestra experiencia como humanidad, sino que también plantea desafíos y oportunidades, en un mundo cada vez más globalizado.

    .p-4.bg-3.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/2.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Es por eso, que consideramos importante, en este tema, hacer un breve recorrido por la historia de la diversidad cultural y luego continuar con sus expresiones. La historia de la diversidad cultural es tan antigua como la humanidad misma. A lo largo de los siglos, las culturas han interactuado, se han influenciado mutuamente y han evolucionado de formas complejas y fascinantes.

    #t_1_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.1] Orígenes y evolución

    p.mb-4.fw-bold(data-aos="fade-up") Para conocer sobre los orígenes y evolución, lo invitamos a recorrer la siguiente línea de tiempo.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-7
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="Antiguo Egipto") Aportaba una rica diversidad cultural con diferentes grupos étnicos, lenguas y religiones, conviviendo en un mismo territorio. Wilkinson (2010), en su libro "El ascenso y la caída del antiguo Egipto", menciona la diversidad de poblaciones y etnias en el Antiguo Egipto, destacando la presencia de diferentes grupos que contribuyeron a la cultura egipcia, a lo largo de los siglos y describe cómo las interacciones con otras civilizaciones, como las nubias, los libios y los asiáticos, formaron una compleja red de relaciones culturales.
          div(numero="2" titulo="Grecia y Roma") Estas civilizaciones clásicas, establecieron imperios que extendieron su influencia sobre vastas regiones, dando lugar a un intercambio cultural sin precedentes. Gibbon (1987), expresa que, este periodo de intercambio cultural, es conocido como la época helenística y la época romana temprana, que abarca aproximadamente desde el siglo III a. C. hasta el siglo I a. C. Durante este lapso de tiempo, Roma adoptó y adaptó muchos aspectos de la cultura griega, incluyendo el arte, la arquitectura, la filosofía y la religión.
          div(numero="3" titulo="Asia") Cotterell (2000), dice que civilizaciones como la china, la india y la persa, desarrollaron culturas altamente sofisticadas y diversas, con ricas tradiciones filosóficas, religiosas y artísticas.
          div(numero="4" titulo="América Precolombina")
            p.mb-4 Antes de los europeos, América era un continente vibrante y diverso, habitado por cientos de pueblos indígenas con culturas únicas y adaptadas a sus respectivos entornos. Martínez (2002), expresa: "tenemos a los mayas, aztecas y olmecas que son algunos de los pueblos indígenas más conocidos. Ellos desarrollaron avanzadas técnicas agrícolas, sistemas de escritura y calendarios complejos. Su arquitectura monumental, como las pirámides de Teotihuacán y Chichén Itzá, y las tradiciones religiosas y artísticas, reflejan una rica diversidad cultural".
            p.mb-0 Están también los incas, que crearon un vasto imperio con una red de caminos y una administración eficiente, la ingeniería avanzada, como las terrazas agrícolas y los sistemas de riego, y la cerámica y textiles elaborados, son testimonio de su sofisticación cultural. Martínez (2002), en su obra "Los pueblos indígenas de América", ofrece esta visión detallada de las culturas precolombinas y su desarrollo.
          div(numero="5" titulo="Colonialismo") Se remonta a la expansión europea, a partir del siglo XV, la cual dio lugar a un proceso de colonización que tuvo un profundo impacto en la diversidad cultural, imponiendo lenguas, religiones y costumbres europeas, en muchas partes del mundo.
          div(numero="6" titulo="Modernidad") Llega con La Revolución Industrial y la globalización económica; estas aceleraron los procesos de intercambio cultural, pero también llevaron a una homogeneización de las culturas y a la pérdida de muchas tradiciones locales.
          div(numero="7" titulo="Posmodernidad") En las últimas décadas, ha surgido una mayor conciencia sobre la importancia de la diversidad cultural y se han desarrollado movimientos sociales que buscan proteger y promover las culturas minoritarias.
          div(numero="8" titulo="Actualidad") Entender la diversidad cultural y sus manifestaciones, resulta clave para diferentes contextos; en nuestro caso, en la formación pedagógica, nos proporciona herramientas fundamentales para la creación de entornos inclusivos, respetuosos y enriquecedores para todos los individuos, sin importar su origen cultural.

      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/3.png', alt='')
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .p-4.bg-2.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/5.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Con todo lo anterior podemos ver que, a lo largo de la historia, las sociedades humanas se han configurado de manera compleja, dando lugar a una amplia gama de expresiones culturales, que se manifiestan en todos los ámbitos de la vida social.
        p.mb-0 En este punto, profundicemos un poco más en nuestra diversidad cultural y para ello visualicemos este video que nos relata la historia de algunos de los platillos que representan la diversidad cultural del territorio colombiano:

      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/4.png', alt='')


    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="fade-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-12.mb-0
            .py-0.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-video.svg", style="width: 60px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-0.mb-sm-0
                      h3.mb-1 Los saberes de la gente del río: cocineros 
                      p.mb-0 Antes de abordar Los saberes de la gente del río: cocineros | El río: territorios posibles , lo invitamos a ver el siguiente video.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href='https://www.youtube.com/watch?v=rIZUjbN88Ss' target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    .bg-full-width.bg-fondo-2.mb-0(data-aos="fade-up")
      .p-5
        #t_1_2.titulo-segundo
          h2 #[span 1.2] Diversidad cultural: expresiones culturales 

        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-8
            .bg-3.p-4
              p.mb-0 Luego de esta breve mirada histórica, retomemos el concepto de diversidad cultural para observar sus expresiones. La diversidad cultural se refiere a la coexistencia de diferentes culturas, tradiciones, lenguas, creencias y modos de vida, dentro de una misma sociedad o región. Este concepto está estrechamente ligado al respeto y la valoración de las diferencias entre los individuos, lo que a su vez contribuye al desarrollo de una convivencia pacífica y enriquecedora en entornos plurales.
            p.mt-3.fw-bold A nivel global, la diversidad cultural se puede observar a través de las siguientes expresiones:
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/6.png', alt='')

    .bg-full-width.bg-10.mb-5(data-aos="fade-up")
      .px-4.py-0
        .row.justify-content-center.align-items-center
          .col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t1/7.svg', alt='')
          .col-lg-6.p-cus-full
            p.mb-4.fw-bold Lengua y comunicación. 
            p.mb-0 Las lenguas son uno de los principales vehículos de expresión cultural. Pozzo (2011), expresa que cada idioma lleva consigo una visión del mundo particular y una forma única de conceptualizar la realidad. La diversidad lingüística es, por tanto, uno de los elementos más destacados de la diversidad cultural.

    p.mb-0(data-aos="fade-up") #[b Por ejemplo,] en Colombia, se hablan numerosas lenguas que reflejan la rica diversidad cultural del país. Aquí tenemos algunos ejemplos de lenguas indígenas y otras lenguas:
    .bg-full-width.bg-fondo-1.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        .row.justify-content-center.mb-0
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/9.svg' alt='Icono Wayuunaiki')
                  h4.text-center Wayuunaiki
                  p.text-center Hablada por el pueblo Wayúu en La Guajira.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/10.svg' alt='Icono Nasa Yuwe')
                  h4.text-center Nasa Yuwe
                  p.text-center Hablada por los Nasa en el Cauca.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/11.svg' alt='Icono Emberá')
                  h4.text-center Emberá
                  p.text-center Hablada por los Emberá en el Chocó y otras regiones.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/12.svg' alt='Icono Kogui')
                  h4.text-center Kogui
                  p.text-center Hablada por los Koguis en la Sierra Nevada de Santa Marta.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/13.svg' alt='Icono Ticuna')
                  h4.text-center Ticuna
                  p.text-center Hablada en la región del Amazonas.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/14.svg' alt='Icono Palenquero')
                  h4.text-center Palenquero
                  p.text-center Hablada en San Basilio de Palenque.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/15.svg' alt='Icono Criollo sanandresano')
                  h4.text-center Criollo sanandresano
                  p.text-center Hablada en las Islas de San Andrés y Providencia.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/16.svg' alt='Icono Romani')
                  h4.text-center Romani
                  p.text-center Hablada por la comunidad gitana, en varias ciudades.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/17.svg' alt='Icono Lengua de señas colombiana')
                  h4.text-center Lengua de señas colombiana
                  p.text-center Utilizada por la comunidad sorda, en todo el país.

          .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/t1/8.png')
    .bg-full-width.bg-11.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0 En total, se hablan más de 70 lenguas en Colombia, incluyendo 65 lenguas indígenas.
          
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
          p.mb-3.fw-bold Religión y creencias. 
          p.mb-0 Las diferentes religiones y sistemas de creencias, representan otro pilar fundamental de la diversidad cultural. A través de sus prácticas, símbolos y valores, las religiones crean comunidades que definen y dan sentido a la vida de sus miembros. Martínez (2002), analiza cómo las religiones y creencias de los pueblos indígenas de América, dan forma a sus comunidades y modos de vida. En Colombia, por ejemplo, la diversidad religiosa es amplia y refleja la rica mezcla cultural del país; entre ellas, tenemos: 
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/18.png', alt='')

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/19.png', alt='')
            .col-sm-12.col-lg-7
              h5  Catolicismo
              p La religión predominante en Colombia, con aproximadamente el 70.9 % de la población, identificándose como católica.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/20.png', alt='Imagen de personas estudiando la biblia')
            .col-sm-12.col-lg-7
              h5 Cristianismo Evangélico
              p Incluye diversas corrientes pentecostales y protestantes, representando alrededor del 16.7 % de la población.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/21.png', alt='Imagen de persona orando')
            .col-sm-12.col-lg-7
              h5 Testigos de Jehová
              p Aproximadamente el 2 % de la población, se adhiere a esta religión.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/22.png', alt='Imagen de joven orando')
            .col-sm-12.col-lg-7
              h5 Adventistas del Séptimo Día
              p También representan cerca del 2 % de la población.
 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/23.png', alt='Imagen representativa de religiones indígenas')
            .col-sm-12.col-lg-7
              h5 Religiones indígenas
              p Muchas comunidades indígenas mantienen sus propias creencias y prácticas religiosas, que incluyen la veneración de la naturaleza y los espíritus ancestrales.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/24.png', alt='Imagen de personas orando')
            .col-sm-12.col-lg-7
              h5 Sincretismo religioso
              p En algunas regiones, especialmente en la costa Pacífica, se observa una mezcla de catolicismo con religiones africanas, como la santería y el candomblé.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/25.png', alt='Imagen representativa de mitos y leyendas')
            .col-sm-12.col-lg-7
              h5 Mitos y leyendas
              p Las creencias populares incluyen mitos indígenas y leyendas coloniales, como la Virgen de Chiquinquirá, patrona de Colombia.
              
   
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        p.mb-4.fw-bold Tradiciones y costumbres. 
        p.mb-0 Las costumbres y tradiciones se refieren a los comportamientos, rituales, festividades y prácticas cotidianas, que se transmiten de generación en generación. Entre estas se encuentran el arte, la música, la danza, la pintura, la literatura y otras formas de expresar la cultura. A través de ellas, las sociedades comunican sus valores, historias y aspiraciones. Estas tradiciones constituyen la identidad cultural de un pueblo, por ejemplo:
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/29.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/30.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario.large
          div(numero='1' titulo='Pueblo indígena') Con respecto al pueblo indígena, el autor Patiño (2000), explora cómo las comunidades indígenas han mantenido sus tradiciones y costumbres a lo largo del tiempo, a pesar de los desafíos históricos y contemporáneos. Destaca la importancia de los rituales, festividades y prácticas cotidianas, en la preservación de la identidad cultural de estos pueblos. Resalta cómo las tradiciones, como los tejidos, y las artesanías, cómo las mochilas arahuacas y las ceremonias agrícolas, no solo son prácticas culturales, sino también formas de resistencia y afirmación de la identidad indígena.
          div(numero='2' titulo='Palenqueros') En nuestro territorio, se encuentran los palenqueros, Zapata (1963). En el ámbito de sus festividades, se tiene el "Lumbalú" un ritual fúnebre que celebra la vida del difunto, con cantos y danzas; es una forma de mantener viva la conexión con los ancestros y de expresar el dolor y la esperanza de la comunidad. Otra de sus prácticas culturales es la cocina, rica y variada, con platos como el arroz con coco, el pescado frito y los dulces de frutas. Estas recetas se transmiten de generación en generación y son una parte importante de la identidad cultural.
          div(numero='3' titulo='Afrodescendiente') Escalante (2005), sostiene que, la elaboración de artesanías y manualidades, como las máscaras y los tejidos, es una práctica común que refleja la herencia africana y la creatividad de las comunidades afrodescendientes; también la música y la danza, son elementos centrales de su cultura, pues los ritmos de tambor y los bailes tradicionales, como el mapalé, la cumbia y el currulao, son formas de preservar y transmitir la herencia africana.         

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .p-4.bg-3.mb-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/31.svg', style='max-width: 90px').mx-auto
            .col-lg
              h4 Organización social y política. 
              p.mb-0 Cada cultura tiene formas únicas de organizarse social y políticamente, reflejando sus tradiciones y valores. Por ejemplo, las estructuras familiares que pueden variar desde familias nucleares, hasta familias extendidas. Gutiérrez (2018), expresa que, en muchas culturas indígenas de América Latina, las familias extendidas son comunes y juegan un papel importante en la conexión social y la transmisión de conocimientos. 
        p.mb-0.fw-bold Conozcamos algunas de estas organizaciones:
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/32.png', alt='')


    .bg-full-width.bg-fondo-slider.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/33.png', alt='Imagen representativa de roles de género')
            .col-sm-12.col-lg-7
              h5 Roles de género
              p Estos roles varían significativamente. En algunas culturas, los roles son más rígidos y definidos, mientras que, en otras, hay una mayor flexibilidad y equidad de género. Por ejemplo, en muchas comunidades indígenas, las mujeres tienen roles importantes en la agricultura y la toma de decisiones comunitarias.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/34.png', alt='Imagen representativa de jerarquías sociales')
            .col-sm-12.col-lg-7
              h5 Jerarquías sociales
              p Estas pueden estar basadas en la edad, el género, la riqueza, el conocimiento o la posición, dentro de la comunidad. En algunas culturas, los ancianos son altamente respetados y tienen un papel central en la toma de decisiones.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/35.png', alt='Imagen representativa de sistemas de gobierno')
            .col-sm-12.col-lg-7
              h5 Sistemas de gobierno
              p Estos pueden variar desde monarquías y jefaturas, hasta democracias participativas. En muchas comunidades indígenas, las decisiones se toman a través de consejos comunitarios y asambleas, donde se busca el consenso.


    .bg-full-width.bg-1.mb-5(data-aos="fade-up")
      .px-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            p.mb-0 En síntesis, las expresiones culturales son manifestaciones únicas y diversas de la identidad de un grupo o comunidad, reflejando sus valores, creencias, tradiciones y experiencias. Estas expresiones, que pueden incluir el arte, la música, la danza, la gastronomía y las festividades, no solo enriquecen la vida de quienes las practican, sino que también fomentan el entendimiento y el respeto mutuo entre diferentes culturas. Al celebrar y preservar estas expresiones, promovemos una sociedad más inclusiva y consciente, de la riqueza que la diversidad cultural aporta al mundo.
          .col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t1/26.svg', alt='')
    #t_1_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.3] La diversidad cultural en la educación
    p.mb-4(data-aos="fade-up") La diversidad cultural en la educación es un tema fundamental en la pedagogía actual, ya que permite reconocer y valorar las diferencias culturales de los estudiantes, promoviendo un aprendizaje inclusivo y respetuoso.
    .bg-full-width.bg-10.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t1/27.png', alt='')
          .col-lg-7
             h2.mb-4 La diversidad cultural en la educación
             p.mb-4 En el PDF La diversidad cultural en la educación, se abordan conceptos clave y enfoques teóricos como la educación intercultural, multicultural y global, que ofrecen herramientas para integrar la diversidad en las aulas. A través de análisis y ejemplos prácticos, se exploran estrategias que ayudan a los educadores a construir ambientes colaborativos, fomentar el respeto mutuo y desarrollar competencias interculturales en sus estudiantes. Este enfoque busca preparar a ciudadanos globales, empáticos y comprometidos con la equidad, en un mundo cada vez más interconectado y plural.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/diversidad_cultural_educacion.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> La diversidad cultural en la educación
    .bg-full-width.bg-6.mb-5(data-aos="fade-up")
      .p-4.bg-color-5.mb-0
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t1/28.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 La diversidad cultural es un fenómeno que no solo forma parte de la riqueza de la humanidad, sino que también es un componente esencial de los procesos educativos. En Colombia, la pluralidad cultural debe ser entendida como una oportunidad para fortalecer la educación, promoviendo el respeto, la inclusión y la equidad. La diversidad cultural, cuando es adecuadamente valorada y comprendida, puede convertirse en una herramienta pedagógica poderosa que prepara a los estudiantes para vivir y aprender en un mundo cada vez más globalizado y plural.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elplacerdelalectura.com/wp-content/uploads/2020/02/el_diario_de_ana_frank.pdf' target='_blank' rel='noopener noreferrer') El placer de la lectura. (s.f.). El Diario de Ana Frank.
            
            
            p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
                a(href='https://www.radionacional.co/cultura/tradiciones/dia-de-la-diversidad-etnica-y-cultural-en-colombia-grupos-etnicos-choco' target='_blank' rel='noopener noreferrer') Hernández, J. L. M. (2023). La diversidad cultural en Colombia, una hermosa realidad (Blog). Radio Nacional de Colombia.

            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.deepl.com/' target='_blank' rel='noopener noreferrer') DeepL.

            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/rIZUjbN88Ss?si=9Gn75D5Olc-Sf-qf' target='_blank' rel='noopener noreferrer') Banrepcultural. (2021). Los saberes de la gente del río: cocineros | El río: territorios posibles.
            
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
