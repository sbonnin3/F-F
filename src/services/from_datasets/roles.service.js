const roles = [
    {
        _id: 1,
        name: "DEFAULT",
        menuItems: [
            {
                to: {name: "map"},
                title: "public.navigation.map"
            },
            {
                to: {name: "activities"},
                title: "public.navigation.activities"
            },
            {
                to: {name: "providers"},
                title: "public.navigation.providers"
            },
            {
                to: {name: "reservation"},
                title: "public.navigation.reservation"
            }
        ]
    },
    {
        _id: 2,
        name: "ROLE_ADMIN",
        menuItems: [
            {
                to: {name: "dashboard.ROLE_ADMIN"},
                title: "dashboard.navigation.dashboard",
                icon: "mdi-view-dashboard",
                exact: true
            },
            {
                to: {name: "providers.admin"},
                title: "dashboard.navigation.providers",
                icon: "mdi-badge-account-horizontal"
            },
            {
                to: {name: "users.admin"},
                title: "dashboard.navigation.users",
                icon: "mdi-account-multiple"
            },
            {
                to: {name: "roles.admin"},
                title: "dashboard.navigation.roles",
                icon: "mdi-lock"
            },
            {
                to: {name: "translations.admin"},
                title: "dashboard.navigation.translations",
                icon: "mdi-translate"
            },
            {
                to: {name: "myAccount"},
                title: "dashboard.navigation.myAccount",
                icon: "mdi-account"
            }
        ]
    },
    {
        _id: 3,
        name: "ROLE_PROVIDER",
        menuItems: [
            {
                to: {name: "dashboard.ROLE_PROVIDER"},
                title: "dashboard.navigation.dashboard",
                icon: "mdi-view-dashboard",
                exact: true
            },
            {
                to: {name: "providers.posts"},
                title: "dashboard.navigation.posts",
                icon: "mdi-post"
            },
            {
                to: {name: "providers.map"},
                title: "dashboard.navigation.map",
                icon: "mdi-map"
            },
            {
                to: {name: "providers.ticketing"},
                title: "dashboard.navigation.ticketing",
                icon: "mdi-ticket-confirmation"
            },
            {
                to: {name: "providers.goodies"},
                title: "dashboard.navigation.goodies",
                icon: "mdi-shopping"
            },
            {
                to: {name: "myProfile"},
                title: "dashboard.navigation.myProfile",
                icon: "mdi-account-file-text"
            },
            {
                to: {name: "myAccount"},
                title: "dashboard.navigation.myAccount",
                icon: "mdi-account"
            }
        ]
    }
];

function getMenu(roleName) {
    return roles.find(role => role.name === roleName).menuItems;
}

module.exports = {
    getMenu
}