<template>
    <div>
        <nav class="navbar">
            <div class="container">
                <div class="mobile-header">
                <a href="/" class="logo">
                    <img src="@/assets/images/Image1.png" alt="Logo">
                </a>
                <button class="menu-button" @click="toggleMenu">&#9776;</button>
                </div>
                <div class="nav-buttons" :class="{ 'active': isMenuOpen }">
                <router-link :to="{name: 'about'}" class="buttons-nav">A Propos</router-link>
                <router-link :to="{name: 'activities'}" class="buttons-nav">Activités</router-link>
                <router-link :to="{name: 'planning'}" class="buttons-nav">Planning</router-link>
                <router-link :to="{name: 'providers'}" class="buttons-nav">Prestataires</router-link>
                <router-link :to="{name: 'login'}" class="buttons-nav">Connexion</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "PublicNav",
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
},
  {
    path: '/',
    name: 'home',
    component: () => import('../views/public/Accueil.vue')
  },
  {
    path: '/page/carte/',
    name: 'carte',
    component: () => import('../views/public/map/Carte.vue')
  },
  {
    path: '/page/carte/plan',
    name: 'carte-3D',
    component: () => import('../views/public/map/ThreeD.vue')
  },
  {
    path: '/page/carte/visite',
    name: 'carte-StreetView',
    component: () => import('../views/public/map/StreetView.vue')
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
</script>