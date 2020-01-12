import Vue from 'vue'
import VueCookie from 'vue-cookie';
import { BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BCarousel, BCarouselSlide, BProgress} from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(BootstrapVueIcons);

Vue.component('b-carousel', BCarousel);
Vue.component('b-carousel-slide', BCarouselSlide);
Vue.component('b-progress', BProgress);

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
