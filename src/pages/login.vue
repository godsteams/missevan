<template>
    <div>
        <commonhead/>
        <div class="container">
            <div class="main-page">
                <form action="/loginsuccess" method="get">
                    <span>登录 猫耳FM</span>
                    <input type="text" placeholder="手机号/邮箱">
                    <div class="pwd">
                        <input type="password" placeholder="密码">
                        <!-- 忘记密码 -->
                        <a href="">忘记密码?</a>
                    </div>
                    <div>
                        <span>
                            <input type="checkbox" value="1" id="check-row-before">
                            <label for="check-row-before">记住我</label>
                        </span>
                        <span>海外手机号登录</span>
                    </div>
                    <input type="submit" value="登录" @click="foo($event)">
                    <router-link to="/register">注册</router-link>
                </form>
                <div class="threelogin">
                        <div class="line-left line"></div>
                        <div class="line-right line"></div>
                        <div>第三方登录</div>
                </div>
                <div class="threeimg">
                    <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101117657&redirect_uri=https%3A%2F%2Fwww.missevan.com%2Fmember%2Fauthqq%3Fbackurl=https%3A%2F%2Fm.missevan.com%2F" class="qqlogin"></a>
                    <a href="https://api.weibo.com/oauth2/authorize?client_id=4018040466&response_type=code&redirect_uri=https%3A%2F%2Fwww.missevan.com%2Fmember%2Fauthweibo%3Fbackurl=https%3A%2F%2Fm.missevan.com%2F" class="weibo"></a>
                    <a href="" class="bilibli"></a>
                </div>
            </div>
        </div>
        <commonfoot class="footer"/>
    </div>
</template>
<script>
import commonhead from "../components/commonHead"
import commonfoot from "../components/commonfooter"
export default {
    components:{
        commonhead,commonfoot
    },
    methods: {
        foo(e){
            e.preventDefault();
            this.$router.push("/loginsuccess")
        }
    },
}
</script>
<style scoped>

@import url("../assets/css/login.css");
.footer{
    position: fixed;
    width: 100%;
    bottom: 0;
}
</style>
