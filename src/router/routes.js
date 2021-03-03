const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')}
    ]
  },
  {
    path: '/glisposi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/SuDiNoi.vue')}
    ]
  },
  {
    path: '/listanozze',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Regali.vue')}
    ]
  },
  {
    path: '/mappa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/ComeArrivare.vue')}
    ]
  },
  {
    path: '/alloggi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/AlloggiEAttivita.vue')}
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
