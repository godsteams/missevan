<template>

    <div class="main">
        <commonhead />
       <div class="header">剧集更新表</div>
       <h6 class="header-bottom">· <b>最近</b></h6>
       <div class="content">
           
             <div 
                 v-for="la in  lastupdate"
                :key="la.id"
                div class="intro"
                @click="toskip(la.id)"

            >
            <img :src="la.cover" class="fl">
                <div class="fl">
                    <p>{{la.name}}</p>
                    <div><i></i>{{la.type_name}}</div>
                  <span><b>更新至</b>{{la.newest}}<i></i></span>
                </div>      
            </div>
        </div> 
        <div v-for="re in recent" :key="re.id">
            <h6>·<b>{{re.time}}</b>{{re.alias}}</h6>
            <div class="content">
                
                    <div 
                        v-for="dr in  re.dramas.slice(0,8)"
                        :key="dr.id"
                        div class="intro"
                        @click="toskip(dr.id)"
                    >
                    <img :src="dr.cover" class="fl">
                        <div class="fl">
                            <p>{{dr.name}}</p>
                            <div><i></i>{{dr.type_name}}</div>
                        <span><b>更新至</b>{{dr.newest}}<i></i></span>
                        </div>      
                    </div>
                </div> 

        </div>
        <commonfooter/>
    </div>
</template>
<script>
import axios from 'axios'
import commonhead from "../components/commonHead";
import commonfooter from "../components/commonfooter";

  
export default {
    data(){
        return{
        lastupdate:[],
        recent:[]
        }
    },
    components: {
    commonhead,
    commonfooter
  },
    mounted(){
        axios.get('/dramaapi/timeline').then(res=>{
            this.lastupdate=res.data.info.lastupdate
            this.recent=res.data.info.recent

        })
    },
    methods:{
         toskip(id){
            //详情页跳转
          this.$router.push({ name:'dramadetail', params: {id:id }})
        },
    }
}
</script>
<style scoped>
    .main{
        background: #F5F5F5
    }
    .header{
        line-height: 40px;width: 100%;text-align: center;font-size: 16px;background: white;
        border-left: 0.2px solid #E0E0E0;position:fixed;top:40px;
    }
    .header-bottom{
        margin-top: 40px;
    }
    .content{
        border-left: 0.2px solid #E0E0E0;box-sizing: border-box;padding: 10px 10px 10px 15px;
        margin-left: 15px;
    }
    .intro{
        height: 80px;margin-bottom: 10px;background: white;padding: 10px;
        border-radius:6px;
    }
    h6{
        font-size:13px;margin-left: 16px;line-height: 18px;color: #B6B6B6
    }
    h6 b{
        color: #000000;margin: 0 20px;
    }
    .intro img{
        width: 60px;border-radius:6px;vertical-align: middle;margin: 0 5px;
    }
     div.fl{
        font-size: 12px;line-height: 20px;color: #616161;
    }
    .intro p{
        font-size: 15px;line-height: 18px
    }
    div.fl i{
         display: inline-block;width:9px;height:9px;background-image: url(../assets/img/xiebi.png);
        background-size:261px 235px;vertical-align: middle;margin-right: 5px;background-position:-247px -189px;
    }
     div.fl span{
         color: black;
     }
    div.fl span b{
        margin-right: 5px;color:#616161;
    }
    div.fl span i{
        background-position: -247px -212px;position:absolute;right:20px;
    }
   
</style>

