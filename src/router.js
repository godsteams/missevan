
import VueRouter from "vue-router";
import search from "./pages/search.vue"
import commonhead from "./components/commonHead.vue"
import common from "./components/common.vue"
import login from "./pages/login.vue"
// 引入注册组件
import register from "./pages/register.vue"
import loginsuccess from "./pages/loginsuccess.vue"

// 引入登录成功组件
// 雷红的组件
import catalogs from './pages/catalogs.vue'
import catalogroot from'./pages/catalogroot.vue'
import broadcast from'./pages/broadcast.vue' 

const router = new VueRouter({
    routes:[
        {path:"/",component:common},
        {name:"search",path:"/search",component:search},
        {path:"/login",component:login},
        {path:"/register",component:register},
        {path:"/loginsuccess",component:loginsuccess},
        { path:'/catalogroot',component:catalogroot},
        {name:'catalog' ,path:'/catalogs',component:catalogs},
        {name:'broadcast' ,path:'/broadcast',component:broadcast},
    ]
})
export default router;