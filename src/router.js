import VueRouter from 'vue-router';

import recommend from './pages/recommend.vue'

import detail from './components/detail.vue';
import jianjie from './components/jianjie.vue';
import pinglun from './components/pinglun.vue';
import pic from './components/pic.vue';

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
    ]
})
export default router;