import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './flexble'
Vue.config.productionTip = false  
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
