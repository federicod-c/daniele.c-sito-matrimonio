<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
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
    title: 'Home',
    caption: '',
    icon: 'mdi-ring',
    link: '/'
  },
  {
    title: 'Dove e quando',
    caption: '',
    icon: 'mdi-church',
    link: '/rsvp'
  },
  {
    title: 'Fai volare lo sposo!',
    caption: '',
    icon: 'mdi-gift-open',
    link: '/listanozze'
  },
  {
    title: 'Dove soggiornare',
    icon: 'mdi-bed',
    link: '/alloggi'
  },
  {
    title: 'Luoghi di interesse',
    icon: 'mdi-bed',
    link: '/luoghi'
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
