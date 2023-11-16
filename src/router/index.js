import Vue from 'vue'
import VueRouter from 'vue-router'

import PublicRoutes from '@/router/public.router'
import DashboardRoutes from '@/router/dashboard.router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    ...PublicRoutes,
    ...DashboardRoutes
  ]
})

export default router