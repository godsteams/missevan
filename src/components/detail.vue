<template>
  <div id="SoundPage"  v-if="comments.sound">
    <div id="SoundPlayer" class="is-ios">
      <div 
      class="cover"      
      :style="{'background-image' : 'url(//static.missevan.com/mosaic/' + comments.sound.cover_image + ')'}">
        <div class="record-disk">
          <div
            class="disk-cover"
           :style="{'background-image' : 'url(' + comments.sound.front_cover + ')'}"
          ></div>
        </div>
      </div>
      <div class="controller">
        <div class="btn-icon btn-play"></div>
      </div>
      <div class="progress-bar">
        <div class="loaded" style="width: 3.312%;"></div>
        <div class="played" style="width: 0%;">
          <div class="thumb draggable"></div>
        </div>
      </div>
    </div>
    <div class="sound-action-container">
      <ul class="sound-action">
        <li class="share">
          <i></i>
          <span>分享</span>
        </li>
        <li class="like">
          <i></i>
          <span>喜欢</span>
        </li>
        <li class="download">
          <i></i>
          <span>下载</span>
        </li>
      </ul>
      <div class="btn-larger btn-red btn-open-in-client">用客户端打开</div>
    </div>
    <div class="Tabs" id="SoundMeta">
      <div class="tab-list divider">
        <router-link :to="{path:'/detail/',query:{id:ids}}" class="tab">简介</router-link>
        <router-link :to="{path:'/detail/pinglun',query:{id:ids}}" class="tab">评论({{comments.comment_count}})</router-link>
        <router-link :to="{path:'/detail/pic',query:{id:ids}}" class="tab">图片</router-link>
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
      ids:0,
      detail: {},
      header: {},
      comments:{},
    };
  },
mounted() {
    let id = this.$route.params.id;
    axios.get("/dramaapi/getdramabysound?sound_id=" + id)
    .then(result => {
      // console.log(result.data.info.current.sound_id);
      this.detail = result.data.info;
      this.header = result.data.info.drama;
      this.ids=result.data.info.current.sound_id;
    });
    axios.get("/sound/getsound?soundid=" + id)
    .then(result => {
      // console.log(result.data.info.sound);
      this.comments = result.data.info;
    });
    
  }
};
</script>

