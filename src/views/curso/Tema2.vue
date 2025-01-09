<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Discriminación, exclusión y estereotipos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-3 Vamos a trabajar los conceptos de discriminación, exclusión y estereotipos. Cada uno de ellos están interconectados y en el desarrollo del tema, se podrá ir tejiendo esta relación, a partir de reflexiones. Para dar inicio a este importante tema, empezaremos por conocer algo de la historia de la discriminación, significado e influencia.
            p.mb-0 Los invitamos a leer el siguiente apartado sobre una historia real de discriminación y exclusión que llevo a sus protagonistas hasta la muerte.


    h2.mb-3(data-aos="fade-up") Historia de Ana Frank
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-7
          p.mb-4 Ana Frank nació el 12 de junio de 1929 en Frankfurt, Alemania. Cuando los nazis llegaron al poder, su familia, de origen judío, se trasladó a Ámsterdam para escapar de la persecución. Sin embargo, en 1940, los nazis invadieron los Países Bajos y comenzaron a imponer leyes antijudías. En 1942, la familia Frank se escondió en un anexo secreto detrás de la empresa de Otto Frank, el padre de Ana. Permanecieron ocultos durante dos años, hasta que fueron descubiertos y deportados a campos de concentración. Ana murió de tifo en el campo de Bergen-Belsen, en 1945.
          p.mb-0.fw-bold En su diario, Ana Frank describe las restricciones y la discriminación que enfrentaron los judíos, bajo el régimen nazi:
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/2.png', alt='')

    .bg-full-width.bg-1.mb-0(data-aos="fade-up")
      .px-5
        .row.justify-content-center.align-items-center
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/3.svg', alt='')
          .col-sm-12.col-lg-7
              p.mb-0 "Las medidas antijudías se sucedieron rápidamente y se nos privó de muchas libertades. Los judíos deben llevar una estrella de David; deben entregar sus bicicletas; no les está permitido viajar en tranvía; no les está permitido viajar en coche, tampoco en coches particulares; los judíos solo pueden hacer las compras desde las tres hasta las cinco de la tarde; solo pueden ir a una peluquería judía; no pueden salir a la calle desde las ocho de la noche, hasta las seis de la madrugada (…). Nadie escapa a esta suerte, a no ser que se esconda. […] No respetan a nadie: ancianos, niños, bebés, mujeres embarazadas, enfermos, todos sin excepción, marchan camino de la muerte”. 
    .bg-full-width.bg-11.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Después de haber leído el anterior fragmento, ¿qué podría decir sobre la discriminación?
    #t_2_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.1] ¿Qué es la discriminación?
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .bg-3.p-4.mb-4
          p.mb-0 La palabra "discriminación" tiene sus raíces en el latín. Proviene del término "discriminatio", que significa "separación" o "distinción". El verbo "discriminare" se utilizaba para referirse a la acción de separar o distinguir entre diferentes elementos. Con el tiempo, el término adquirió un significado más específico y negativo, refiriéndose a la exclusión injusta de personas o grupos, por razones religiosas, sociales, étnicas o económicas. Históricamente, la discriminación ha sido una herramienta de control y dominación, utilizada para justificar la desigualdad y la opresión de ciertos grupos.
        p.mb-0 En la actualidad, para Montes (2023), la discriminación se entiende como cualquier trato desigual e injusto hacia una persona o grupo, basado en características como raza, género, orientación sexual, discapacidad, entre otras. Este concepto ha evolucionado para incluir no solo la exclusión, sino también la negación de derechos y oportunidades. 
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/4.png', alt='')


    .bg-full-width.bg-fondo-3.mb-0(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/5.svg', alt='')
          .col-sm-12.col-lg-8
            .p-4.bg-6.mb-5
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src='@/assets/curso/t2/6.svg', style='max-width: 90px').mx-auto 
                .col-lg
                  p.mb-0 #[b La discriminación] es un problema global que marca la vida de millones de personas, al continuar con las desigualdades y limitar las oportunidades; no se puede avanzar hacia sociedades justas y equitativas.
            p.mb-0 Por ende, comprender sus raíces es el primer paso para construir un futuro donde todos tengamos las mismas posibilidades; para lograrlo, es necesario conocer cuáles son esos tipos de discriminación que existen.
       
        #t_2_2.titulo-segundo(data-aos="fade-up")
          h2 #[span 2.2] Tipos de discriminación
        p.mb-0.fw-bold Podemos encontrar los siguientes tipos de discriminación:

    .bg-7.px-5.py-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.mb-0
        .col-sm-12.col-lg-8
          ImagenInfografica.color-acento-contenido.mb-0
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t2/7.svg', alt='Infografía sobre tipos de discriminación')
            
            .tarjeta.bg-white.p-3(x="3.5%" y="88%" numero="+")
              .h5.mb-2 Discriminación racial o étnica
              p Se basa en la raza o etnia de una persona. Por ejemplo, en Colombia, según la ONU (2023), la discriminación racial afecta principalmente a las comunidades afrocolombianas e indígenas. Un ejemplo es la segregación en el acceso a servicios básicos como la educación y la salud. Las comunidades afrocolombianas, especialmente en zonas rurales, con frecuencia enfrentan barreras significativas para acceder a estos servicios.

            .tarjeta.bg-white.p-3(x="3.5%" y="37%" numero="+")
              .h5.mb-2 Discriminación de género
              p Está relacionada con el género u orientación sexual. En nuestro país, por ejemplo, según el Ministerio de Justicia (2021), las personas LGBTQ+ enfrentan discriminación en diversos ámbitos, incluyendo el laboral y el educativo. Uno de estos casos es la discriminación en el acceso a empleos, donde las personas transgénero enfrentan mayores dificultades para ser contratadas por empresas.

            .tarjeta.bg-white.p-3(x="28.5%" y="4.5%" numero="+")
              .h5.mb-2 Discriminación por edad
              p Va dirigida a niños, niñas y adultos mayores. La discriminación por edad, afecta tanto a los jóvenes como a los adultos mayores. Los jóvenes pueden ser discriminados en el ámbito laboral por falta de experiencia, mientras que los adultos mayores pueden ser excluidos de oportunidades laborales, debido a su edad. Un ejemplo es la dificultad que enfrentan los adultos mayores para encontrar empleo, a pesar de tener la experiencia necesaria.

            .tarjeta.bg-white.p-3(x="73.5%" y="5.5%" numero="+")
              .h5.mb-2 Discriminación por discapacidad
              p Está basada en la clase social o situación económica. La discriminación socioeconómica es un problema grave en las ciudades. Quienes tienen menos recursos, suelen enfrentar barreras para acceder a servicios básicos y oportunidades, siendo tratados de manera injusta. Esto se evidencia en el sistema judicial, donde las personas de bajos recursos reciben un trato desigual, y en lugares públicos que niegan el acceso a quienes no cumplen con ciertos estándares sociales.

            .tarjeta.bg-white.p-3(x="96.5%" y="36.5%" numero="+")
              .h5.mb-2 Discriminación religiosa
              p Se refiere al trato desigual e injusto hacia una persona o grupo, basado en sus creencias religiosas. Esto puede incluir la exclusión, la negación de derechos, la violencia o el hostigamiento, debido a la religión que practican. Según Arellano (2020), en Colombia, un caso notable de discriminación religiosa ocurrió en el departamento del Tolima, donde estudiantes y profesores de diferentes municipios, reportaron situaciones de intolerancia en instituciones educativas.

            .tarjeta.bg-white.p-3(x="96.5%" y="87%" numero="+")
              .h5.mb-2 Discriminación por nacionalidad
              p Se refiere al trato desigual e injusto hacia una persona, basado en su país de origen. Esto puede incluir exclusión social, discriminación laboral, negación de servicios y falta de acceso a derechos y oportunidades. Como bien sabemos, nuestro país alberga personas extranjeras en busca de un mejor futuro; sin embargo, según el Ministerio del Interior (2018), en Colombia, la discriminación por nacionalidad afecta principalmente a migrantes y refugiados, especialmente aquellos provenientes de Venezuela.
    
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/8.png', alt='')
      .col-sm-12.col-lg-8
        .p-4.bg-1.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/9.svg', style='max-width: 90px').mx-auto 
            .col-lg
              p.mb-0 Por ejemplo, en Colombia, las personas de bajos recursos, normalmente son estigmatizadas y tienen menos acceso a oportunidades educativas y laborales. Esto se puede ver reflejado en la exclusión de personas de bajos recursos, de ciertos espacios públicos o privados, como centros comerciales o restaurantes, bajo pretextos como el "derecho de admisión”.
        p.mb-0 Algunos ejemplos incluyen a muchos migrantes venezolanos que enfrentan dificultades para encontrar empleo formal, debido a su nacionalidad. Muchas veces, se les ofrece trabajo en condiciones precarias y con salarios inferiores a los de los colombianos. Según Arellano (2020), lo anterior también se ha visto en algunas comunidades al ser excluidos de actividades sociales y enfrentan actitudes hostiles por parte de los residentes locales, porque en ocasiones, han sido estigmatizados debido a los actos delictivos cometidos por una minoría. 
    .bg-full-width.bg-fondo-4.mb-0(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-8
            p.mb-4 Es fundamental recordar que la mayoría de los migrantes venezolanos vienen a Colombia con la intención de trabajar arduamente y buscar un futuro mejor para sus familias. Es injusto juzgar a todos por las acciones de unos pocos, puesto que muchos contribuyen positivamente a la sociedad y merecen ser tratados con respeto y dignidad.
            .p-4.bg-12.mb-5
              p.mb-0 En conclusión, conocer los diferentes tipos de discriminación, como la racial, de género, por orientación sexual, edad, discapacidad, socioeconómica, religiosa y por nacionalidad, ayuda a identificar y combatir actitudes y prácticas discriminatorias, promoviendo la equidad y la justicia social. Un docente bien preparado puede influir positivamente, en sus estudiantes, fomentando valores de respeto y empatía que contribuyen a una sociedad más justa y unida.
                  
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/10.svg', alt='')
        #t_2_3.titulo-segundo
          h2 #[span 2.3] ¿Qué es la exclusión?
        p.mb-0 Antes de abordar el concepto de exclusión como tal, su historia y características, le invitamos a ver el siguiente cortometraje animado basado en una historia real sobre cómo se puede ver este fenómeno en la vida de una persona.
        
    .bg-full-width.bg-color-white.shadow-soft.mb-0(data-aos="fade-up")
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
                      h3.mb-1 Pastoral Social e Innovación 
                      p.mb-0 Antes de abordar Pastoral Social e Innovación – Madrid. (2020). EXCLUSIÓN , lo invitamos a ver el siguiente video.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/wz8U9YMNEMI?si=Q1oX5egqD1NjgPdU' target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right



    .bg-full-width.bg-13.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Después de reflexionar un poco sobre lo anterior, y con algunas nociones del significado de la palabra “exclusión”, conceptualicemos. 
    .bg-full-width.bg-10.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/11.png', alt='')
          .col-lg-7
             h2.mb-4 ¿Qué es la exclusión?
             p.mb-4 La exclusión social es un fenómeno complejo que limita la participación plena de individuos y grupos en la vida económica, política y social, perpetuando desigualdades estructurales. En el PDF #[b Qué es la exclusión], se exploran los conceptos fundamentales, las teorías de autores destacados como Hilary Silver y Robert Castel, y casos prácticos que ilustran cómo se manifiesta este proceso en diferentes contextos históricos y contemporáneos. Este análisis proporciona herramientas para comprender las causas, dimensiones y efectos de la exclusión, destacando la importancia de políticas inclusivas. A través de ejemplos como la precariedad laboral en Europa y las barreras educativas en zonas rurales de Colombia, se examinan estrategias para enfrentar este desafío global y promover una sociedad más equitativa.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/exclusion.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> ¿Qué es la exclusión?

    #t_2_4.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.4] Manifestaciones de la exclusión
    p.mb-4(data-aos="fade-up") Para conocer sobre esta temática, lo invitamos a ver el siguiente video.
    .bg-full-width.bg-fondo-slider.mb-0(data-aos="fade-up")
      .px-5.py-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/TrPL8croq80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
      .p-4.bg-10.mb-0
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t2/12.svg', style='max-width: 90px').mx-auto         
          .col-lg
            p.mb-0 Si bien hemos profundizado en la exclusión social, debido a su complejidad y su profundo impacto en las personas, es importante recordar que esta es solo una de las muchas formas de exclusión que existen. 

    #t_2_5.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.5] ¿Qué son los estereotipos y los perjuicios? 
    p.mb-4(data-aos="fade-up") A continuación, exploraremos cómo los prejuicios y los estereotipos están profundamente conectados y cómo ambos juegan un papel fundamental en la discriminación y la exclusión social.
    .bg-full-width.bg-10.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 ¿Qué son los estereotipos y los perjuicios? 
             p.mb-4 Los estereotipos y prejuicios son conceptos fundamentales para entender cómo las ideas preconcebidas influyen en nuestras percepciones y comportamientos hacia diferentes grupos sociales. En el PDF #[b Qué son los estereotipos y los prejuicios], se analizan las definiciones, orígenes y efectos de estos fenómenos, así como su relación con la discriminación y la desigualdad. A través de ejemplos prácticos y analogías, se abordan las formas en que estas actitudes impactan las dinámicas sociales y educativas, ofreciendo herramientas para identificar y combatir estos sesgos. Este enfoque busca fomentar una reflexión crítica sobre cómo superar las barreras que limitan la equidad y la inclusión en diversos contextos.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/estereotipos_perjuicios.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> ¿Qué son los estereotipos y los perjuicios? 
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/13.png', alt='')
    .bg-full-width.bg-14.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Teniendo claro lo anterior, continuemos con los roles que, según Montesinos (2016), los estereotipos desempeñan:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/14.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario.large
          div(numero='1' titulo='Función cognitiva') En el aspecto cognitivo, los estereotipos afectan cómo las personas entienden el mundo que les rodea. Por ejemplo, si alguien ha aprendido que los estudiantes de una determinada cultura son muy estudiosos, puede asumir que todos los estudiantes de esa cultura, son así. Estos significados se enseñan en la escuela, en casa y en la comunidad, y pueden volverse tan comunes que las personas los utilizan para interpretar la realidad. Esto es especialmente cierto cuando se trata de culturas diferentes, donde el idioma y las imágenes pueden influir en cómo se perciben.
          div(numero='2' titulo='Función social') Desde un enfoque social, los estereotipos ayudan a que los grupos se mantengan unidos, pero también pueden generar actitudes negativas hacia aquellos que son distintos. Por ejemplo, en un grupo de amigos que comparten el mismo interés, pueden sentir una fuerte conexión entre ellos, pero al mismo tiempo pueden excluir a quienes no comparten ese interés. Esto muestra el lado negativo de los estereotipos, puesto que la protección del grupo puede llevar a rechazar a los que son considerados "diferentes".
          div(numero='3' titulo='Función literaria') En la literatura, los estereotipos son utilizados como herramientas que permiten a los autores conectar con sus lectores. Por ejemplo, un escritor puede describir a un personaje como "el típico chico que siempre llega tarde", y esto ayuda a que el lector entienda rápidamente, el tipo de persona que es, sin necesidad de una explicación larga.

    .bg-full-width.bg-15.mb-5(data-aos="fade-up")
      .px-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-7
              p.mb-0 En todo caso, independientemente de sus funciones los estereotipos son perpetuados a través de los medios de comunicación y la cultura popular, donde ciertos grupos son representados de manera limitada o distorsionada. Esta representación puede influir en la percepción pública y afectar la autoestima de aquellos que son objeto de estos estereotipos, Por lo tanto, es esencial cuestionar y desafiar estos estereotipos, promoviendo una comprensión más real y diversa, de la experiencia humana.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/15.svg', alt='')



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://repository.unilibre.edu.co/bitstream/handle/10901/28316/ARTICULO%20-%20%20ESPECIALIZACION%20UNILIBRE%20-%20%20Racismo%20y%20Discriminacion%20en%20Colombia........%20AVANCE...pdf?sequence=1' target='_blank' rel='noopener noreferrer') Cifuentes, R.D.G. (2023). Racismo y discriminación en Colombia; una forma de exclusión social, laboral, política y económica a poblaciones étnicas.
            
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://psicologiaynente.com/social/tipos-exclusion-social' target='_blank' rel='noopener noreferrer') Hernández, L. M.C. (2020). Los 9 tipos de exclusión social, y cómo afectan a la ciudadanía. pymOrganization.

            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.kaggle.com/' target='_blank' rel='noopener noreferrer') Kaggle.
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/wz8U9YMNEMI?si=Q1oX5egqD1NjgPdU' target='_blank' rel='noopener noreferrer') Pastoral Social e Innovación – Madrid. (2020). EXCLUSIÓN. Ian.
            
            
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
