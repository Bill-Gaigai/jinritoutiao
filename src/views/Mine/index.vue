<template>
  <div>
    <van-nav-bar left-arrow title="今日头条" class="vanNanbar" fixed />
    <div class="main">
      <p>我是我的组件</p>
    </div>
  </div>
</template>

<script type = "text/ecmascript-6">
import Navbar from "@/components/Layout/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style  scoped>
.vanNanbar {
  background-color: red !important;
}
::v-deep .van-nav-bar__title {
  color: #fff;
  font-weight: 500;
  font-size: 20px;
}
::v-deep .van-icon-arrow-left {
  color: #fff;
  text-align: center;
  line-height: 46px;
}
.main {
  margin-top: 46px;
}
</style>