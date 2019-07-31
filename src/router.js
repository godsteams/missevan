import VueRouter from "vue-router";
import search from "./pages/search.vue"
import commonhead from "./components/commonHead.vue"
import login from "./pages/login.vue"
const router = new VueRouter({
    routes:[
        {path:"/",component:commonhead},
        {name:"search",path:"/search",component:search},
        {path:"/login",component:login}
    ]
})

export default router;