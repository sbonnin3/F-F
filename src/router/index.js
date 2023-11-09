import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/page/accueil/',
    name: 'accueil',
    component: () => import('../views/Accueil.vue')
  },
  {
    path: '/page/carte/',
    name: 'carte',
    component: () => import('../views/Carte.vue')
  },
  {
    path: '/page/carte/plan',
    name: 'carte-3D',
    component: () => import('../views/ThreeD.vue')
  },
  {
    path: '/page/carte/visite',
    name: 'carte-StreetView',
    component: () => import('../views/StreetView.vue')
  },
  {
    path: '/page/activites/',
    name: 'activites',
    component: () => import('../views/Activites.vue')
  },
  {
    path: '/page/planning/',
    name: 'planning',
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/page/prestataire/',
    name: 'prestataire',
    component: () => import('../views/Prestataire.vue')
  },
  {
    path: '/page/connexion/',
    name: 'connexion',
    component: () => import('../views/Connexion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
