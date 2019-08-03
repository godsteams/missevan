<template>
    <div>
      <header :style="{'background-image' : 'url(' + src + ')'}"> </header>
          <div class="top">
            <p class="drama-title">{{drama.name}}</p>
            <div class="pic" :style="{'background-image' : 'url(' + src + ')'}">
                <span></span>
            </div>
        </div>
     
        <div class="drama-detail">
           <p>原创 {{drama.author}}</p>
           <p>类型：{{drama.type}}</p>
           <p v-if="serialize">连载中</p>
           <p v-else>已完结</p>
        </div>
        <div class="callout">
            <span></span>选集 <button>全部</button>
        </div>

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="e in episodes" :key="e.id">{{e.name}}</div> 
            </div>
        </div>
        <div class="callout">
            <span></span>简介
        </div>
        <div class="contant">
          <div v-html="drama.abstract"  class="height" v-if="a%2==0"></div>
           <div v-html="drama.abstract"   v-else ></div>
            <span class="btn"  @click="open" ref="openup"> 展开</span>
        </div>




    </div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper'
export default {
    data () {
        return {
            drama:{},
            src:"",
            serialize:true,
            episodes:[],
            a:0,
        }
    },
    mounted() {
         let id= this.$route.params.id;
        axios.get("/dramaapi/getdrama?drama_id="+id)
        .then(res=>{
            console.log(res.data)
            this.drama=res.data.info.drama
           this.src="//static.missevan.com/dramacoversmini/"+res.data.info.drama.cover
           this.serialize=res.data.info.drama.serialize
           this.episodes=res.data.info.episodes.episode
 
        })
       var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true
    });
    },
    methods: {
      
        open(){
        this.a++
        if(this.a%2!=0){
            this.$refs.openup.innerHTML="收起"
        }else{
            this.$refs.openup.innerHTML="展开"
        }
        }
    }
}
</script>

<style scoped>
header{width:100%;height: 216px;padding: 22px 10px;position: relative;box-sizing: border-box;filter: blur(8px) ;
}
.top{position: absolute;z-index: 2;width: 100%;position: absolute;top:40px}
.drama-title{font-size: 16px; line-height: 21px; text-align: center;color: #fff;width:100%;height:42px;}
.pic{height: 180px;width: 180px;background-position: 50%;position: absolute;    top: 45px;left: calc(50vw - 92px);
    background-repeat: no-repeat;    background-size: cover;border: 2px solid #fff;}
.pic span{position: absolute;width: 180px;height: 40px;background: linear-gradient(transparent,#B3B3B3);display: block;bottom: 0;}
.drama-detail{margin-top:46px}
.drama-detail p{ color: #757575; font-size: 12px;text-align: center;margin-bottom: 4px;}
.callout{margin: 10px;font-size: 15px}
.callout span{height:16px ;width: 4px;background: black;display: inline-block;margin-right: 5px;vertical-align: center;line-height: 16px;
vertical-align: middle}
.callout button{width: 64px;height: 24px; color: #757575;font-size: 13px;line-height: 24px; float: right;border: 0;background: transparent;
    font-size: 12px}
.callout button:after {
    content: "";
    display: block;
    position: relative;
    float: right;
    top: 7px;
    right: 12px;
    width: 8px;
    height: 8px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #757575;
    border-bottom: none;
    border-left: none;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
 .swiper-container {
        width: 100%;
        height: 56px;
        margin: 20px auto 30px auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 13px;
        background: #fff;
        width: 106px;
        height: 56px;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin: 0 5px;
        color: #616161;
    }
.contant div{font-size: 14px;color: #616161;margin: 0 10px;white-space: pre-line;overflow: hidden;}
.btn{font-size: 12px;    color: #9e9e9e;    width: 100%;margin: 10px 0 10px 0; 
    text-align: center;display: block}
.height{height: 54px;}
</style>

