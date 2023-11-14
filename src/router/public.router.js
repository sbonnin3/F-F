export default [{
    path: '/',
    component: () => import('@/views/public/Template.vue'),
    children: [
      { path: '', name: 'home', component: () => import('@/views/public/HomeView.vue') },
      { path: 'about', name: 'about', component: () => import('@/views/public/Accueil.vue') },
      { path: 'map', name: 'map', component: () => import('@/views/public/map/MapTemplate.vue'),
        children: [
          {path: '', name: 'map', component: () => import('@/views/public/map/Carte.vue')},
          {path: '3D', name: '3D', component: () => import('@/views/public/map/ThreeD.vue')},
          {path: 'streetview', name: 'streetview', component: () => import('@/views/public/map/StreetView.vue')},
        ] },
      { path: 'activities', name: 'activities', component: () => import('@/views/public/Activites.vue') },
      { path: 'planning', name: 'planning', component: () => import('@/views/public/Planning.vue') },
      { path: 'providers', name: 'providers', component: () => import('@/views/public/Prestataire.vue') },
      { path: 'login', name: 'login', component: () => import('@/views/public/Connexion.vue') },
    ]
}]