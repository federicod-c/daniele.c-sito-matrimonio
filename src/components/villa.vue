<template>
  <q-card class="col-md-5 col-xs-12">
    <q-img
      src="villa.jpg"
      :ratio="16/9"
      height="300px"
      position="50% 60%"
    />

    <q-card-section>
      <div class="text-overline">Villa Buonaccorsi — Ricevimento</div>
      <p>Dopo la celebrazione della Messa, seguirà il ricevimento presso Villa Buonaccorsi, Contrada Giardino, 62018 Porto Potenza Picena (MC)
      </p>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn icon="map" label="Clicca qui per il percorso" type="a" :href="link" target="_blank"/>
    </q-card-actions>

  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      link: 'https://www.google.com/maps/dir/?api=1&destination=Villa+Buonaccorsi,+Contrada+Giardino,+Porto+Potenza+Picena,+Province+of+Macerata'
    }
  }
}
</script>
