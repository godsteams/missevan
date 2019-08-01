
import VueRouter from 'vue-router'
import catalogs from './pages/catalogs.vue'
import catalogroot from'./pages/catalogroot.vue'
import broadcast from'./pages/broadcast.vue' 

const router=new VueRouter({
    routes:[
        {path:'/',redirect:"/catalogroot"},
        { path:'/catalogroot',component:catalogroot},
        {name:'catalog' ,path:'/catalogs',component:catalogs},
        {name:'broadcast' ,path:'/broadcast',component:broadcast},


        

    ]
})
export default router;