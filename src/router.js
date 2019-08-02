import VueRouter from 'vue-router'
import albums from './pages/albums'
import album_detail from './pages/album_detail'
import dramadetail from "./pages/dramadetail"
let router= new VueRouter({
    routes:[
        {path:"/albums",component:albums },  
        {name:"album_detail",path:"/album_detail",component:album_detail},  
        // {path:"/dramadetail",component:dramadetail}
    ]
})

export default router