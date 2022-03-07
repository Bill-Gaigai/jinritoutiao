<template>
  <div>
    <van-search
      background="#fff"
      shape="round"
      v-model="value"
      placeholder="请输入搜索关键词"
    />
  </div>
</template>

<script type = "text/ecmascript-6">
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
::v-deep .van-search {
  float: right;
  margin-top: 45px;
  width: 85%;
}
</style>