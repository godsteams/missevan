<template>
  <div>
    <commonhead class="comheads" />
    <div class="header">
      <header :style="{'background-image' : 'url(' + src + ')'}" class="blur"></header>
    </div>
    <div class="top">
      <img :src="src" alt class="pic" />
      <div class="right">
        <h3>{{data.title}}</h3>
        <img alt="bikabikapiu" src="//static.missevan.com/web_app/lazy_load.png" />
        <p>{{data.username}}</p>
      </div>
    </div>

    <ul>
      <li v-for="l in list" :key="l.id">
        <img :src="l.front_cover" alt />
        <div class="list-right">
          <p class="soundstr">{{l.soundstr}}</p>
          <div class="play">
            <p></p>
            <span>{{l.view_count_formatted}}</span>
          </div>
          <div class="time">
            <p></p>
            <span>{{l.duration |m}}{{":"}} {{l.duration | s}}</span>
          </div>
        </div>
      </li>
    </ul>
    <commonfooter />
  </div>
</template>

<script>
import axios from "axios";
import commonhead from "../components/commonHead";
import commonfooter from "../components/commonfooter";
export default {
  components: {
    commonhead,
    commonfooter
  },
  data() {
    return {
      src: "",
      data: {},
      list: []
    };
  },
  computed: {
    // parsInt
  },
  filters: {
    s(v) {
      let m = parseInt(v / 1000);
      let s = m % 60;
      return s;
    },
    m(v) {
      let m = Math.ceil(v / 100000);
      return m;
    }
  },
  mounted() {
    let id = this.$route.params.id;
    axios.get("/sound/soundalllist?albumid=" + id).then(res => {
      this.list = res.data.info.sounds;
      let src =
        "//static.missevan.com/coversmini/" + res.data.info.album.cover_image;
      this.data = res.data.info.album;
      this.src = src;
    });
  }
};
</script>


<style scoped>
.comheads {
  z-index: 9999;
}
.headder {
  overflow: hidden;
  height: 130px;
}
header {
  height: 150px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 100% 150px;
  position: relative;
  filter: blur(8px);
}

.top {
  position: absolute;
  height: 110px;
  top: 60px;
  left: 10px;
}
.pic {
  width: 110px;
  height: 110px;
  float: left;
}
.right {
  margin-left: 10px;
  float: left;
  width: 225px;
}
.right h3 {
  height: 50px;
  word-break: break-all;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 25px;
  color: white;
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 20px;
}
.right p {
  color: white;
  font-size: 16px;
  display: inline-block;
  margin-left: 10px;
}
.right img {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  vertical-align: middle;
}
ul li {
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
}
ul li img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  float: left;
}
.list-right {
  float: left;
  font-size: 12px;
  color: #616161;
  margin-left: 10px;
}
.soundstr {
  height: 36px;
  width: 286px;
  word-break: break-all;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
.list-right span {
  margin-left: 5px;
}
.play {
  float: left;
  margin-right: 20px;
}
.time {
  float: left;
}
.play p {
  width: 12px;
  height: 12px;
  background: url("../assets/img/xb2.png");
  background-size: 56px 55px;
  background-position: -44px -27px;
  display: inline-block;
  vertical-align: middle;
}
.time p {
  width: 12px;
  height: 12px;
  background: url("../assets/img/xb2.png");
  background-size: 56px 55px;
  background-position: -29px -44px;
  display: inline-block;
  vertical-align: middle;
}
</style>
