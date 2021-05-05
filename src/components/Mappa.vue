<template>
  <q-card flat>
    <q-card-section>
      <div style="overflow:hidden;resize:none;max-width:100%;width:100vw;height:50vh">
        <div id="embeddedmap-display" style="height:100%; width:100%;max-width:100%;">
          <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Abbazia+San+Firmano,+Montepulcione&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=10"></iframe>
        </div>
      </div>
      <!--      <q-img :ratio="9/16" width="400px" position="55% 0%" :src="linkImg"/>-->
    </q-card-section>

    <q-card-section>
      <div class="text-h5">Come arrivare</div>
      <div class="text-subtitle2 q-mt-sm q-mb-xs">Abbazia di San Firmano, Montepulone</div>
      <ul>
        <li>In Auto</li>
        <ul>
          <li> Autostrada A14
            <ul>
              <li>da Nord uscita Loreto - Porto Recanati</li>
              <li>da Sud uscita Civitanova Marche</li>
            </ul>
          <li>Superstrada Val di Chienti, uscita Morrovalle – Monte San Giusto</li>
          <li>da Macerata SP Potentina</li>
          <li>da Porto Recanati, Loreto, Recanati SS Regina</li>
        </ul>
        <li>In Treno</li>
        <ul>
          <li>Stazione ferroviaria di Potenza Picena – Montelupone</li>
        </ul>
        <li>In aereo</li>
        <ul>
          <li>Aeroporto di Ancona (48 km circa)</li>
        </ul>
      </ul>
    </q-card-section>

    <q-card-actions class="justify-around">
      <q-btn flat icon="map" label="Apri indicazioni su Google Maps" type="a" :href="link" target="_blank"/>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "Mappa",

  data() {
    return {
      link: "https://maps.google.com/maps?ll=43.362903,13.549766&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&daddr=Abbazia%20di%20San%20Firmano%20Contrada%20S.%20Firmano%2C%2012%2062010%20Montelupone%20MC@43.362903,13.549766",
      linkImg: "http://www.iluoghidelsilenzio.it/wp-content/gallery/abbazia-di-san-firmano-montelupone-mc/san_firmano_13.jpg"
    }
  }
}
</script>

<style scoped>
#embeddedmap-display img.text-marker {
  max-width: none !important;
  background: none !important;
}
</style>
