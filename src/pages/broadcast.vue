<template>
    <div class="broadcast">
        <commonhead/>
        <div class="herder">{{name}}</div>
        <div class='nav'>
            <span><i></i>更新时间</span>
            <span><i></i>分类筛选</span>
        </div>
        <div
            v-for="i in sort"
            :key='i'
        >
            <h6 >{{i | cn}}</h6>
            <div class="list"
                 v-for='da in datas'
                :key='da.id'>
                <div
                v-for="d in da.slice(0,9)"
                :key='d.id'
                 class="datas">
                    <img :src="`https://static.missevan.com/dramacoversmini/${d.cover}`">
                    <p>{{d.name}}</p>
                    <span><b>更新至</b>{{d.newest}}</span>
                </div>

            </div>
            
        </div>
        <commonfooter/>
    </div>
</template>
<script>
import axios from 'axios'
import commonhead from "../components/commonHead"
import commonfooter from "../components/commonfooter"
export default {
    components:{
        commonhead,commonfooter
    },
    data(){
        return{
            name:"",
            datas:[],
            sort:[],
        }
    },
    filters:{
        cn(v){
            if(v=="last"){
               return v="最新速递"
            }else if(v=="recommend"){
                return v="小编推荐"
            }else{
                return v="经典作品"
            }
        }
    },
    methods:{
     
    },
    mounted(){

        //获取头部名称
            let id=(this.$route.params.id)
            axios.get("mobileWeb/catalogs").then(res=>{
                // console.log(res.data.info[id])
            this.name=(res.data.info[id].catalog_name)
            
        })
        //获取分类简介
        let url="/drama/rest/mobile/homepage"
        axios.get(url).then(res=>{

            let datas=(res.data.info)
            for(var i in datas){
                this.datas.push(datas[i])
            }
            console.log(datas)
         console.log(this.datas)

            //获取分类名
            this.sort=res.data.info.sort
            // console.log(this.datas)
        })
    }
}
</script>
<style scoped>
    .broadcast{
        background: #F5F5F5;
    }
    .herder{
        line-height: 40px;width: 100%;position: relative;top:0;text-align: center;
        border-bottom:0.2px solid #E9E9E9;background: #ffffff;
    }
    .nav{
        display: flex;justify-content: space-around;
    }
    .nav span{
        height: 40px;line-height: 38px;background-color: #fff;display: inline-block;width:172px;
        font-size: 14px;font-weight: 700;margin:20px 0;padding: 0;color: #000;border-radius: 8px;text-align: center;
    }
    .nav span i{
        display: inline-block;width:35px;height:35px;background-image: url(../assets/img/xiebi.png);
        background-size:261px 235px;vertical-align: middle;margin-right: 5px;background-position: -149px -37px;
    }
    .nav span:nth-of-type(1) i{
            background-position: -149px 0;
    }
    h6{
        font-size: 16px;line-height: 40px;padding: 0 14px;
    }
    .list{
        width: 100%;display: flex;flex-wrap: wrap;justify-content: space-around;
    }
    .datas{
        height: 170px;margin: 5px 0;color: #000000
    }
    .datas img{
        width: 110px;height: 110px;
    }
    .datas p{
        width: 110px;overflow: hidden;font-size: 13px;line-height: 20px
    }
    .datas span{
        font-size: 12px;width: 110px;overflow-x: hidden;
    }
    .datas span b{
        color:#9E9E9E;font-weight: 100;
    }
   
</style>
