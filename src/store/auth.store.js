import Users from "@/services/from_api/users.service";

import AuthService from "@/services/from_api/auth.service";

const authStore = {
    state: {
        isLogged: !!localStorage.getItem("user"),
        user: JSON.parse(localStorage.getItem("user")) || {
            role: "DEFAULT",
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        dropUser(state) {
            state.user = {
                role: "DEFAULT"
            };
            localStorage.removeItem("user");
        },
        setLocale(state, locale) {
            // set locale without calling the API
            state.user.locale = locale;
            localStorage.setItem("user.locale", locale);
        },
    },
    actions: {
        async logout(store) {
            await AuthService.logout().then(() => {
                store.commit("dropUser");
                store.state.isLogged = false;
            })
            store.dispatch("getNavLinks");
        },
        async login(store, {email, password}) {
            await AuthService.login(email, password).then((result) => {
                store.commit("setUser", result);
                store.state.isLogged = true;
            }).catch((error) => {
                store.state.isLogged = false;
                throw error;
            });
            store.dispatch("getNavLinks");
        },
        async setLocale(store, locale) {
            // set locale calling the API if the user is logged
            if (store.state.isLogged) {
                await Users.setLocale(store.state.user._id, locale);
            }
            store.commit("setLocale", locale);
        },
    },
};

export default authStore;
