import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueRouter from 'vue-router'
//VueRouter明确使用VueRouter
Vue.use(VueRouter)
import Vuex from 'vuex';
Vue.use(Vuex)
import store from "./store"
Vue.config.productionTip = false


Vue.use(VueRouter)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
