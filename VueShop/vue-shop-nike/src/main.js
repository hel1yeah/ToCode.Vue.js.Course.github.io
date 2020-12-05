import Vue from "vue";
import App from "./App.vue";


import router from "./router";
import store from "./store";

//  плагины
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

//  стили 
import "./assets/scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
