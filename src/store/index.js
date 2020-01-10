import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onboard: true,
    name: '',
    resort: ''
  },
  mutations: {
    update (state, obj) {
      state.name = obj.name;
      state.resort = obj.resort;
      state.onboard = obj.onboard
    }
  }
})
