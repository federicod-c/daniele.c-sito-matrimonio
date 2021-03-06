<template>
  <q-page class="q-pa-md">
    <q-carousel
      animated
      swipeable
      v-model="slide"
      infinite
      :autoplay="true"
      thumbnails
      height="75vh"
      :fullscreen.sync="fullscreen"
    >
      <q-carousel-slide v-for="i in 15" :key="i" :name="i" :img-src="imgs[i]">
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  name: "Dettagli",

  data() {
    return {
      fullscreen: false,
      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgs: []
    }
  },

  created() {
    let a = []

    function renderGalleryItem(i) {
      fetch(`https://source.unsplash.com/featured/?nature,water&sig=${i}`)
        .then((response) => {
          a.push(response.url)
        })
    }

    for (let i = 0; i < 25; i++) {
      renderGalleryItem(i);
    }

    this.imgs = a

  }
}
</script>

<style scoped>

</style>
