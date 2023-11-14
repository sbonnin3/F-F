export default [{
    path: '/dashboard',
    component: () => import('@/views/dashboard/Template.vue'),
    children: [
      {path: '', name: 'dashboard'},
    ]
}]