<template>
  <q-page class="q-pa-md">
    <div class="row wrap justify-center">

      <q-img
        class="col-6 masonry-brick" v-for="i in 45" :key="i" :ratio="4/3" height="420px"
        :src="imgs[i]"
        @click="colpito(i)"
      >
        <div class="absolute-bottom text-subtitle1 text-right">
          Didascalia
        </div>
      </q-img>

    </div>

  </q-page>
</template>

<script>
export default {
  name: "Dettagli",

  data() {
    return {
      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgs: []
    }
  },

  methods: {
    colpito(i) {
      console.debug('colpito!', i)
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

    for (let i = 0; i < 45; i++) {
      renderGalleryItem(i + Math.random());
    }

    this.imgs = a

  }
}
</script>

<style scoped>
.masonry {
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px; /* Adjustment for the gutter */
  width: 100%;
}

.masonry-brick {
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 0 8px 8px 0; /* Some gutter */
}


.masonry-brick:nth-child(4n+1) {
  width: 250px;
}

.masonry-brick:nth-child(4n+1):nth-child(4n+2) {
  width: 325px;
}

.masonry-brick:nth-child(4n+1):nth-child(4n+3) {
  width: 180px;
}

.masonry-brick:nth-child(4n+1):nth-child(4n+4) {
  width: 380px;
}
</style>
