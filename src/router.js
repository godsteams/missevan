
import VueRouter from 'vue-router'
import catalogs from './pages/catalogs.vue'
import catalogroot from'./pages/catalogroot.vue'
import broadcast from'./pages/broadcast.vue' 
import timeline from'./pages/timeline.vue' 
import dramaapi from'./pages/dramaapi.vue' 
// import dramadetail from'./pages/dramadetail.vue' 


const router=new VueRouter({
    routes:[
        {path:'/',redirect:"/catalogroot"},
        { path:'/catalogroot',component:catalogroot},
        {name:'catalog' ,path:'/catalogs',component:catalogs},
        {name:'broadcast' ,path:'/broadcast',component:broadcast},
        // {name:'dramadetail' ,path:'/dramadetail',component:dramadetail},合并的时候显示出来就行 是笑然的写详情页

        
        { path:'/timeline',component:timeline},
        { path:'/dramaapi',component:dramaapi},


        

    ]
})
export default router;