<template>
  <q-page class="">
      <carosello2 class="col-12"/>

<div class="row justify-center">
    <q-card class="col-md-6 col-xs-12 q-pt-lg" flat>
      <q-card-section class="q-pt-md">
        <p>
          Se siete in cerca di un sito per il matrimonio in cui scorrono foto degli sposi belli e abbronzati mentre si scambiano sguardi intensi al tramonto, in cui i due innamorati vi rendono partecipi di tutti i preparativi - dalla
          scelta
          del confetto in pregiatissimo cacao delle sponde del fiume Ulùa, alle tovaglie in seta prodotta dai bachi di Matsugaoka – oppure postano un loro identikit in cui sentono l’impellente esigenza di condividere con voi l’ascendente
          zodiacale o la passione per il kitesurf… bene, in questo caso, o avete sbagliato matrimonio o siete stati reindirizzati per errore a questo sito web.
        </p>

        <div class="row justify-center">
          <q-img src="gif_1.gif" class="col-xs-11 col-lg-4 col-md-4"/>
        </div>

        <p>
          <br/>
          Sì, perché per due come noi, che non aggiornano i profili Facebook dalla festa di laurea o addirittura (come nel caso della sposa) non sono ancora approdati su Instagram, lanciarsi sul web con questo sito è stata un vero e
          proprio
          atto di coraggio!
          <br/>
          Però sappiamo anche che questo è il modo più efficace per aiutare tutti i nostri invitati a partecipare e godersi a pieno questo giorno tanto importante per noi.
          <br/>
          Perciò, se, ad esempio, non sapete ancora come arrivare al luogo del matrimonio (
          <router-link to="rsvp">Come arrivare</router-link>
          ),
          o vorreste farci un regalo ma non avete ancora avuto
          l’ispirazione (
          <router-link to="listanozze">Fai volare lo sposo!</router-link>
          ), questo è il
          sito che fa proprio al caso vostro.

          <br/>
          <br/>
          Che aspettate allora? Correte a leggere tutte le info, noi vi aspettiamo!
          <br/>
          <br/>
        </p>
        <p class="text-right">Daniele e Ilaria</p>
      </q-card-section>
    </q-card>
</div>
  </q-page>
</template>

<script>
import Carosello2 from "components/slideshow2";

export default {
  name: "Dettagli",
  components: {Carosello2},
  data() {
    return {
      linkImg: "https://source.unsplash.com/featured",
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style>

</style>
