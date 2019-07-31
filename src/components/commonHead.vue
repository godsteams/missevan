<template>
    <div class="main">
        <!-- 头部 -->
        <header>
            <!-- logo -->
            <div></div>
            <!-- 搜索 -->
            <router-link to="/search"></router-link>
            <!-- 点击显示登录页 -->
            <div @click="click"></div>
        </header>
        <!-- 隐藏的登录页 -->
        <div class="login" ref="login" :style="{right:rg}">
            <!-- 登录页 -->
            <div class="login-top">
                <router-link to="/login" class="clearfix">
                    <div class="avatr"><img src="../assets/imgs/default-icon.jpg"></div>
                    <div class="cont"><span>点击登录</span></div>
                    <div class="arrow"></div>
                </router-link>
            </div>
            <!-- 主站 -->
            <div class="login-main">
                <router-link to="/main">
                    <div class="login-main-img"></div>
                    <div class="login-main-cont"><span>M-主站</span></div>
                    <div class="arrow"></div>
                </router-link>
            </div>
            <!-- 直播 -->
            <div class="login-main">
                <router-link to="/zhibo">
                    <div class="login-main-img img2"></div>
                    <div class="login-main-cont"><span>M-直播</span></div>
                    <div class="arrow"></div>
                </router-link>
            </div>
            <!-- 钱包 -->
            <div class="login-main">
                <router-link to="/money">
                    <div class="login-main-img img3"></div>
                    <div class="login-main-cont"><span>M-钱包</span></div>
                    <div class="arrow"></div>
                </router-link>
            </div>
        </div>
        <!-- 占位div -->
        <div class="stand"></div>
        <!-- 隐藏的搜索页面 -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            rg:"-100%",
        }
    },
    methods: {
        // 点击后显示登录页面
        click(){
            if(this.$refs.login.style.right == "-100%"){
                this.$refs.login.style.right = "0"
            }else{
                this.$refs.login.style.right = "-100%"
            }
        },
    },
}
</script>

<style scoped>
@import url("../assets/css/common.css");
</style>

