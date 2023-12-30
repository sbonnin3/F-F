import Vue from 'vue'
import Vuex from 'vuex'

import * as Users from '@/services/from_datasets/users.service'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false, user: null, token: null, loading: false, alerts: []
    }, mutations: {
        removeUser(state) {
            state.isLogged = false
            state.user = null
            state.token = null
        }, setUser(state, {user, token}) {
            state.isLogged = true
            state.user = user
            state.token = token
        }
    }, actions: {
        logout({commit}) {
            commit('removeUser')
        },
        async login({commit}, {email, password}) {
            commit('setUser', {user: await Users.getUser(email, password), token: ''})
        }
    }
})
