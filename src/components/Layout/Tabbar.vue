<template>
  <div>
    <!-- 底部tabbar -->
    <van-tabbar v-model="active" active-color="#dd504a">
      <van-tabbar-item icon="wap-home" color="#dd504a" to="/layout/home">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="play-circle" to="/layout/play"
        >视频</van-tabbar-item
      >
      <van-tabbar-item icon="video" to="/layout/Vadio">放映厅</van-tabbar-item>
      <van-tabbar-item icon="friends" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type = "text/ecmascript-6">
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style  scoped>
</style>