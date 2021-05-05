<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          class="lt-md"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Ilaria e Daniele
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Gli Sposi',
    caption: 'Su di noi',
    icon: 'mdi-ring',
    link: '/'
  },
  {
    title: 'Il matrimonio in a nutshell',
    caption: 'Come arrivare e dettagli',
    icon: 'mdi-church',
    link: '/ilmatrimonio'
  },
  {
    title: 'Put the groom on the plane!',
    caption: 'didascalia? Regali e pensieri?',
    icon: 'mdi-gift-open',
    link: '/listanozze'
  },
  {
    title: 'Alloggi e Attività',
    //caption: 'chat.quasar.dev',
    icon: 'mdi-bed',
    link: '/alloggi'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
