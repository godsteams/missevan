<template>
    <div>
        <footer>
            <div class="btns">
                <div class="btn1">客户端</div>
                <div class="imgs"></div>
                <div class="btn2" @click="gotop">返回顶部</div>
            </div>
            <div class="bottom-txt">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
        </footer>
    </div>
</template>
<script>
export default {
    methods: {
        gotop(){
            console.log(1)
            window.scrollTo(0,0)
        }
    },
}
</script>
<style scoped>
@import url("../assets/css/common.css");
</style>
