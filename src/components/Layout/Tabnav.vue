<template>
  <div>
    <van-tabs>
      <van-tab v-for="obj in getChannelsList" :key="obj.id" :title="obj.name">
      </van-tab>
    </van-tabs>

    <van-cell-group>
      <van-cell
        class="articleList"
        v-for="obj in getArticlesList"
        :key="obj.art_id"
        :title="obj.title"
        value="default"
        :label="obj.aut_name"
      />
    </van-cell-group>
    <!-- <div class="add">点击+选择频道</div> -->
  </div>
</template>

<script type = "text/ecmascript-6">
export default {
  props: {
    getChannelsList: Array,
    getArticlesList: Array,
  },
  data() {
    return {
      num: 0,
    };
  },
};
</script>

<style  scoped>
.add {
  width: 44px;
  height: 44px;
  background-color: red;
  float: right;
}
.van-cell-group {
  padding: 10px 0;
  width: 100%;

  border-bottom: 1px solid rgb(243, 242, 242);
}
.van-cell__title {
  flex: 3;
}
.van-cell__title span {
  display: inline-block;
}
</style>
