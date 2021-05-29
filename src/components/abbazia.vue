<template>
  <q-card class="col-md-5 col-xs-12">
    <q-img
      src="abbazia.jpg"
      :ratio="16/9"
      height="300px"
      position="50% 60%"
    />

    <q-card-section>
      <div class="text-overline">Abbazia di San Firmano — Cerimonia</div>
      <p>La celebrazione della Messa si terrà presso l’Abbazia di San Firmano
        Contrada S. Firmano 12, 62010, Montelupone (MC)
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
      link: 'https://www.google.com/maps/dir/?api=1&destination=Abbazia+di+San+Firmano,+Contrada+S.+Firmano,+12,+62010+Montelupone+MC'
    }
  }
}
</script>
