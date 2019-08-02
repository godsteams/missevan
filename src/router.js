import VueRouter from "vue-router";
import search from "./pages/search.vue"
import commonhead from "./components/commonHead.vue"
import common from "./components/common.vue"
import login from "./pages/login.vue"
// 引入注册组件
import register from "./pages/register.vue"
// 引入登录成功组件
import loginsuccess from "./pages/loginsuccess.vue"
// 引入推荐组件

// 引入分类组件

// 引入音单组件

const router = new VueRouter({
    routes:[
        {path:"/",component:common},
        {name:"search",path:"/search",component:search},
        {path:"/login",component:login},
        {path:"/register",component:register},
        {path:"/loginsuccess",component:loginsuccess}
        // {path:"/musiclist",component: }
        // {path:"/recomd",component: }
        // {path:"/classify",component: }
    ]
})

export default router;