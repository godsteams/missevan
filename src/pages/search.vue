<template>
    <div class="search-main">
        <commonhead></commonhead>
        <div class="content">
            <h3>热门搜索</h3>
            <div class="txt"> <span v-for="v in dat.info"> {{v.key}} </span> </div>
            <div class="search-result" v-show="xianshi">
                <h3>搜索 &nbsp; <span> "{{txt}}"  </span> </h3>
                <ul>
                    <li v-for="s in search">
                       <span></span> {{s}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="inp"><input type="search" v-model="txt"><span></span></div>
        <router-link to="/">取消</router-link>
        <commonfooter class="foot"></commonfooter>
    </div>
</template>
<script>
import commonhead from "../components/commonHead"
import commonfooter from "../components/commonfooter"
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    components:{
        commonhead,commonfooter
    },
    data(){
        return {
            msg:[],
            txt:"",
            xianshi:false
        }
    },
    methods: {
        ...mapActions(["getdata"]),
        ...mapActions(["getsearch"])
    },
    computed: {
        ...mapState(["dat"]),
        ...mapState(["search"])      
    },
    watch: {
        txt(){
            if(this.txt == ""){
                this.xianshi=false
                this.search = ""
            }else{
                this.xianshi=true
                this.getsearch("/sound/suggest?s="+this.txt)

            }
        }
    },
    mounted() {
        this.getdata("/mobileWeb/hotsearch")
        
    },
}
</script>

<style scoped>
.search-result{
    height: 500px;
    width: 100%;
    background:#f5f5f5;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0 0 10px;
}
.search-result>h3{
    display: block;
    position: relative;
    height: 40px;
    border-bottom: 1px solid #e0e0e0;
    line-height: 40px;
    font-weight: 400;
    font-size: 14px;
}

.search-result>ul>li{
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
    height: 40px;
    color: #3d3d3d;
    vertical-align: top;
    font-size: 14px;    
}
.search-result>ul>li>span{
    display: inline-block;
    position: relative;
    width: 13px;
    height: 13px;
    margin: 14px 0px 0 0;
    background-image: url(//static.missevan.com/assets/m/images/build/sprite-icons@2x.606db8a9.png);
    background-position: -247px -52px;
    background-size: 261px 235px;
}
.foot{
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100%;
}
.search-main{
    position: relative;
}
.content{
    background: #F5F5F5;
    height: 100%;
    position: fixed;
    padding: 0.625rem;   
}
.content>.txt{
    padding-top: 0.625rem;
}
.content>.txt>span{
    display: inline-block;
    position: relative;
    padding: 4px 10px;
    margin: 5px 6px;
    color: #9e9e9e;
    border: 1px solid #9e9e9e;
    border-radius: 20px;
    background-color: #fff;
    font-size: 12px;
}
.content>h3{
    font-size: 14px;
    color: #424242;
    font-weight: 400;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.625rem;
}
.inp>input{
    position: fixed;
    top: 0;
    height: 1.875rem;
    padding: 0.375rem 0.625rem;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 0.125rem;
    box-sizing: border-box;
    outline:none;
    margin: 0.3125rem 0 0.3125rem 0.625rem;
    width: 72%;
    text-indent: 1.275rem;
}
.search-main>a{
    position: absolute;
    display: block;
    right: 3.25rem;
    font-size: 14px;
    top: 0.625rem;
    color: #ffffff;
}
.inp>span{
    display: block;
    position: absolute;
    top: 13px;
    left: 17px;
    width: 14px;
    height: 14px;
    background: url("../assets/imgs/allimg.png");
    background-position: -247px -36px;
    background-size: 261px 235px;
    opacity: .3;
}
</style>
