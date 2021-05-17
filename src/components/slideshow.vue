<template>
  <q-carousel
    swipeable
    animated
    v-model="value"
    thumbnails
    infinite
    height="550px"
  >
    <q-carousel-slide :name="1" img-src="foto/tiny/1.jpg" class="c-img" style="background-image: none">
      <q-img contain height="534px" src="foto/tiny/1.jpg"/>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="foto/tiny/2.jpg" class="c-img" style="background-image: none">
      <q-img contain height="534px" src="foto/tiny/2.jpg"/>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="foto/tiny/3.jpg" class="c-img" style="background-image: none">
      <q-img contain height="534px" src="foto/tiny/3.jpg"/>
    </q-carousel-slide>
    <q-carousel-slide :name="5" img-src="foto/tiny/5.jpg" class="c-img" style="background-image: none">
      <q-img contain height="534px" src="foto/tiny/5.jpg"/>
    </q-carousel-slide>
    <q-carousel-slide :name="6" img-src="foto/tiny/6.jpg" class="c-img" style="background-image: none">
      <q-img contain height="534px" src="foto/tiny/6.jpg"/>
    </q-carousel-slide>

  </q-carousel>
</template>

<script>
export default {
  name: 'Carosello',
  props: {
    value: {
      default: 1
    }
  },

  data() {
    return {}
  }
}
</script>

<style>
.c-img {
  height: 550px;
  object-fit: contain;
}

</style>
