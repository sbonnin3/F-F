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
            component: () => import("@/views/dashboard/posts/Template.vue"),
            children: [
              {
                path: "",
                name: "providers.posts",
                component: () =>
                  import("@/views/dashboard/posts/PostsList.vue"),
              },
              {
                path: "new",
                name: "newPost",
                component: () =>
                  import("@/views/dashboard/posts/PublishPost.vue"),
              },
              {
                path: "edit/:postId",
                name: "editPost",
                props: true,
                component: () => import("@/views/dashboard/posts/EditPost.vue"),
              },
            ],
          },
          {
            path: "map",
            name: "providers.map",
            component: () => import("@/views/dashboard/map/Template.vue"),
            children: [],
          },
          {
            path: "ticketing",
            name: "providers.ticketing",
            component: () => import("@/views/dashboard/ticketing/Template.vue"),
            children: [],
          },
          {
            path: "goodies",
            name: "providers.goodies",
            component: () => import("@/views/dashboard/goodies/Template.vue"),
            children: [],
          },
          { path: "my-profile", name: "myProfile", component: () => import("@/views/dashboard/providerprofile/EditProviderProfile.vue") },
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
