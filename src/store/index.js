import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.store"
import users from "./users.store"
import posts from "./posts.store"
import providers from "./providers.store"

import Roles from "@/services/from_datasets/roles.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alerts: [],
    navLinks: [],
  },
  mutations: {
    setNavLinks(state, navLinks) {
      state.navLinks = navLinks;
    },
  },
  actions: {
    async getNavLinks(store) {
      const menu = await Roles.getMenu(store.state.auth.user.role);
      store.commit("setNavLinks", menu);
    },
  },
  modules: {
    auth,
    users,
    posts,
    providers
  },
});
