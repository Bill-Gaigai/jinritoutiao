<template>
  <div>
    <Navbar title="今日头条" background="#ff373c" color="#fff"></Navbar>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script type = "text/ecmascript-6">
import Tabbar from "@/components/Layout/Tabbar.vue";
import Navbar from "@/components/Layout/Navbar.vue";
export default {
  components: {
    Tabbar,
    Navbar,
  },
};
</script>

<style scoped>
</style>