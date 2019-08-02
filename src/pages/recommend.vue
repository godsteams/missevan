<template>
  <div id="recommend">
    <common class="comh" />
    <!-- banner -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="v in banner">
        <img :src="v.pic" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 人气M音 -->
    <div class="Panel sounds">
      <div class="panel-head">
        <div class="panel-title">
          <div class="home-panel-title sound">
            <i></i>
            人气M音
          </div>
        </div>
        <div class="panel-nav">
          <a class="home-panel-nav" href="#">排行榜</a>
        </div>
      </div>
      <div class="panel-body">
        <a class="Thumbnail sound" v-for="q in sound.slice(0,3)" @click="toDetail(q.id)">
          <img :src="q.front_cover" :alt="q.soundstr" :title="q.soundstr" class="lazy-image lazy-loaded cover"/>
          <div class="title">{{q.soundstr}}</div>
          <div class="detail">
            <span class="item play-times">{{q.view_count}}</span>
            <span class="item comments">{{q.comment_count}}</span>
          </div>
        </a>
      </div>
    </div>
    <!-- 频道 -->
    <div class="Panel channels">
      <div class="panel-head">
        <div class="panel-title">
          <div class="home-panel-title channel">
            <i></i>
            频道
          </div>
        </div>
        <div class="panel-nav">
          <a class="home-panel-nav" href="/channels">更多</a>
        </div>
      </div>
      <div class="panel-body">
        <a class="Thumbnail channel" href="#" v-for="w in channel" @click="toDetails(w.id)">
          <div
            :title="w.name"
            class="lazy-image lazy-loaded cover"
            :style="{'background-image' : 'url(' + w.smallpic + ')'}"
          >
            <div class="follow">
              <span>{{w.follow_num}}</span>
            </div>
          </div>
          <div class="title">{{w.name}}</div>
        </a>
      </div>
    </div>
    <!-- 其他 -->
    <div class="Panel sounds" v-for="a in music" :key="a.id">
      <div class="panel-head">
        <div class="panel-title">
          <div class="home-panel-title">
            <i class="catalog-icon-46"></i>
            {{a.title}}
          </div>
        </div>
        <div class="panel-nav">
          <a class="home-panel-nav" href="#">更多</a>
        </div>
      </div>
      <div class="panel-body">
        <a class="Thumbnail sound" v-for="s in a.objects_point" @click="toDetail(s.id)">
          <img :alt="s.soundstr" :src="'//static.missevan.com/coversmini/'+s.cover_image" :title="s.soundstr" class="lazy-image lazy-loaded cover"/>
          <div class="title">{{s.soundstr}}</div>
          <div class="detail">
            <span class="item play-times">{{s.view_count}}</span>
            <span class="item comments">{{s.comment_count}}</span>
          </div>
        </a>      
      </div>
    </div>
    <commonfooter/>
  </div>
</template>

