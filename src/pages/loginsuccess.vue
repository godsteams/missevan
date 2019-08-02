<template>
    <div>
        <div>
            <nav class="login-suc-nav">
                <router-link to="/">
                    <div></div>
                </router-link>
                <div @click="mecin"></div>
            </nav>
            <!-- 隐藏起来的个人中心 -->
            <div class="login-suc-grzx" ref="grzx" :style="{right:'-100%'}">
                <div>
                    <div class="login-grzx-tx"><img src="//static.missevan.com/avatars/icon01.png" alt=""></div>
                    <span>Mecin</span>
                    <i>M号：6520912</i>
                    <i>小鱼干：999999</i>
                    <div class="mypage">我的主页</div>
                    <ul>
                        <li> <img src="../assets/imgs/sound.svg" alt=""> M-音频</li>
                        <li> <img src="../assets/imgs/news.svg" alt=""> M-新闻</li>
                        <router-link class="loginout" to="/login">退出</router-link>
                    </ul>
                </div>
                    
                
            </div>
            <div class="suc-banner"></div>
            <div class="menu-control">
                <div class="menu-toux"> <img src="//static.missevan.com/avatars/icon01.png" alt=""> <div>Mecin</div></div>
                <div class="menu-left">
                    <span> <div>0</div> 声音</span>
                    <span> <div>0</div> 音单</span>
                </div>
                <div class="menu-right">
                    <span> <div>0</div> 关注</span>
                    <span> <div>0</div> 粉丝</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            n:0
        }
    },
    methods: {
        mecin(){
            this.n++;
            if(this.n % 2 ==1){
                this.$refs.grzx.style.right = "0"
            }else{
                this.$refs.grzx.style.right = "-100%"
            }
    }
    },
}
</script>
<style scoped>
.login-suc-grzx{
    width: 15rem;
    height: 100%;
    background: #000;
    position: fixed;
    top: 40px;
    z-index: 999;
    transition: all 500ms;
}
.login-suc-grzx .loginout{
    font-size: 16px;
    width: 240px;
    position: absolute;
    line-height: 40px;
    height: 40px;
    box-sizing: border-box;
    display: block;
    border-bottom: 1px solid #333;
    text-align: center;
    border: none;
    color: #cd3333;
    display: block;
}
.login-suc-grzx>div{
    height: 180px;
    width: 160px;
    box-sizing: border-box;
    margin: auto;
    left: 0;
    right: 0;
    position: absolute;
}
.mypage{
    margin: 15px auto;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    width: 80px;
    height: 25px;
    background-color: #cd3333;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
}

.login-suc-grzx ul{
    list-style: none;
    position: absolute;
    color: #fff;
    left: -40px;
    width: 150%;
}
.login-suc-grzx ul li{
    border: 1px solid #333;
}
.login-suc-grzx ul li img{
    width: 20px;
    height: 20px;
    margin: 10px;
    vertical-align: middle;
}
.login-suc-grzx>div>span{
    display: inline-block;
    width: 100%;
    line-height: 1;
    font-size: 16px;
    color: #fff;
    text-align: center;
}
.login-suc-grzx>div>i{
    color: #ddd;
    font-size: 12px;
    font-style: normal;
    display: inline-block;
    width: 100%;
    text-align: center;
}
.login-suc-grzx>div>.login-grzx-tx{
    width: 6.25rem;
    height: 6.25rem;
    margin: 10px auto;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 0;
}
.login-suc-grzx>div>.login-grzx-tx>img{
    width: 100%;
    height: 100%;
}
.login-suc-nav{
    position: fixed;
    top: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    background: #000;
    z-index: 13;
    overflow: hidden;
}
.login-suc-nav>a>div{
    float: left;
    width: 114px;
    height: 21px;
    margin: 10px 5px 0 8px;
    background-image: url("../assets/imgs/missevan-nav.png");
    background-size: 100%;
    font-size: 10px;
}
.login-suc-nav>div{
    width: 32px;
    height: 32px;
    margin: 5px 5px 0;
    background: url("../assets/imgs/menu.svg");
    float: right;
}
.suc-banner{
    background: url("../assets/imgs/eyes1.jpg");
    height: 120px;
    margin-top: 40px;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
}
.menu-control{
    position: relative;
    display: flex;
    justify-content: space-between;
    background: #fff;
    box-shadow: rgba(0,0,0,0.25) 0 1px 1px;
    padding: 4px 0;
}
.menu-toux{
    position: absolute;
    top: -61px;
    left: 50%;
    margin-left: -44px;
}
.menu-control>.menu-toux>img{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 4px solid #fff;
    vertical-align: middle;
}
.menu-control>.menu-toux>div{
    text-align: center;
    width: 80px;
    font-size: 16px;
    color: #333;
    font-weight: 700; 
    margin-left: 3px; 
}
.menu-control>.menu-left,.menu-control>.menu-right{
    margin-left: 3px;
    font-size: 16px;
    height: 40px;
    overflow: hidden;
}
.menu-control>.menu-left>span,.menu-control>.menu-right>span{
    margin: 0 4px;
    width: 56px;
    display: inline-block;
    text-align: center;
}
.menu-control>.menu-right{
    margin-left: 0;
    margin-right: 3px;
}
.menu-control>.menu-left>span:nth-of-type(1){
    border-right: solid 1px #d7d7d7;
}
.menu-control>.menu-right>span:nth-of-type(1){
    border-right: solid 1px #d7d7d7;
}
</style>
