<template>
  <q-page class="row justify-center q-pa-md">
    <q-card class="col-12 col-lg-10">
      <q-img src="https://picsum.photos/960/720" :ratio="$q.screen.lt.md ? 16/9 : 16/9">
        <div class="text-h5 absolute-bottom text-right">
          Gli Sposi
        </div>
      </q-img>

      <q-card-section>
        <div class="text-h6">Ilaria e Daniele</div>
        <!--        <div class="text-subtitle2">by John Doe</div>-->
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "AlloggiEAttivita"
}
</script>

<style scoped>

</style>
