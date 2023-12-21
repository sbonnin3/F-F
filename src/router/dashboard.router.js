const dashboardRoutes = [{
    path: '/dashboard',
    component: () => import('@/views/dashboard/Template.vue'),
    children: [
        {path: '', name: 'dashboard'},
        {path: 'account', name: 'dashboard.account'},
    ]
}];

export default dashboardRoutes;