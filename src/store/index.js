import Vue from "vue";
import Vuex from "vuex";

import Users from "@/services/from_datasets/users.service";
import Roles from "@/services/from_datasets/roles.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    user: {
      role: "DEFAULT",
    },
    token: null,
    alerts: [],
    navLinks: [],
  },
  mutations: {
    removeUser(state) {
      state.isLogged = false;
      state.user = {role: "DEFAULT"};
      state.token = null;
    },
    setUser(state, { user, token }) {
      state.isLogged = true;
      state.user = user;
      state.token = token;
    },
    setNavLinks(state, navLinks) {
      state.navLinks = navLinks;
    },
  },
  actions: {
    async logout(store) {
      store.commit("removeUser");
      store.dispatch("getNavLinks");
    },
    async login(store, { email, password }) {
      const user = await Users.getUser(email, password);
      store.commit("setUser", { user, token: "token" });
      store.dispatch("getNavLinks");
    },
    async getNavLinks(store) {
      const menu = await Roles.getMenu(store.state.user.role);
      store.commit("setNavLinks", menu);
    },
  },
});
