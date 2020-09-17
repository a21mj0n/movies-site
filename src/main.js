import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Paginate from "vuejs-paginate";
import StarRating from 'vue-star-rating'

Vue.component('paginate', Paginate)
Vue.component('star-rating', StarRating)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