<style>
#SoundPlayer {
  position: relative;
  height: 325px;
}
#SoundPlayer .cover .record-disk {
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 0;
  right: 0;
  height: 220px;
  text-align: center;
  overflow: hidden;
}
#SoundPlayer .cover .record-disk .disk-cover {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
#SoundPlayer .cover {
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  z-index: 0;
  /* background-image: url(../assets/img/back.jpg); */
  display: block;
}
#SoundPlayer .comic,
#SoundPlayer .cover,
#SoundPlayer .video {
  position: absolute;
  top: 0;
  width: 100%;
  height: 325px;
  overflow: hidden;
}
#SoundPlayer .controller {
  position: absolute;
  z-index: 5;
  right: 10px;
  bottom: 20px;
  width: 48px;
  height: 30px;
  background-color: hsla(0, 0%, 84%, 0.4);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: bottom 0.5s ease;
}
#SoundPlayer .controller .btn-icon.btn-pause,
#SoundPlayer .controller .btn-icon.btn-play {
  background-image: url(../assets/img/controls.png);
  background-size: 120px 102px;
}
#SoundPlayer .controller .btn-icon.btn-play {
  margin-left: 1px;
  background-position: -75px 0;
}
#SoundPlayer .controller .btn-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-top: 1px;
  background-repeat: no-repeat;
}
#SoundPlayer .progress-bar {
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 4px;
  padding: 1px 0;
  z-index: 4;
  cursor: none;
  user-select: none;
}
#SoundPlayer .progress-bar:before {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  right: 0;
  bottom: -2px;
  left: 0;
}
#SoundPlayer .progress-bar .loaded {
  background-color: #b2b2b2;
}
#SoundPlayer .progress-bar .loaded,
#SoundPlayer .progress-bar .played {
  position: absolute;
  top: 1px;
  left: 0;
  width: 0;
  height: 2px;
}
#SoundPlayer .progress-bar .played {
  background-color: #e63c3c;
}
#SoundPlayer .progress-bar .played .thumb {
  position: absolute;
  top: -10px;
  right: -7px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
}
#SoundPlayer .progress-bar .played .thumb:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
}
#SoundPlayer .progress-bar:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 1px;
  right: 0;
  bottom: 1px;
  background-color: #d6d6d6;
  z-index: -1;
}
.sound-action-container, .sound-action-container .sound-action {
    display: flex;
    
}
.sound-action-container {
    align-items: center;
    padding: 14px 12px 10px;
    background-color: #fff;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.05);
    justify-content: space-around;
}
.sound-action-container {
    align-items: center;
    padding: 14px 12px 10px;
    background-color: #fff;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.05);
}
.sound-action-container .sound-action li {
    padding: 0 2px;
    text-align: center;
    cursor: pointer;
}
.sound-action-container .sound-action li.like i, .sound-action-container .sound-action li.share i {
    width: 35px;
    height: 35px;
    postcss-sprites: 100%;
    background-image: url(../assets/img/sprite-icons@2x.png);
    background-size: 261px 235px;
}
.sound-action-container .sound-action li.share i {
    background-position: -149px -74px;
}
.sound-action-container .sound-action li i {
    display: block;
    border-radius: 50%;
}
.sound-action-container .sound-action li span {
    display: block;
    margin-top: 3px;
    font-size: 10px;
}
.sound-action-container .sound-action li.like i {
    background-position: 0 -146px;
}
.sound-action-container .sound-action li.download i {
    background-position: -74px -146px;
}
.sound-action-container .sound-action li.download i, .sound-action-container .sound-action li.like.active i {
    width: 35px;
    height: 35px;
    postcss-sprites: 100%;
    background-image: url(../assets/img/sprite-icons@2x.png);
    background-size: 261px 235px;
}
.sound-action-container .btn-open-in-client {
    width: 120px;
    height: 32px;
    margin-left: 8px;
    border-color: #ed7760;
    background-color: #ed7760;
    font-size: 12px;
    line-height: 18px;
}
.btn-larger {
    padding: 6px 18px;
    font-size: 16px;
    height: 30px;
    line-height: 16px;
}
.btn-attention, .btn-red, .form-group input[type=submit] {
    color: #fff;
    background-color: #c14a3f;
    border-color: #c14a3f;
}
#fold-btn, .btn, .btn-attention, .btn-attention.active, .btn-black, .btn-grey, .btn-more, .btn-pm, .btn-red, .btn-share, .btn-text, .btn-white, .form-group input[type=submit] {
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    margin: 3px;
    box-sizing: border-box;
    transition: color .2s ease,background-color .2s ease,background .2s ease,border-color .2s ease;
}
.sound-action-container .sound-action {
    flex-grow: 1;
    justify-content: space-around;
    list-style-type: none;
}
#SoundMeta {
    min-height: calc(100% - 325px - 68px);
}
.Tabs {
    display: block;
    position: relative;
    min-height: calc(100vh - 120px);
    background-color: #f5f5f5!important;
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

.Tabs .tab-list .tab, .Tabs .tab-list .tab:after {
    transition: color .2s ease,border-color .2s ease;
}
.Tabs .tab-list .tab {
    position: relative;
    display: inline-block;
    text-align: center;
    flex: 1 0 auto;
    cursor: pointer;
    z-index: 0;
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
.Tabs .tab-list.divider .tab:first-child:before {
    display: none;
}
.Tabs .tab-list.divider .tab:before {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
    border-left: 1px solid #e0e0e0;
    height: 18px;
}
.Tabs .tab-list .tab.router-link-exact-active, .Tabs .tab-list .tab.router-link-exact-active:after {
    color: #c14a3f;
    border-color: #c14a3f;
}
</style>
