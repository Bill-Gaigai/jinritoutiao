<template>
  <div>
    <Navbar></Navbar>
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