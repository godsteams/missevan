<template>
  <div id="app">
    <!-- <h1>你好</h1> -->
    <!-- <albums/> -->
    <!-- <dramadetail/> -->
    <router-link to="/dramadetail">广播剧详情</router-link>
    <router-link to="/albums"> 音单</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import albums from "./pages/albums"
import dramadetail from "./pages/dramadetail"
export default {
  name: 'app',
  components: {
    // albums
    //  dramadetail
  }
}
</script>

<style>
@import url(./assets/reset.css);
body{background:  #F5F5F5}
</style>
