const publicRoutes = [
    {
        path: "/",
        component: () => import("@/views/public/Template.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/views/public/HomeView.vue"),
            },
            {
                path: "about",
                name: "about",
                component: () => import("@/views/public/APropos.vue"),
            },
            {
                path: "map",
                name: "map",
                component: () => import("@/views/public/map/ThreeD.vue"),
            },
            {
                path: "activities",
                name: "activities",
                component: () => import("@/views/public/Activites.vue"),
            },
            {
                path: "planning",
                name: "planning",
                component: () => import("@/views/public/Planning.vue"),
            },
            {
                path: "providers",
                name: "providers",
                component: () => import("@/views/public/Prestataire.vue"),
                children: [
                    {
                        path: ":id(\\d+)",
                        name: "provider",
                        component: () => import("@/components/public/ProviderProfile.vue"),
                        props: true,
                    },
                ],
            },
            {
                path: '/myaccount',
                name: 'myAccount',
                component: () => import('@/views/MyAccount.vue')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/views/Login.vue')
            },
            {
                path: '/logout',
                name: 'logout',
                component: () => import('@/views/Logout.vue')
            }
        ],
    },
];

export default publicRoutes;
