
import VueRouter from "vue-router";
import search from "./pages/search.vue"
import login from "./pages/login.vue"
// 引入注册组件
import register from "./pages/register.vue"
import loginsuccess from "./pages/loginsuccess.vue"

// 引入登录成功组件
// 雷红的组件
import catalogs from './pages/catalogs.vue'
import catalogroot from './pages/catalogroot.vue'
import broadcast from './pages/broadcast.vue'
import timeline from'./pages/timeline.vue' 
import dramaapi from'./pages/dramaapi.vue' 
import dramadetail from'./pages/dramadetail.vue' 
// 引入牟笑然的组件
import albums from './pages/albums'
import album_detail from './pages/album_detail'
// 引入程禹组件
import recommend from './pages/recommend.vue'
import detail from './components/detail.vue';
import jianjie from './components/jianjie.vue';
import pinglun from './components/pinglun.vue';
import pic from './components/pic.vue';

import details from './components/details.vue';
import dongtai from './components/dongtai.vue';
import pingluns from './components/pingluns.vue';
import member from './components/member.vue';

const router = new VueRouter({
    routes: [
        { name: "search", path: "/search", component: search },
        { path: "/login", component: login },
        { path: "/register", component: register },
        { path: "/loginsuccess", component: loginsuccess },
        { path: '/catalogroot', component: catalogroot },
        { name: 'catalog', path: '/catalogs/:id', component: catalogs },
        { name: 'broadcast', path: '/broadcast/:id', component: broadcast },
        { path: "/albums", component: albums },
        { name: "album_detail", path: "/album_detail", component: album_detail },
        { path: "/", component: recommend },
        {name:'dramadetail' ,path:'/dramadetail/:id',component:dramadetail},
        { path:'/timeline',component:timeline},
        { path:'/dramaapi',component:dramaapi},
        {
            name: "detail",
            path: "/detail/:id",
            component: detail,
            children: [
                { path: "/detail/", component: jianjie },
                { path: "/detail/pinglun", component: pinglun },
                { path: "/detail/pic", component: pic },
            ]
        },
        {
            name:"details",
            path:"/details/:id",
            component:details,
            children:[
                { path:"/details/",component:dongtai},
                { path:"/details/pingluns",component:pingluns},
                { path:"/details/member",component:member},
            ]
        },
    ]
})
export default router;
