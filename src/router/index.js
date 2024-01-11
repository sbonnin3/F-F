import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulaire from '@/views/public/Formulaire.vue';

import publicRoutes from '@/router/public.router'
import dashboardRoutes from '@/router/dashboard.router'

Vue.use(VueRouter)

const routes = [
    ...publicRoutes,
    ...dashboardRoutes,
    {
        path: '/reservation-form',
        name: 'ReservationForm',
        component: Formulaire,
        props: route => ({ 
            selectedActivity: route.query.selectedActivity, 
            selectedTimeSlot: route.query.selectedTimeSlot 
        })
    },
    {
        path: '/reservation', // L'URL que vous voulez pour la page de réservation
        name: 'Reservation', // Le nom de la route utilisé pour naviguer
        component: () => import("@/views/public/Reservation.vue"),
    },  
    

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: "active",
    routes
})

export default router

