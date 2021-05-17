<template>
  <q-carousel
    animated
    :autoplay="2500"
    v-model="value"
    infinite
    height="90vh"
  >
    <q-carousel-slide :name="1" img-src="foto/tiny/1.jpg" class="c-img">

    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="foto/tiny/2.jpg" class="c-img">

    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="foto/tiny/3.jpg" class="c-img">

    </q-carousel-slide>
    <q-carousel-slide :name="5" img-src="foto/tiny/5.jpg" class="c-img">
    </q-carousel-slide>
    <q-carousel-slide :name="6" img-src="foto/tiny/6.jpg" class="c-img">
    </q-carousel-slide>

  </q-carousel>
</template>

<script>
export default {
  name: 'Carosello2',
  props: {
    value: {
      default: 2
    }
  },

  data() {
    return {}
  }
}
</script>

<style>
.c-img {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: black;

}

</style>
