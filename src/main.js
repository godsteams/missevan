import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueRouter from 'vue-router'
//VueRouter明确使用VueRouter
Vue.use(VueRouter)
import Vuex from 'vuex';
Vue.use(Vuex)
import store from "./store"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false


Vue.use(VueRouter)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
