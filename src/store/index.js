import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onboard: true,
    name: '',
    resort: '',
    resortInfo: {}
  },
  mutations: {
    submitOnboard (state, obj) {
      state.name = obj.name;
      state.resort = obj.resort;
      state.onboard = false
    },
    hasCookie (state) {
      state.onboard = false
    },
    changeResort (state, resort) {
      state.resort = resort;
    },
    changeName (state, name) {
      state.name = name;
    },
    resortInfo (state, info) {
      state.resortInfo = info;
    }
   }
})
