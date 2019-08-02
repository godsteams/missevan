<template>
    <div class="albums">
        <div class="tilte"><span></span>全部音单 <button @click="type">类型</button> </div>
        <div class="hide" ref="hide">
           <div class="type_choose"><span @click="cancel">取消</span>类型选择</div>
           <div class="tags">
             <div class="in_tags">全部音单</div>
           </div>
            <div class="row">
              <div class="left" v-for="l in left" :key="l">
                <div class="font1"></div>
                <p>{{l}}</p>
              </div>
              <div class="right" v-for="r in row" :key="r" >
                <div class="line1">
                  </div>
                   <span v-for="s in r" :key="s[0]" @click="classify(s[0])">{{s[1]}} </span> 
                   <span></span>   
              </div>
            </div>
        </div>

        <ul class="musiclist">
          <li class="item" v-for="m in music" :key="m.id" @click="detail(m.id)">
           <div class="pic">
              <img :src="m.front_cover" alt="">
           </div>
           <p class="samlltitle">{{m.title}}</p>
          </li>          
        </ul>
        <button class="more">更多</button>
    </div>
</template>



<script>
import axios from 'axios'

export default {
    data() {
      return {
        music:[],
        info:{},
        left:[],
        row:[],
        span:[],
       

      }
    },
  
  mounted () {
      let url="/explore/tagalbum?order=0"
      axios.get(url)
      .then(res=>{
       this.music=res.data.albums
      })

      let urls="/malbum/recommand"
      axios.get(urls)
      .then(res=>{
         this.info=res.data.info
         let arrs=[]
        for(var i in this.info){  
          this.left.push(i)
            let arr=[]
          for(var j in this.info[i]){
           arr.push(this.info[i][j])
          } 
    
           arrs.push(arr)
        }
       
       this.row=arrs

      })
  },
  methods: {
    type(){
        this.$refs.hide.style.right=0
    },
    cancel(){
        this.$refs.hide.style.right="-100%"
    },
    detail(id){
     
      this.$router.push({name:'album_detail',params:{id:id}})
    },
    classify(i){
       this.$refs.hide.style.right="-100%"     
      axios.get("/explore/tagalbum?order=0&tid="+i)
      .then(res=>{
        this.music=res.data.albums
      })
    }
  },
  
}
</script>

<style scoped>
.albums{position: relative;}
.musiclist:after{content:"";clear: both;display: block;height: 0;overflow: hidden;visibility: hidden;}
.tilte{font-size: 16px;padding: 10px 19px;line-height: 16px}
.tilte span{height:16px ;width: 4px;background: black;display: inline-block;margin-right: 5px;vertical-align: center;line-height: 16px}
.tilte button{width: 64px;height: 24px; background-color: #fff;    color: #757575;    font-size: 13px;line-height: 24px;border-radius: 20px;
    border: 1px solid #e0e0e0;float: right;}

.tilte button:after {
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
.item{width: 50%;float: left;margin-top: 10px}
.musiclist{margin: 0 14px;padding: 10px 0}
.pic{width: 164px;height: 164px;background: url("../assets/img/yuan.png") center center ;background-size:164px }
.pic:nth-of-type(2n){margin-left: 15px}
.item:nth-last-of-type(){text-align: center}
.pic img{width: 145px;height: 145px;}
.samlltitle{height: 40px;width: 145px;color: #616161;font-size: 13px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}

.more{display: block; width: 80%; height: 30px;margin: 10px auto;background-color: #e0e0e0; border: none;font-size: 14px;}
.hide{background: #F5F5F5;position: absolute;top:0;width: 100%;height: 100%;right:-100%;transition: all 1s}
.type_choose{position: relative;text-align: center;box-sizing: border-box;background-color: #fff;height: 39px;font-size:16px;line-height:39px;
    border-bottom: 1px solid #eee;}
.type_choose span{ display: block;position: absolute;left: 10px;color: #9e9e9e;}
.tags{margin: 0 0 10px;background-color: #fff;color: #3d3d3d; font-size: 14px;width: 100%;height: 58px;overflow: hidden;}
.in_tags{border: 1px solid #3d3d3d;margin: 6px 10px;height: 46px;text-align: center;font-size: 14px;line-height: 46px;font-weight: 600;}



.row{width: 100%;margin-bottom: 10px;background: white;position: relative;}
p{text-align: center}
.left{width: 100px;float: left;border-right:1px solid #E1E1E1;position: absolute;height: 92px;background: white;
font-size: 16px;margin-top:10px; }

.left:nth-of-type(2){top:103px;}
.left:nth-of-type(3){height: 184px;top:206px}
.right{float: right;width:274px;background: white;font-size: 14px;text-align: center;line-height: 46px;margin-top:10px; }
.right span{height: 45.5px;display: inline-block;border-left:0;width: 135px;border:1px solid  #E1E1E1 ;float: left;border-top:0;border-left:0;}
.font1{width: 36px;height: 36px;background: url("../assets/img/xb.png") 0 -108px;margin: 14px auto;background-size:261px 235px }
.left:nth-of-type(2) .font1{background: url("../assets/img/xb.png") -38px -108px;;margin: 14px auto;background-size:261px 235px}
.left:nth-of-type(3) .font1{background: url("../assets/img/xb.png") -76px -108px;;margin: 58px auto 0 auto;background-size:261px 235px}



</style>
