<template>
  <q-page class="row justify-around">
    <q-card class="col-10 q-pt-lg" flat>
      <q-card-section>
        <p class="text-h5 text-center col-12">
          Quando: <br/>17 luglio 2021, ore 17.30
          <br/>
          <br/>
          Dove:
        </p>

      </q-card-section>
      <q-card-section class="row justify-around" style="margin-top: -20px">
        <abbazia/>
        <villa/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Abbazia from "components/abbazia";
import Villa from "components/villa"

export default {
  name: "ComeArrivare",
  components: {
    Abbazia,
    Villa
  }
}
</script>
