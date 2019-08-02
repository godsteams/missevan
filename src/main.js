import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
import router from './router';
import VueRouter from 'vue-router'
import Vuex from 'vuex';
Vue.use(Vuex)
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
