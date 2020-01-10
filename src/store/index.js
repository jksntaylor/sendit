import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasData: false,
    name: '',
    resort: ''
  },
  mutations: {
    name (state, name) {
      state.name = name;
    },
    nesort (state, resort) {
      state.resort = resort;
    },
    data (state, data) {
      state.hasData = data;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
