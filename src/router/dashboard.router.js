import adminRouter from "./admin.dashboard.router";

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: () => import("@/views/dashboard/Template.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("@/views/dashboard/dashboards/Template.vue"),
        children: [
          {
            path: "admin",
            name: "dashboard.ROLE_ADMIN",
            component: () =>
              import("@/views/dashboard/dashboards/AdminDasboard.vue"),
          },
          {
            path: "provider",
            name: "dashboard.ROLE_PROVIDER",
            component: () =>
              import("@/views/dashboard/dashboards/ProviderDashboard.vue"),
          },
        ],
      },
      {
        path: "providers",
        component: () => import("@/views/PassALevel.vue"),
        children: [
          {
            path: "posts",
            component: () => import("@/views/dashboard/provider/posts/Template.vue"),
            children: [
              {
                path: "",
                name: "providers.posts",
                component: () =>
                  import("@/views/dashboard/provider/posts/PostsList.vue"),
              },
              {
                path: "new",
                name: "newPost",
                component: () =>
                  import("@/views/dashboard/provider/posts/PublishPost.vue"),
              },
              {
                path: "edit/:postId",
                name: "EditPost",
                props: true,
                component: () => import("@/views/dashboard/provider/posts/EditPost.vue"),
              },
            ],
          },
          {
            path: "livredor",
            component: () => import("@/views/dashboard/provider/livredor/Template.vue"),
            children: [
              {path: "", name: "providers.livredor", component: () => import("@/views/dashboard/provider/livredor/CommentsList.vue")},
            ]
          },
          {
            path: "map",
            name: "providers.map",
            component: () => import("@/views/dashboard/provider/map/Template.vue"),
            children: [],
          },
          {
            path: "ticketing",
            name: "providers.ticketing",
            component: () => import("@/views/dashboard/provider/ticketing/Template.vue"),
            children: [],
          },
          {
            path: "goodies",
            name: "providers.goodies",
            component: () => import("@/views/dashboard/provider/goodies/Template.vue"),
            children: [],
          },
          { path: "my-profile", name: "myProfile", component: () => import("@/views/dashboard/provider/providerprofile/EditProviderProfile.vue") },
        ],
      },
      {
        path: "admin",
        component: () => import("@/views/PassALevel.vue"),
        children: [...adminRouter],
      },
    ],
  },
];

export default dashboardRoutes;
