<template>
  <div class="tab-content">
        <ul>
          <li v-for="image in images" :key="image.id">
            <img :src="image.front_cover"/>
          </li>
        </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        images:[],
    };
  },
  mounted() {
    let ids = this.$route.query.id;
    axios.get("sound/getSortedImage?soundid=" + ids).then(result => {
      console.log(result.data.info);
      this.images=result.data.info;
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
.tab-content ul{
    overflow: hidden;
}
.tab-content ul li{
    float: left;
    width: 33.33333%;
    padding: 5px;
}
.tab-content ul li img {
    width: 100%;
    padding: 2px;
    border-radius: 4px;
}
</style>
