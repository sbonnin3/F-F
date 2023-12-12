import Vue from 'vue'
import Vuex from 'vuex'

import publicStore from "@/store/public";
import dashboardStore from "@/store/dashboard";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    public: publicStore,
    dashboard: dashboardStore,
  }
})
