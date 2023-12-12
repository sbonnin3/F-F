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
                component: () => import("@/views/public/map/MapTemplate.vue"),
                children: [
                    {
                        path: "",
                        name: "map",
                        component: () => import("@/views/public/map/Carte.vue"),
                    },
                    {
                        path: "3D",
                        name: "map3D",
                        component: () => import("@/views/public/map/ThreeD.vue"),
                    },
                    {
                        path: "streetview",
                        name: "mapStreetview",
                        component: () => import("@/views/public/map/StreetView.vue"),
                    },
                ],
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
                path: "login",
                name: "login",
                component: () => import("@/views/public/Connexion.vue"),
            },
            // A MIEUX RANGER
            {
                path: "admin_dashboard",
                name: "admin_dashboard",
                // COMPONENT A RAJOUTER

            },
            {
                path: "admin_statistics",
                name: "admin_statistics",
                // COMPONENT A RAJOUTER
            },
            {
                path: "admin_notifications",
                name: "admin_notifications",
                // COMPONENT A RAJOUTER
            },
            {
                path: "admin_account",
                name: "admin_account",
                // COMPONENT A RAJOUTER
            },
            {
                path: "presta_statistics",
                name: "presta_statistics",
                // COMPONENT A RAJOUTER
            },
            {
                path: "presta_orders",
                name: "presta_orders",
                // COMPONENT A RAJOUTER
            },
            {
                path: "presta_notifications",
                name: "presta_notifications",
                // COMPONENT A RAJOUTER
            },
            {
                path: "presta_account",
                name: "presta_account",
                // COMPONENT A RAJOUTER
            },
            {
                path: "client_reservations",
                name: "client_reservations",
                // COMPONENT A RAJOUTER
            },
            {
                path: "client_planning",
                name: "client_planning",
                // COMPONENT A RAJOUTER
            },
            {
                path: "client_account",
                name: "client_account",
                // COMPONENT A RAJOUTER
            },
            {
                path: "pilote_planning",
                name: "pilote_planning",
                // COMPONENT A RAJOUTER
            },
            {
                path: "pilote_baptism",
                name: "pilote_baptism",
                // COMPONENT A RAJOUTER
            },
            {
                path: "pilote_account",
                name: "pilote_account",
                // COMPONENT A RAJOUTER
            },
        ],
    },
];

export default publicRoutes;
