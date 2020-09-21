import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* *
  Bootstrap
*/
import { BootstrapVue } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* 
Components
*/
import Paginate from "vuejs-paginate";
import StarRating from 'vue-star-rating'
import VueCarousel from 'vue-carousel';


Vue.use(BootstrapVue)

Vue.use(VueCarousel);
Vue.component('paginate', Paginate)
Vue.component('star-rating', StarRating)



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
