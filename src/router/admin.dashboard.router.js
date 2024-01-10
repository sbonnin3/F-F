const adminRouter = [
  {
    name: "providers.admin",
    path: "providers",
    component: () => import("@/views/dashboard/admin/providers/Template.vue"),
  },
  {
    name: "users.admin",
    path: "users",
    component: () => import("@/views/dashboard/admin/users/Template.vue"),
  },
  {
    name: "roles.admin",
    path: "roles",
    component: () => import("@/views/dashboard/admin/roles/Template.vue"),
  },
  {
    name: "translations.admin",
    path: "translations",
    component: () =>
      import("@/views/dashboard/admin/translations/Template.vue"),
  },
];

export default adminRouter;
