<template>
  <div class="tab-content">
    <div class="SoundList">
      <div class="Thumbnail list-sound" v-for="dat in datas"  :key="dat.id">
        <div class="cover">
          <img :alt="dat.soundstr" :src="dat.front_cover" :title="dat.soundstr" class="lazy-image lazy-loaded cover-img"/>
        </div>
        <a class="detail" href="#">
          <div class="title hot">{{dat.soundstr}}</div>
          <div class="statistics">
            <div class="item play-times">{{(dat.view_count/10000).toFixed(1)+"万"}}</div>
            <div class="item duration">{{(dat.duration/1000/60).toFixed(2).replace(".",":")}}</div>
          </div>
        </a>
      </div>           
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            channel:{},
            datas:[]
        }
    },
    mounted() {
    let idss = this.$route.query.id;
    axios.get("/mobileWeb/getchanneldetail?&order=3&channel_id=" + idss)
    .then(result => {
    //   console.log(result.data.info.Datas);
      this.datas = result.data.info.Datas;
    });   
  }
};
</script>
<style>
.Tabs .tab-content {
    padding: 12px;
    position: relative;
    min-height: calc(100vh - 160px);
}
.Thumbnail.list-sound {
    display: block;
    position: relative;
    height: 70px;
    line-height: 70px;
    width: 100%;
    margin: 0;
}
.Thumbnail {
    display: inline-block;
    margin: 5px;
    padding: 0;
}
.Thumbnail.list-sound .cover, .Thumbnail.list-sound .cover .cover-duration, .Thumbnail.list-sound .cover .cover-img {
    border-radius: 4px;
    height: 50px;
    width: 50px;
}
.Thumbnail.list-sound .cover {
    margin: 10px;
    float: left;
}
.Thumbnail.list-sound .cover, .Thumbnail.list-sound .detail {
    overflow: hidden;
    position: relative;
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
.Thumbnail.list-sound .cover .cover-img {
    z-index: 0;
}
.Thumbnail.list-sound .cover .cover-duration, .Thumbnail.list-sound .cover .cover-img {
    display: block;
    position: absolute;
}
.Thumbnail.list-sound .detail {
    float: right;
    padding: 10px 0;
    height: 100%;
    width: calc(100% - 70px);
    color: #424242;
}
.Thumbnail.list-sound .detail .title.hot {
    margin-left: 18px;
}
.Thumbnail.list-sound .detail .title {
    width: 94%;
    height: 36px;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -moz-box;
    display: -webkit-box;
    box-orient: vertical;
    line-clamp: 2;
    line-height: 18px;
    font-size: 12px;
}
.Thumbnail .title {
    display: block;
    color: #616161;
    font-size: 13px;
}
.Thumbnail.list-sound .detail .title.hot:before {
    content: "";
    display: block;
    position: absolute;
    top: 13px;
    left: 0;
    height: 12px;
    width: 12px;
    background-image: url(../assets/img/sprite-icons-thumbnails.png);
    background-position: -44px 0;
    background-size: 56px 55px;
}
.Thumbnail.list-sound .detail .statistics, .Thumbnail.list-sound .detail .statistics .item, .Thumbnail.list-sound .detail .statistics .item:before {
    height: 12px;
    line-height: 12px;
}
.Thumbnail.list-sound:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 10px;
    border-bottom: 1px solid #e0e0e0;
}
.Thumbnail.list-sound .detail .statistics .item {
    font-size: 12px;
    color: #9e9e9e;
    margin-right: 20px;
    padding-left: 18px;
    width: 66px;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    position: relative;
}
.Thumbnail.list-sound .detail .statistics .item.duration:before, .Thumbnail.list-sound .detail .statistics .item.play-times:before {
    background-image: url(../assets/img/sprite-icons-thumbnails.png);
    background-size: 56px 55px;
}
.Thumbnail.list-sound .detail .statistics .item.play-times:before {
    background-position: -44px -27px;
}
.Thumbnail.list-sound .detail .statistics .item:before {
    content: "";
    display: block;
    position: absolute;
    left: 2px;
    top: 1px;
    width: 12px;
}
.Thumbnail.list-sound .detail .statistics .item {
    font-size: 12px;
    color: #9e9e9e;
    margin-right: 20px;
    padding-left: 18px;
    width: 66px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    position: relative;
}
.Thumbnail.list-sound .detail .statistics .item.duration:before {
    background-position: -29px -44px;
}
</style>
