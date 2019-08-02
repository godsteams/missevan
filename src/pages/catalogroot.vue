<template>
    <div>
        <div class="container">
                <div
                    v-for="v in catalogroot"
                    :key="v.id"
                    class="list"
                    @click="toskip(v.id)"
                    >
                    <img :src="v.pic">
                    <p>{{v.title}}</p>
                </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            catalogroot:[] //分类名
        }
    },
    methods:{
        toskip(id){
            if(id==5){
            this.$router.push({ name:'broadcast', params: {id:id }})
            }else{
            this.$router.push({ name:'catalog', params: {id:id }})
            }
        }
    },
    mounted(){

        //分类名请求数据
        let url='/mobileWeb/catalogroot'
        axios.get(url).then(res=>{
            this.catalogroot=res.data.info
            // console.log(this.catalogroot)
        })
    },

}
</script>
<style scoped>

    .container{
        width: 100%;height: 100%;display:flex;flex-wrap:wrap;justify-content:space-around;background:#F5F5F5;
        font-family: Hiragino Sans GB,华文细黑,STHeiti,微软雅黑,Microsoft YaHei,SimHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    }
    .list{
        width: 105px;height: 105px;text-align: center;background: white;border-radius: 8px;
        margin: 10px 0;box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);

    }
    .list img{
        width: 50px;height: 50px;margin: 15px auto 8px;
    }
    .list p{
        font-size: 14px;
    }

</style>
