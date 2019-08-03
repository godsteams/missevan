<template>
    <div>
        <div class="header">剧集更新表</div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">完结度</template>
                 <div  class="submenu">
                    <el-menu-item index="1-1" @click=getDatas(0,4)>全部</el-menu-item>
                     <el-menu-item index="1-2" @click=getDatas(3,4)>全一期</el-menu-item>
                    <el-menu-item index="1-3" @click=getDatas(4,4)>微小说</el-menu-item>
                    <el-menu-item index="1-4" @click=getDatas(1,4)>长篇未完结</el-menu-item>
                    <el-menu-item index="1-5" @click=getDatas(2,4)>长篇完结</el-menu-item>
                </div>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">年代</template>
                 <div  class="submenu">
                 <el-menu-item index="2-1"  @click=getDatas(0,5)>全部</el-menu-item>
                <el-menu-item index="2-2"  @click=getDatas(1,5)>现代</el-menu-item>
                <el-menu-item index="2-3" @click=getDatas(2,5)>古风</el-menu-item>
                <el-menu-item index="2-4" @click=getDatas(3,5)>民国</el-menu-item>
                </div>
            </el-submenu>
             <el-submenu index="3">
                <template slot="title">分类</template>
                <div class="submenu">
                    <el-menu-item index="2-1"  @click=getDatas(4,3)>全部</el-menu-item>
                    <el-menu-item index="2-2" @click=getDatas(5,3)>纯爱</el-menu-item>
                    <el-menu-item index="2-3" @click=getDatas(6,3)>百合</el-menu-item>
                    <el-menu-item index="2-4" @click=getDatas(3,3)>全年龄</el-menu-item>
                </div>
             </el-submenu>
            <el-menu-item index="4" >筛选</el-menu-item>
         </el-menu>
    <div class="main">
        <div
            v-for="da in datas"
            :key="da.id"
            class="datas"
            @click="toskip(da.id)"
        >
        <img :src="da.cover">
        <p>{{da.name}}</p>
        <h5>{{da.newest | newest}}</h5>
        </div>
    </div>
    
    
    
    
    
    
    </div>
</template>
<script>
import axios from 'axios';
import { Button, Select } from 'element-ui'; 
export default {
    data(){
        return{
            activeIndex: '1',
            datas:[],
            a:0,
            b:0,
            c:0,
        }
    },
    filters:{
        newest(v){
            return "更新至"+"  "+v
        }
    },
    mounted(){

        axios.get('/dramaapi/filter?filters=0_0_0_0_0').then(res=>{
            this.datas=(res.data.info.Datas)
            // console.log(this.datas)
        })
        
    },
    methods:{
        handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      getDatas(num,w){
          if(w==3){
            this.a=num
          }else if(w==4){
            this.b=num
          }else if(w==5){
            this.c=num
          }
          
         axios.get(`/dramaapi/filter?filters=0_${ this.a}_${ this.b}_${ this.c}_0`).then(res=>{
           this.datas=(res.data.info.Datas)
           console.log( this.a, this.b, this.c)
        })
      },
      toskip(id){
 //详情页跳转
          this.$router.push({ name:'dramadetail', params: {id:id }})
    },
    }
}
</script>
<style scoped> 
    .header{
        line-height: 40px;width: 100%;text-align: center;font-size: 16px;background: white;
        border-left: 0.2px solid #E0E0E0;
    }
    .submenu{
        width: 100%;display: flex;
    }
    .submenu li{
        float: left;
    }
    .main{
        display: flex;flex-wrap: wrap;
    }
    .datas{
        width: 33%;padding: 5px 5px 10px;box-sizing: border-box;
    }
    .datas img{
        width: 110px;height: 110px;
        border-radius: 6px;
    }
     .datas p{
         width: 110px;line-height: 20px;font-size: 14px
     }
     h5{
         font-size: 12px;color: #9E9E9E;font-weight: 200;line-height: 1.2;
    }
     .el-menu--horizontal{
         width: 100%;
     }
     .submenu{
         width: 100%;
     }

</style>