<script>
import axios from "axios";
import common from "../components/common"
import commonfooter from "../components/commonfooter"
export default {
  components:{
    common,commonfooter
  },
  data() {
    return {
      banner: [],
      sound: [],
      channel: [],
      music: [],
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    axios.get("/mobileWeb/newHomepage3").then(result => {
      this.banner = result.data.info.banner;
      this.sound = result.data.info.sound;
      this.channel = result.data.info.channel;
    });
    axios.get("/sound/newhomepagedata").then(result => {
      // console.log(result.data.music);
      this.music = result.data.music;
    });
  },
  methods: {
    toDetail(id){
            this.$router.push({name:"detail",params:{id:id}})
        },
        toDetails(ids){
            this.$router.push({name:"details",params:{id:ids}})
        },
  },
}
</script>

<style>
html,
body {
  position: relative;
  height: 100%;
  font-family: Hiragino Sans GB, 华文细黑, STHeiti, 微软雅黑, Microsoft YaHei,
    SimHei, Helvetica Neue, Helvetica, Arial, sans-serif;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.comh{
  z-index: 9999;
}
.swiper-container {
  width: 100%;
  height: 125px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  width: 100%;
  height: 125px;
}
.swiper-pagination-bullet-active {
  background: #fff !important;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px !important;
  left: 40% !important;
  width: 100%;
}
.Panel {
  display: block;
  position: relative;
  width: 100%;
  background-color: #fff;
  padding-bottom: 16px;
  margin: 10px auto;
  border: 1px solid #eee;
  border-left: none;
  border-right: none;
  background-color: transparent;
  border: none;
}
.Panel .panel-head {
  height: 40px;
  line-height: 40px;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 14px;
}
.Panel .panel-head .panel-title {
  font-size: 16px;
}
.Panel .panel-head .panel-nav,
.Panel .panel-head .panel-title {
  display: inline-block;
}
.home-panel-title.cv,
.home-panel-title.sound {
  width: 100px;
}
.home-panel-title {
  text-align: center;
  font-size: 16px;
  color: #000;
}
.home-panel-title.channel i,
.home-panel-title.sound i {
  background-image: url(../assets/img/sprite-icons.png);
  background-size: 86px 86px;
  display: inline-block;
}
.home-panel-title.sound i {
  background-position: 0 0;
}
.home-panel-title i {
  display: inline-block;
  position: relative;
  top: 4px;
  margin-right: 5px;
  height: 20px !important;
  width: 20px !important;
}
.Panel .panel-head .panel-nav {
  font-size: 14px;
  color: #9e9e9e;
}
.home-panel-nav {
  display: inline-block;
  max-width: 66px;
  text-align: center;
  font-size: 13px;
  color: #9e9e9e;
}
.home-panel-nav:after {
  content: "";
  height: 16px;
  width: 16px;
  display: inline-block;
  position: relative;
  top: 3px;
  background-image: url(../assets/img/sprite-icons@2x.png);
  background-position: -223px -186px;
  background-size: 261px 235px;
}
.Panel.sounds .panel-body {
  overflow-x: auto;
}
.Panel .panel-body {
  min-height: 170px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 14px;
}
.panel-body .Thumbnail {
  margin-left: 0;
  margin-right: 0;
}
.Thumbnail.sound {
  width: 106px;
  height: 163px;
}
.Thumbnail {
  display: inline-block;
  margin: 5px;
  padding: 0;
}
.Thumbnail.sound .cover {
  width: 106px;
  height: 106px;
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
.Thumbnail.sound .title {
  width: 100%;
  height: 36px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  box-orient: vertical;
  line-clamp: 2;
  line-height: 18px;
  margin: 4px 0;
}
.Thumbnail .title {
  display: block;
  color: #616161;
  font-size: 13px;
}
.Thumbnail.sound .detail {
  display: flex;
  justify-content: space-between;
}
.Thumbnail.sound .detail .item {
  position: relative;
  padding-left: 14px;
  font-size: 11px;
  line-height: 11px;
  color: #bdbdbd;
}
.Thumbnail.sound .detail .item.comments:before,
.Thumbnail.sound .detail .item.play-times:before {
  background-image: url(../assets/img/sprite-icons-thumbnails.png);
  background-size: 56px 55px;
}
.Thumbnail.sound .detail .item.play-times:before {
  background-position: -44px -27px;
}
.Thumbnail.sound .detail .item:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  height: 10px;
  width: 12px;
}
.Thumbnail.sound .detail .item.comments:before {
  background-position: -15px -44px;
}
.home-panel-title.channel i {
  background-position: -22px 0;
}
.Panel .panel-body {
  min-height: 170px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Thumbnail.channel .cover {
  width: 100%;
  height: calc((50vw - 28px) / 1.5);
}
.Thumbnail.channel .cover .follow {
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2));
  width: 80px;
  height: 20px;
  padding: 0 5px;
  text-align: right;
  border-top-right-radius: 4px;
}
.Thumbnail.channel .cover .follow span {
  float: right;
  display: inline-block;
  position: relative;
  height: 20px;
  line-height: 20px;
  padding-left: 18px;
  color: #fff;
  font-size: 12px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
}
.Thumbnail.channel .cover .follow span:before {
  content: "";
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  height: 13px;
  background-image: url(../assets/img/sprite-icons-thumbnails.png);
  background-position: -18px -26px;
  -webkit-background-size: 56px 55px;
  -moz-background-size: 56px 55px;
  background-size: 56px 55px;
}
.Thumbnail.channel .title {
  margin-top: 3px;
  width: 100%;
  height: 40px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  box-orient: vertical;
  line-clamp: 2;
  line-height: 20px;
}
.Thumbnail.channel {
  width: calc(50vw - 28px);
  margin: 3px;
}
.Panel.albums .panel-body,
.Panel.channels .panel-body {
  flex-wrap: wrap;
}
.Panel .catalog-icon-46{
    background-position: -66px -44px;
}
.Panel .catalog-icon-46 {
    background-image: url(../assets/img/sprite-icons.png);
    background-size: 86px 86px;
}
</style>
