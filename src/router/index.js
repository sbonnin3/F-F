import Vue from 'vue'
import VueRouter from 'vue-router'

import publicRoutes from '@/router/public.router'
import dashboardRoutes from '@/router/dashboard.router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: "active",
    routes: [
        ...publicRoutes,
        ...dashboardRoutes,
    ]
})

export default router