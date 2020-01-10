import Vue from 'vue'
import VueCookie from 'vue-cookie';
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueCookie);

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
