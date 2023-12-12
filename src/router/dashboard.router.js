const dashboardRoutes = [{
    path: '/dashboard',
    component: () => import('@/views/dashboard/Template.vue'),
    children: [
      {path: '', name: 'dashboard'},
    ]
}];

export default dashboardRoutes;