const dashboardRoutes = [{
    path: '/dashboard',
    component: () => import('@/views/dashboard/Template.vue'),
    children: [
        {path: '', name: 'dashboard'},
        {path: 'my-profile', name: 'myProfile'},
    ]
}];

export default dashboardRoutes;