const roles = [
    {
        _id: 1,
        name: "DEFAULT",
        menuItems: [
            {
                to: {name: "about"},
                title: "public.navigation.about"
            },
            {
                to: {name: "map"},
                title: "public.navigation.map"
            },
            {
                to: {name: "activities"},
                title: "public.navigation.activities"
            },
            {
                to: {name: "planning"},
                title: "public.navigation.planning"
            },
            {
                to: {name: "providers"},
                title: "public.navigation.providers"
            },
            {
                to: {name: "reservation"},
                title: "Reservation"
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
                to: {name: "posts"},
                title: "dashboard.navigation.posts",
                icon: "mdi-post"
            },
            {
                to: {},
                title: "dashboard.navigation.map",
                icon: "mdi-map"
            },
            {
                to: {},
                title: "dashboard.navigation.ticketing",
                icon: "mdi-ticket-confirmation"
            },
            {
                to: {},
                title: "dashboard.navigation.goodies",
                icon: "mdi-shopping"
            },
            {
                to: {name: "myProfile"},
                title: "dashboard.navigation.myProfile",
                icon: "mdi-account-file-text"
            },
        ]
    }
];

function getMenu(roleName) {
    return roles.find(role => role.name === roleName).menuItems;
}

module.exports = {
    getMenu
}