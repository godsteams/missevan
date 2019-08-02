import VueRouter from 'vue-router';

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
    routes:[
        { path:"/recommend",component:recommend},
        {
            name:"detail",
            path:"/detail/:id",
            component:detail,
            children:[
                { path:"/detail/",component:jianjie},
                { path:"/detail/pinglun",component:pinglun},
                { path:"/detail/pic",component:pic},
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