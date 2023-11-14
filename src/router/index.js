import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/public/Template.vue'),
    children: [
      {path: '', name: 'home', component: () => import('@/views/public/HomeView.vue')},
      {path: '', name: 'a-propos', component: () => import('@/views/public/Accueil.vue')},
      {path: 'map', name: 'map', component: () => import('@/views/public/Carte.vue')},
      {path: 'activities', name: 'activities'},
      {path: 'planning', name: 'planning'},
    ]
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/Template.vue'),
    children: [
      {path: '', name: 'dashboard'},
    ]
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/public/Accueil.vue')
  },
  {
    path: '/page/carte/',
    name: 'carte',
    component: () => import('../views/public/Carte.vue')
  },
  {
    path: '/page/carte/plan',
    name: 'carte-3D',
    component: () => import('../views/public/ThreeD.vue')
  },
  {
    path: '/page/carte/visite',
    name: 'carte-StreetView',
    component: () => import('../views/public/StreetView.vue')
  },
  {
    path: '/page/activites/',
    name: 'activites',
    component: () => import('../views/public/Activites.vue')
  },
  {
    path: '/page/planning/',
    name: 'planning',
    component: () => import('../views/public/Planning.vue')
  },
  {
    path: '/page/prestataire/',
    name: 'prestataire',
    component: () => import('../views/public/Prestataire.vue')
  },
  {
    path: '/page/connexion/',
    name: 'connexion',
    component: () => import('../views/public/Connexion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
