<template>
  <div class="tab-content">
    <span class="admins-title">
      频道管理员
      （{{peoples.length}}）
    </span>
    <div class="admins-container">
      <a href="#" class="Thumbnail cv" v-for="people in peoples" :key="people.id">
        <div
          class="cover"
          :style="{'background-image' : 'url(' + people.avatar2 + ')'}"
        ></div>
        <div class="name">{{people.username}}</div>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      peoples: []
    };
  },
  mounted() {
    let idss = this.$route.query.id;
    axios.get("/mobileWeb/channeladmin?channel_id=" + idss).then(result => {
      console.log(result.data.info);
      this.peoples = result.data.info;
    });
  }
};
</script>
<style>
.tab-content {
    padding: 12px;
    position: relative;
    min-height: calc(100vh - 160px);
}
.admins-title {
    display: block;
    position: relative;
    width: 100%;
    height: 30px;
    line-height: 22px;
    font-size: 12px;
}
.admins-title:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -12px;
    right: -12px;
    border-bottom: 1px solid #e0e0e0;
}
.admins-container {
    width: 100%;
    padding: 10px;
}
.admins-container>.Thumbnail.cv {
    position: relative;
    height: 70px;
    width: 70px;
    margin: 0;
}
.Thumbnail.cv {
    width: 80px;
    height: 90px;
    margin: 5px 10px;
    text-align: center;
}
.Thumbnail {
    display: inline-block;
    margin: 5px;
    padding: 0;
}
.admins-container>.Thumbnail.cv:before {
    content: "";
    display: block;
    position: absolute;
    right: 10px;
    top: 36px;
    z-index: 1;
    height: 15px;
    width: 15px;
    background-image: url(../assets/img/sprite-icons@2x.png);
    background-position: 0 -220px;
    background-size: 261px 235px;
}
.admins-container>.Thumbnail.cv .cover {
    height: 50px;
    width: 50px;
}
.Thumbnail.cv .cover {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: auto;
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
.Thumbnail.cv .name {
    margin: 2px auto 0;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #616161;
    width: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
