<template>
  <div>
    <commonhead />
    <!-- 头部 -->
    <div class="herder">{{title.catalog_name}}</div>
    <!-- 导航条 -->
    <div class="list">
      <!-- 锚点# -->
      <a href="#all">全区动态</a>
      <a :href="`#${li.catalog_name_alias}`" v-for=" li in list" :key="li.id">{{li.catalog_name}}</a>
    </div>

    <div>
      <!-- 锚点 -->
      <h6 id="all">
        <b></b>全区动态
      </h6>
      <div v-for="i in intro.slice(0,4)" :key="i.id" class="intro">
        <img :src="i.front_cover" class="fl" />
        <div class="fl">
          <p>{{i.soundstr}}</p>
          <span>{{i.username}}</span>
          <div>
            <span>
              <i></i>
              {{i.view_count | count}}
            </span>
            <span>
              <i></i>
              {{i.duration | duration}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-for=" li in list" :key="li.id">
      <!-- 锚点 -->
      <h6 :id="li.catalog_name_alias">
        <b></b>
        {{li.catalog_name}}
        <span>
          更多
          <i></i>
        </span>
      </h6>

      <!-- 分类简介 -->
      <div v-for="i in datas.slice(0,4)" :key="i.id" class="intro">
        <img :src="i.front_cover" class="fl" />
        <div class="fl">
          <p>{{i.soundstr}}</p>
          <span>{{i.username}}</span>
          <div>
            <span>
              <i></i>
              {{i.view_count | count}}
            </span>
            <span>
              <i></i>
              {{i.duration | duration}}
            </span>
          </div>
        </div>
      </div>
    </div>
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
      title: {}, //抬头名称
      list: [], //导航条名称
      intro: [], //全区动态简介
      datas: [] //分类数据简介
    };
  },
  watch: {},
  computed: {},
  filters: {
    count(v) {
      if (v > 10000) {
        return (v / 10000).toFixed(1) + "万";
      }
    },
    duration(v) {
      let s = v % 60;
      let m = parseInt(v / 64000);
      return m + ":" + s;
    }
  },
  mounted() {
    //获取格式简介数据
    axios.get("mobileWeb/catalogs").then(res => {
      let data = res.data.info;
      for (var i in data) {
        let id = this.$route.params.id;
        if (i == id) {
          this.title = data[id];
          this.list = data[id].son;
          console.log(res.data);
          for (var i in data[id].son) {
            //获取分类简介数据
            axios.get(`/mobileWeb/catalogmenu?order=3&cid=` + i).then(res => {
              this.datas = res.data.info.Datas;
              // console.log(this.title)
              // console.log(this.list)
              // console.log(this.intro)
              console.log(this.datas);
            });
          }
        }
      }
    });

    //获取全区动态简介数据
    let id = this.$route.params.id;
    axios.get(`/mobileWeb/catalogrank?cid=${id}`).then(res => {
      this.intro = res.data.info;
    });
  }
};
</script>
<style scoped>
.fl {
  float: left;
}
.herder {
  line-height: 40px;
  width: 100%;
  position: relative;
  top: 0;
  text-align: center;
  border-bottom: 0.2px solid #e9e9e9;
  background: #fff;
}
.list {
  line-height: 35px;
  border-bottom: 0.2px solid #e9e9e9;
  background: #fff;
  white-space: nowrap;
  overflow-x:scroll ;
}
.list a {
  display: inline-block;
  text-align: center;
  font-size: 14px;
  margin: 0 5px;
}
.intro {
  height: 70px;
  margin: 0px 15px;
  border-bottom: 0.2px solid #e9e9e9;
  padding: 15px 0;
}
.intro img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  margin-right: 10px;
}
.intro p {
  font-size: 16px;
  margin: auto;
  width: 241px;
  margin: 0;
  line-height: 1.2;
  text-align: left;
  padding: 0;
  height: 38px;
  overflow: hidden;
}
.intro span:nth-of-type(1) {
  font-size: 12px;
  color: #727272;
  line-height: 1.3;
}
span i {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url(../assets/img/mini.png);
  background-size: 56px;
  background-position: -44px 27px;
  vertical-align: middle;
  margin-right: 5px;
}
.intro div span {
  margin-right: 20px;
}
.intro div span:nth-of-type(2) i {
  background-position: -29px -44px;
}
h6 {
  line-height: 20px;
  margin: 10px 0;
  padding: 0 15px;
  font-size: 16px;
}
h6 span {
  float: right;
  color: #e9e9e9;
  font-size: 13px;
  vertical-align: baseline;
}
h6 span i {
  background-image: url(../assets/img/xiebi.png);
  background-size: 261px 235px;
  background-position: -223px -186px;
  width: 16px;
  height: 16px;
  margin-left: 5px;
}
b {
  display: inline-block;
  width: 4px;
  height: 16px;
  background: #000000;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
