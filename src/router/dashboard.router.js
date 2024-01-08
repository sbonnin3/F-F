const dashboardRoutes = [
  {
    path: "/dashboard",
    component: () => import("@/views/dashboard/Template.vue"),
    children: [
      { path: "", name: "dashboard" },
      { path: "my-profile", name: "myProfile" },
      {
        path: "providers",
        name: "providers",
        component: () => import("@/views/PassALevel.vue"),
        children: [
          {
            path: "posts",
            component: () => import("@/views/dashboard/posts/Template.vue"),
            children: [
              {
                path: "",
                name: "posts",
                component: () => import("@/views/dashboard/posts/PostsList.vue"),
              },
              {
                path: "new",
                name: "newPost",
              }
            ],
          },
        ],
      },
    ],
  },
];

export default dashboardRoutes;
