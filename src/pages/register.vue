<template>
    <div>
        <commonhead/>
            <div>
                <div class="main-pages">
                    <div class="form-grup">
                        <h3>注册账号</h3>
                        <div>
                            <form action="" class="phonenumber">
                                <!-- 国家选择下拉菜单 -->
                                <div class="dropdown" @click="dropdown">
                                    <span ref="sps">中国大陆 (+86)</span>
                                    <i ref="arrow"></i>
                                    <ul v-show="shows">
                                        <li v-for="p,i in phones" @click="pmsg(i)" ref="lis"> {{p.name}} (+{{p.value}}) </li>
                                    </ul>
                                </div>
                                <!-- 手机号输入框 -->
                                <input type="text" class="inp-phone" placeholder="手机号">
                                <!-- 验证码 -->
                                <div class="yzm">
                                    <input type="text" class="inp-yzm" placeholder="验证码">
                                    <span>获取验证码</span>
                                </div>
                                <!-- 昵称 -->
                                <input type="text" placeholder="昵称" class="nicheng">
                                <!-- 密码 -->
                                <input type="password" name="" class="nicheng" placeholder="密码">
                                <input type="submit" value="注册" class="nicheng sub">
                                <div class="inp-footer">
                                    <a href="javascript:;">用邮箱注册</a>
                                    <router-link to="/login">返回登录></router-link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <commonfooter class="comfoo"/>
    </div>
</template>
<script>
import commonhead from "../components/commonHead"
import commonfooter from "../components/commonfooter"
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    data(){
        return {
            n:0,
            shows:false
        }
    },
    components:{
        commonhead,commonfooter
    },
    methods: {
        dropdown(){
            this.n++;
            this.shows = !this.shows
            if(this.n%2==1){
                this.$refs.arrow.style.transform = "rotate(-135deg)"
                
            }else{
                this.$refs.arrow.style.transform = "rotate(45deg)"
            }           
        },
        pmsg(i){
            this.$refs.sps.innerText = this.$refs.lis[i].innerHTML 

        },
        ...mapActions(["getphone"])
    },
    computed: {
        ...mapState(["phones"])
    },
    mounted() {
        this.getphone("/account/supportcountry")
    },

}
</script>

<style scope>
.main-pages{
    margin: 0 36px;
}
.main-pages>.form-grup{
    margin: 10px 0;
    padding: 5px;
    box-sizing: border-box;

}
.main-pages>.form-grup>h3{
    font-size: 16px;
    margin: 12px 0;
    color: #000;
    font-weight: 400;
}
.main-pages>.form-grup .phonenumber{
    margin: 20px 0;
    position: relative;
}
.main-pages>.form-grup .phonenumber .dropdown{
    width: 135px;
    height: 42px;
    font-size: 14px;
    line-height: 30px;
    padding: 5px 10px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
}
.main-pages>.form-grup .phonenumber .dropdown>span{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 6.25rem;
    display: block;
}
.main-pages>.form-grup .phonenumber .dropdown>i{
    top: 14px;
    display: inline-block;
    position: absolute;
    right: 10px;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    transition: .2s ease;
    border: 2px solid #e0e0e0;
    border-top: none;
    border-left: none;
}
.main-pages>.form-grup .phonenumber .dropdown>ul{
    position: absolute;
    z-index: 20;
    top: 46px;
    left: 0;
    width: 100%;
    max-height: 180px;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.2);
}
.main-pages>.form-grup .phonenumber .dropdown>ul>li{
    height: 36px;
    padding: 5px 10px;
    overflow: hidden;
    transition: background-color .2s ease;
    line-height: 26px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.main-pages>.form-grup .phonenumber .inp-phone{
    position: absolute;
    top: 0;
    width: calc(100% - 150px);
    margin: 0;
    height: 42px;
    line-height: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    background: #fff;
    right: 0;
}
.main-pages>.form-grup .phonenumber .yzm{
    left: 0;
    position: relative;
    margin: 20px 0;    
}
.main-pages>.form-grup .phonenumber .inp-yzm{
    width: calc(100% - 120px);
    height: 42px;
    line-height: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    background: #fff;
}
.main-pages>.form-grup .phonenumber .yzm>span{
    display: inline-block;
    color: #fff;
    width: 105px;
    height: 42px;
    font-size: 14px;
    background-color: #424242;
    border-color: #424242;
    line-height: 42px;
    vertical-align: middle;
    text-align: center;
    border-radius: 3px;
    float: right;
}
.main-pages>.form-grup .phonenumber .nicheng{
    box-sizing: border-box;
    font-size: 14px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    display: block;
    width: 400px;
    height: 42px;
    line-height: 30px;
    padding: 5px 10px;
    width: 100%;
    margin: 20px 0;
}
.main-pages>.form-grup .phonenumber .sub{
    background-color: #c14a3f;
    color: #fff;
    border-color: #c14a3f;
    margin-top: 40px;
    height: 40px;
    font-size: 16px;
}
.main-pages>.form-grup .phonenumber .inp-footer{
    display: flex;
    justify-content: space-between;
    margin: 40px 0 20px 0;
    font-size: 14px;
    
}
.main-pages>.form-grup .phonenumber .inp-footer>a{
    color: #9e9e9e;
}
.main-pages>.form-grup .phonenumber .inp-footer>a:nth-of-type(2){
    color: #000;
}
.comfoo{
    position: absolute;
    width: 100%;
    bottom: 0;
}
</style>
