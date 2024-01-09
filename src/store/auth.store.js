import Users from "@/services/from_datasets/users.service";
import Providers from "@/services/from_datasets/providers.service";

const authStore = {
  state: {
    isLogged: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || {
      role: "DEFAULT",
    },
    token: localStorage.getItem("user.token") || null,
  },
  mutations: {
    removeUser(state) {
      state.isLogged = false;
      state.user = { role: "DEFAULT" };
      state.token = null;
      localStorage.clear();
    },
    setUser(state, { user, token }) {
      state.isLogged = true;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      state.token = token;
      localStorage.setItem("user.token", token);
    },
    setLocale(state, locale) {
      // set locale without calling the API
      state.user.locale = locale;
      localStorage.setItem("user.locale", locale);
    },
  },
  actions: {
    async logout(store) {
      store.commit("removeUser");
      store.dispatch("getNavLinks");
    },
    async login(store, { email, password }) {
      const user = await Users.getUser(email, password);
      if (user.role === "ROLE_PROVIDER") {
        user.provider = await Providers.getProvider(user.providerId);
      }
      store.commit("setUser", { user, token: "token" });
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
