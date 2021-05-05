<template>
  <q-carousel
    autoplay="2500"
    swipeable
    animated
    v-model="value"
    thumbnails
    infinite
    height="550px"
  >
    <q-carousel-slide :name="1" img-src="foto/tiny/1.jpg" style="background-position: 50% 65%"/>
    <q-carousel-slide :name="2" img-src="foto/tiny/2.jpg" style="background-position: 50% 65%"/>
    <q-carousel-slide :name="3" img-src="foto/tiny/3.jpg"/>
<!--    <q-carousel-slide :name="4" img-src="foto/tiny/4.jpg" style="background-position: 50% 65%"/>-->
    <q-carousel-slide :name="5" img-src="foto/tiny/5.jpg" style="background-position: 50% 65%"/>
    <q-carousel-slide :name="6" img-src="foto/tiny/6.jpg" style="background-position: 50% 60%"/>

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
