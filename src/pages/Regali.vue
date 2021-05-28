<template>
  <q-page class="row justify-center">
    <q-img src="mappa.png" style="height: 200px; margin-top: 10px;" :ratio="16/9" :contain="$q.screen.lt.md"/>
    <q-card class="col-md-6 col-xs-12 q-pb-md" flat>

      <q-card-section class="q-pt-md">
        <p class="col-8">
          Avremmo potuto chiedervi di districarvi tra le porcellane di Sèvres e Limoges, o di interrogarvi se fosse meglio il folletto con la nuova impugnatura ergonomica o Roomba, il robot cattura-polvere.
          <br/>
          <br/>
          E invece no! In cima alla nostra lista dei desideri ci sono viaggi avventurosi alla scoperta di mete lontane, tutte da raggiungere, per il piacere dello sposo poco amante del volo, rigorosamente in aereo!

          <br/>
          <br/>
          Perciò, se volete aiutarci a realizzare il nostro sogno ma, soprattutto, se volete contribuire all’impresa del nostro prode argonauta che, per la prima volta, si cimenterà in un volo transoceanico, qui di seguito trovate tutti i
          dettagli.
          <br/>
          <br/>
          Fai volare lo sposo!
        </p>

        <div class="row justify-center">
          <q-img src="gif_2.gif" class="col-xs-11 col-lg-5 col-md-5"/>
        </div>

      </q-card-section>
      <q-card-actions align="center">
        <q-btn icon="mdi-airplane-takeoff" icon-right="mdi-gift-open" size="xl" label="Clicca qui" @click="diban = true"/>
      </q-card-actions>
    </q-card>


    <q-dialog v-model="diban">
      <q-card style="width: 70vw">
        <q-card-section>
          <div class="text-h6">Dettagli</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p class="text-center text-h6">
            Conto corrente intestato a: Ilaria Stronati
            <br/>
            <br/>
            IBAN: IT95S 02008 32974 023266425198
            <br/>
            Presso Banca Unicredit
          </p>


        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>

export default {
  name: "Regali",
  data() {
    return {
      diban: false
    }
  }
}
</script>

<style scoped>

</style>
