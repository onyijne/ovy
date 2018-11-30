import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations: {
    toggleMenu (state) {
      if (state.openMenu === true) {
        state.openMenu = false
      } else { state.openMenu = true }
    }
  },
  actions: {

  },
  getters
})
export default store
