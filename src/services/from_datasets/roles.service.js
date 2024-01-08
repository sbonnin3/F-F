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
            }
        ]
    },
    {
        _id: 2,
        name: "ROLE_ADMIN",
        menuItems: [
            {
                to: {name: "dashboard"},
                title: "dashboard.navigation.dashboard",
                icon: "mdi-view-dashboard",
                exact: true
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
    },
    {
        _id: 3,
        name: "ROLE_PROVIDER",
        menuItems: [
            {
                to: {name: "dashboard"},
                title: "dashboard.navigation.dashboard",
                icon: "mdi-view-dashboard",
                exact: true
            },
            {
                to: {name: "posts"},
                title: "dashboard.navigation.posts",
                icon: "mdi-post"
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