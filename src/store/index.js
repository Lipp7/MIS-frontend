import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: undefined
  },
  mutations: {
    set_role(state, role) {
      state.role = role
    }
  },
  actions: {
  },
  modules: {
  }
})
