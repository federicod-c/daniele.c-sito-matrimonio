<template>
  <q-carousel
    animated
    v-model="value"
    :autoplay="2500"
    infinite
    height="95vh"
    class="my-bk"
  >
    <q-carousel-slide :name="1" img-src="foto/tiny/1.jpg" class="c-img">
      <div class="absolute-center custom-caption">
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h2'">{{ h1 }}</div>
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'" style="font-style: italic">{{ h2 }}</div>
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="2" img-src="foto/tiny/2.jpg" class="c-img">
      <div class="absolute-center custom-caption">
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h2'">{{ h1 }}</div>
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'" style="font-style: italic">{{ h2 }}</div>
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="3" img-src="foto/tiny/3.jpg" class="c-img">
      <div class="absolute-center custom-caption">
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h2'">{{ h1 }}</div>
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'" style="font-style: italic">{{ h2 }}</div>
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="5" img-src="foto/tiny/5.jpg" class="c-img">
      <div class="absolute-center custom-caption">
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h2'">{{ h1 }}</div>
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'" style="font-style: italic">{{ h2 }}</div>
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="6" img-src="foto/tiny/6.jpg" class="c-img">
      <div class="absolute-center custom-caption">
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h2'">{{ h1 }}</div>
        <div :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'" style="font-style: italic">{{ h2 }}</div>
      </div>
    </q-carousel-slide>

  </q-carousel>
</template>

<script>
export default {
  name: 'Carosello2',
  props: {
    value: {
      default: 1
    }
  },

  data() {
    return {
      h1: 'Matrimonio Daniele e Ilaria',
      h2: '17 luglio 2021'
    }
  }
}
</script>

<style>
.c-img {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;

  opacity: 1;
}

.custom-caption {
  text-align: center;
  padding: 5px;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
