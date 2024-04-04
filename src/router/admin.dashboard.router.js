const adminRouter = [
  {
    path: "providers",
    component: () => import("@/views/dashboard/admin/providers/Template.vue"),
    children : [
      {
        path: "",
        name: "providers.list",
        component: () => import("@/views/dashboard/admin/providers/ProvidersList.vue"),
      }
    ]
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
