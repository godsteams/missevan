import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false


import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
