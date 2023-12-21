import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    user: null,
    token: null,
    loading: false,
    alerts: []
  },
  mutations: {
    logout (state) {
      state.isLogged = false
      state.user = null
      state.token = null
    }
  }
})
