<template>
  <div id="ChannelPage"  v-if="channel">
    <div class="Wall channel-wall">
      <div class="wall-body">
        <span class="channel-title">{{channel.name}}</span>
        <div class="channel-detail">
          <span class="channel-intro">{{channel.sintro}}</span>
          <button class="channel-btn"></button>
        </div>
      </div>
      <div
        class="wall-warp"
        :style="{'background-image' : 'url(' + channel.bigpic + ')'}"
      ></div>
    </div>
    <div class="Tabs">
        <div class="tab-list divider light">
            <router-link :to="{path:'/details/',query:{id:idss}}" class="tab">动态</router-link>
            <router-link :to="{path:'/details/pingluns',query:{id:idss}}" class="tab">评论({{channel.comment_count}})</router-link>
            <router-link :to="{path:'/details/member',query:{id:idss}}" class="tab">成员</router-link>
        </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            channel:{},
            idss:0

        }
    },
    mounted() {
    let id = this.$route.params.id;
    axios.get("/mobileWeb/getChannel?channelid=" + id)
    .then(result => {
    //   console.log(result.data.info.channel);
      this.channel = result.data.info.channel;
      this.idss = result.data.info.channel.id;
    });   
  }
};
</script>
<style>
#ChannelPage .channel-wall {
    height: 230px;
    color: #fff;
}
.Wall {
    display: block;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    overflow: hidden;
}
#ChannelPage .channel-wall .wall-body {
    background: linear-gradient(180deg,rgba(0,0,0,.5),transparent,rgba(0,0,0,.5));
}
.Wall .wall-body {
    padding: 10px;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
}
.Wall .wall-body, .Wall .wall-warp {
    display: block;
    position: absolute;
}
.Wall .wall-warp {
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    z-index: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
#ChannelPage .channel-wall .channel-title {
    display: block;
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 16px;
}
#ChannelPage .channel-wall .channel-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    height: 28px;
    padding: 0 10px;
}
#ChannelPage .channel-wall .channel-detail .channel-intro {
    font-size: 12px;
}
#ChannelPage .channel-wall .channel-detail .channel-btn {
    display: inline-block;
    position: relative;
    height: 24px;
    line-height: 22px;
    width: 60px;
    border: 1px solid #fff;
    border-radius: 12px;
    background-color: rgba(0,0,0,.8);
}
#ChannelPage .channel-wall .channel-detail .channel-btn:after {
    content: "+ \5173\6CE8";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 11px;
    color: #fff;
}
#ChannelPage .Tabs {
    min-height: calc(100% - 230px);
}
.Tabs {
    display: block;
    position: relative;
    min-height: calc(100vh - 120px);
}
.Tabs .tab-list.light {
    margin: 0;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
}
.Tabs .tab-list {
    display: flex;
    position: relative;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    font-size: 12px;
    margin: 6px 0;
    overflow-x: scroll;
    overflow-y: hidden;
}
.Tabs .tab-list .tab.router-link-exact-active, .Tabs .tab-list .tab.router-link-exact-active:after {
    color: #c14a3f;
    border-color: #c14a3f;
}
.Tabs .tab-list .tab, .Tabs .tab-list .tab:after {
    transition: color .2s ease,border-color .2s ease;
}
.Tabs .tab-list .tab:after {
    content: "";
    width: 74px;
    height: 100%;
    display: block;
    position: absolute;
    bottom: 0;
    margin: 0 calc((100% - 74px) / 2);
    border-bottom: 2px solid transparent;
    z-index: 1;
}
.Tabs .tab-list .tab, .Tabs .tab-list .tab:after {
    transition: color .2s ease,border-color .2s ease;
}
</style>
