<template>
  <div class="tab-content">
    <div id="SoundIntro">
      <div class="sound-info">
        <h3 class="title">{{sound.soundstr}}</h3>
        <ul class="status">
          <li class="icon icon-play-times">{{sound.view_count}}</li>
          <li class="icon icon-comments">{{sound.all_comments}}</li>
          <li>音频 ID:{{current.sound_id}}</li>
        </ul>
        <div class="intro-container">
          <div class="intro">
            <p>简介：</p>
            <div v-html="sound.intro"></div>
          </div>
          <span class="btn-text btn-expand"></span>
        </div>
      </div>
      <div class="sound-drama">
        <a class="drama-cover" href="#">
          <img :src="header.cover" />
        </a>
        <a class="drama-details" href="#">
          <div class="drama-title">{{header.name}}</div>
          <div class="drama-type">
            {{header.catalog_name}}
            类型：
            {{header.type_name}}
          </div>
          <div class="drama-latest-update">
            更新至
            {{header.newest}}
          </div>
        </a>
        <div class="btn-base btn-attention btn-subscribe"></div>
      </div>
      <div class="sound-cv">
        <div class="title">
          参演 CV (
          {{cvs.length}}
          )
        </div>
        <div class="cvs-container">
          <div class="cvs-block">
            <div class="Thumbnail cv-in-sound" v-for="cv in cvs" :key="cv.id">
              <img
                :alt="cv.cvinfo.name"
                :src="cv.cvinfo.icon"
                :title="cv.cvinfo.name"
                class="lazy-image lazy-loaded cover"
              />
              <div class="name">{{cv.cvinfo.name}}</div>
              <div class="character">
                饰：
                {{cv.character}}
              </div>
              <div class="group">{{cv.cvinfo.group}}</div>
            </div>
          </div>
          <span class="btn-text btn-expand"></span>
        </div>
      </div>
      <div class="sound-user">
        <a class="avatar" target="_blank" href="#">
          <img
            :alt="user.username"
            :src="user.icon"
            :title="user.username"
            class="lazy-image lazy-loaded"
          />
        </a>
        <div class="user-sound-info">
          <a class="username" target="_blank" href="#">{{user.username}}</a>
          <p class="publish-time">
            发布于：
            2019/07/23 16:12
          </p>
        </div>
        <div class="btn-base btn-attention"></div>
      </div>
      <div class="sound-related">
        <div class="sound-block sound-dramas">
          <div class="section">剧集推荐</div>
          <div class="sound-container">
            <a class="re-drama" href="#" v-for="drama in like.dramas" :key="drama.id">
              <div
                class="cover"
                :style="{'background-image' : 'url(' + drama.front_cover + ')'}"
              ></div>
              <div class="title">{{drama.name}}</div>
            </a>
          </div>
        </div>
        <div class="sound-block sound-channels">
          <div class="section">包含该音频的频道</div>
          <div class="sound-container">
            <a class="Thumbnail channel" href="#" v-for="channel in like.channels" :key="channel.id">
              <div
                :title="channel.name"
                class="lazy-image lazy-loaded cover"
                :style="{'background-image' : 'url(' + channel.smallpic + ')'}"
              >
                <div class="follow">
                  <span>{{channel.follow_num}}</span>
                </div>
              </div>
              <div class="title">{{channel.name}}</div>
            </a>
          </div>
        </div>
        <div class="sound-block sound-sounds">
          <div class="section">相似音频</div>
          <div class="sound-container">
            <a class="Thumbnail sound" href="#" v-for="sound in like.sounds" :key="sound.id">
              <img
                :alt="sound.soundstr"
                :src="sound.front_cover"
                :title="sound.soundstr"
                class="lazy-image lazy-loaded cover"
              />
              <div class="title">{{sound.soundstr}}</div>
              <div class="detail">
                <span class="item play-times">{{sound.view_count}}</span>
                <span class="item comments">{{sound.all_comments}}</span>
              </div>
            </a>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: {},
      header: {},
      comments: {},
      sound: {},
      current: {},
      user: {},
      cvs: [],
      like:{}
    };
  },
  mounted() {
    let ids = this.$route.query.id;
    axios.get("/dramaapi/getdramabysound?sound_id=" + ids).then(result => {
      // console.log(result.data.info.cvs);
      this.detail = result.data.info;
      this.header = result.data.info.drama;
      this.current = result.data.info.current;
      this.cvs = result.data.info.cvs;
    });
    axios.get("/sound/getsound?soundid=" + ids).then(result => {
      // console.log(result.data.info.user);
      this.comments = result.data.info;
      this.sound = result.data.info.sound;
      this.user = result.data.info.user;
    });
     axios.get("/sound/getsoundlike?type=15&sound_id=" + ids).then(result => {
      // console.log(result.data.info.dramas);
      this.like = result.data.info;
    });
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.tab-content {
  padding: 12px 0;
  position: relative;
  min-height: calc(100vh - 160px);
  background-color: #f5f5f5 !important;
}
#SoundIntro {
  position: relative;
}
#SoundIntro .sound-info {
  padding: 0 10px;
  padding-bottom: 18px;
  border-bottom: 1px solid #e0e0e0;
}
#SoundIntro .sound-info .title {
  font-size: 14px;
  font-weight: 400;
  min-height: 24px;
  line-height: 24px;
}
#SoundIntro .sound-info .status {
  list-style-type: none;
  height: 14px;
  line-height: 14px;
  font-size: 10px;
  color: #757575;
}
#SoundIntro .sound-info .intro,
#SoundIntro .sound-info .status {
  margin: 10px 0;
}
#SoundIntro .sound-info .status li.icon {
  padding-left: 16px;
}
#SoundIntro .sound-info .status li {
  display: inline-block;
  position: relative;
  margin-right: 20px;
}
#SoundIntro .sound-info .status li.icon.icon-comments:before,
#SoundIntro .sound-info .status li.icon.icon-play-times:before {
  background-image: url(../assets/img/sprite-icons-thumbnails.png);
  background-size: 56px 55px;
}
#SoundIntro .sound-info .status li.icon.icon-play-times:before {
  background-position: -44px -27px;
}
#SoundIntro .sound-info .status li.icon:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 1px;
  width: 12px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: 100%;
}
#SoundIntro .sound-info .status li.icon.icon-comments:before {
  background-position: -15px -44px;
}
#SoundIntro .sound-info .intro-container {
  display: block;
  position: relative;
}
#SoundIntro .sound-info .intro-container.expand .intro {
  max-height: inherit;
}
#SoundIntro .sound-info .intro-container .intro {
  margin: 5px 0;
  font-size: 12px;
  color: #9e9e9e;
  width: 100%;
  height: 40px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -moz-box;
  display: -webkit-box;
  box-orient: vertical;
  line-clamp: 2;
  line-height: 20px;
  max-height: 40px;
  height: auto;
}
#SoundIntro .sound-info .intro-container.expand .btn-expand {
  transform: rotate(180deg);
}
#SoundIntro .sound-info .intro-container .btn-expand {
  width: 14px;
  height: 8px;
  postcss-sprites: 100%;
  background-image: url(../assets/img/sprite-icons@2x.png);
  background-position: -247px -167px;
  background-size: 261px 235px;
  display: block;
  position: relative;
  margin-left: -webkit-calc(100% - 16px);
  margin-left: -moz-calc(100% - 16px);
  margin-left: calc(100% - 16px);
  transition: transform 0.3s;
}
.btn-text {
  border: none;
  font-size: 14px;
}
#fold-btn,
.btn,
.btn-attention,
.btn-attention.active,
.btn-black,
.btn-grey,
.btn-more,
.btn-pm,
.btn-red,
.btn-share,
.btn-text,
.btn-white,
.form-group input[type="submit"] {
  display: inline-block;
  position: relative;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  margin: 3px;
  box-sizing: border-box;
  transition: color 0.2s ease, background-color 0.2s ease, background 0.2s ease,
    border-color 0.2s ease;
}
#SoundIntro .sound-drama {
  position: relative;
  height: 104px;
  margin: 0 10px;
  padding: 18px 2px 18px 72px;
  border-bottom: 1px solid #e0e0e0;
}
#SoundIntro .sound-drama .drama-cover {
  display: inline-block;
  position: absolute;
  top: 18px;
  left: 2px;
  width: 60px;
  height: 60px;
  border-radius: 4px;
}
#SoundIntro .sound-drama .drama-cover img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
#SoundIntro .sound-drama .drama-details {
  max-width: calc(100% - 72px);
  float: left;
}
#SoundIntro .sound-drama .drama-details .drama-title {
  display: block;
  color: #000;
  font-size: 14px;
  text-decoration: none;
}
#SoundIntro .sound-drama .drama-details .drama-latest-update,
#SoundIntro .sound-drama .drama-details .drama-title,
#SoundIntro .sound-drama .drama-details .drama-type {
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#SoundIntro .sound-drama .drama-details .drama-latest-update,
#SoundIntro .sound-drama .drama-details .drama-type {
  color: #9e9e9e;
  font-size: 12px;
}
#SoundIntro .sound-drama .btn-subscribe:before {
  width: 13px;
  height: 12px;
  postcss-sprites: 100%;
  background-image: url(../assets/img/sprite-icons@2x.png);
  background-position: -247px -67px;
  background-size: 261px 235px;
  content: "";
  display: block;
  position: absolute;
  top: 6px;
  left: 12px;
}
#SoundIntro .sound-drama .btn-subscribe:after {
  content: "\8FFD\5267";
}
.btn-attention:after {
  content: "\5173\6CE8";
}
#SoundIntro .sound-drama .btn-subscribe {
  width: 65px;
  height: 26px;
  margin: 16px 0;
  padding: 3px;
  padding-left: 20px;
  float: right;
  border-color: #ed7760;
  background-color: #ed7760;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
}
#SoundIntro .sound-user {
  position: relative;
  height: 78px;
  margin-bottom: 18px;
  padding: 18px 12px 18px 62px;
  border-bottom: 1px solid #e0e0e0;
}
#SoundIntro .sound-user .avatar {
  display: inline-block;
  position: absolute;
  top: 18px;
  left: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
