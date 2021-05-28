const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name:'Home', path: '', component: () => import('pages/Index.vue')}
    ]
  },
  {
    path: '/listanozze',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name: 'fai-volare-lo-sposo', path: '', component: () => import('pages/Regali.vue')}
    ]
  },
  {
    path: '/rsvp',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name: 'dove-e-quando', path: '', component: () => import('pages/ComeArrivare.vue')}
    ]
  },
  {
    path: '/alloggi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name:'alloggi', path: '', component: () => import('pages/AlloggiEAttivita.vue')}
    ]
  },
  {
    path: '/luoghi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name:'luoghi-di-interesse', path: '', component: () => import('pages/Luoghi.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
