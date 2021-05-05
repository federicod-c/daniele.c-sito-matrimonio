<template>
  <q-page class="row justify-center q-pa-md q-gutter-lg">
    <q-card class="col-12 col-lg-10">
      <q-img
        src="abbazia.jpg"
        :ratio="16/9"
        height="300px"
        position="50% 60%"
      />

      <q-card-section >
        <div class="text-overline">Dove</div>
        <p>La cerimonia si svolgerà presso l’Abbazia di San Firmano, Contrada S. Firmano, 12, 62010,
          Montelupone (MC); successivamente gli sposi saranno lieti di salutarvi presso Villa Buonaccorsi, Contrada
          Giardino, 62018 Porto Potenza Picena MC
        </p>
        <div class="text-overline">Quando</div>
        <p>17 luglio 2021, ore 17.30</p>
      </q-card-section>

    </q-card>

    <Mappa class="col-12 col-lg-10"/>
    <div class="col-12"/>
  </q-page>
</template>

<script>
import Mappa from "components/Mappa";

export default {
  name: "ComeArrivare",
  components: {
    Mappa
  }
}
</script>

<style scoped>

</style>
