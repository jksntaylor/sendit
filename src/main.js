import Vue from 'vue'
import VueCookie from 'vue-cookie';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