#SoundIntro .sound-user .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#SoundIntro .sound-user .user-sound-info {
  display: inline-block;
}
#SoundIntro .sound-user .user-sound-info .username {
  display: block;
  margin-bottom: 2px;
  color: #3d3d3d;
  font-size: 14px;
  text-decoration: none;
}
#SoundIntro .sound-user .user-sound-info .publish-time,
#SoundIntro .sound-user .user-sound-info .username {
  height: 20px;
  line-height: 20px;
}
#SoundIntro .sound-user .user-sound-info .publish-time {
  font-size: 12px;
  color: #8c8c8c;
}
#SoundIntro .sound-user .btn-attention {
  float: right;
  height: 26px;
  margin: 6px 0;
  padding: 3px;
  border-color: #ed7760;
  background-color: #ed7760;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
}
.btn-attention {
  width: 65px;
}
#SoundIntro .sound-cv {
  position: relative;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
}
#SoundIntro .sound-cv .title {
  position: absolute;
  top: -10px;
  right: 0;
  left: 0;
  width: 100px;
  margin: 0 auto;
  background-color: #f5f5f5;
  font-size: 12px;
  text-align: center;
}
#SoundIntro .sound-cv .cvs-container {
  display: block;
  position: relative;
}
#SoundIntro .sound-cv .cvs-container .cvs-block {
  max-height: 110px;
  overflow: hidden;
}
.Thumbnail.cv-in-sound {
  width: calc(25% - 10px);
  height: 110px;
  vertical-align: top;
}
.Thumbnail {
  display: inline-block;
  margin: 5px;
  padding: 0;
}
.Thumbnail.cv-in-sound .cover {
  width: 46px;
  height: 46px;
  margin: 0 auto;
  border-radius: 50%;
}
.Thumbnail .cover {
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
}
.Thumbnail.cv-in-sound .name {
  height: 18px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 18px;
}
.Thumbnail.cv-in-sound .character,
.Thumbnail.cv-in-sound .group,
.Thumbnail.cv-in-sound .name {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Thumbnail.cv-in-sound .character,
.Thumbnail.cv-in-sound .group {
  height: 16px;
  color: #9e9e9e;
  font-size: 10px;
  line-height: 16px;
}
#SoundIntro .sound-cv .cvs-container .btn-expand {
  display: block;
  position: relative;
  padding: 5px 0;
  text-align: center;
}
#SoundIntro .sound-cv .cvs-container .btn-expand:before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  margin: 0 auto;
  transform: rotate(-135deg);
  border-top: 2px solid #9e9e9e;
  border-left: 2px solid #9e9e9e;
}
#SoundIntro .sound-related {
    margin: 10px 0;
}
#SoundIntro .sound-related .sound-block {
    margin: 20px 8px;
}
#SoundIntro .sound-related .sound-block .section {
    margin-bottom: 10px;
    font-size: 13px;
    color: #979797;
}
#SoundIntro .sound-related .sound-block .sound-container {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
#SoundIntro .sound-related .sound-block .sound-container .re-drama {
    display: inline-block;
    position: relative;
    width: calc((100vw - 60px) / 3);
    vertical-align: top;
}
#SoundIntro .sound-related .sound-block .sound-container .re-drama .cover {
    display: block;
    position: relative;
    width: 100%;
    height: calc((100vw - 60px) / 3 * 1.3);
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
</style>
