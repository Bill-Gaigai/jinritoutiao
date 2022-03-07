<template>
  <div class="box">
    <div class="main">
      <div class="logo_img">
        <img src="../../assets/img/下载.png" alt="" />
      </div>
      <Search></Search>
    </div>
    <Tabnav
      :getChannelsList="ChannelsList"
      :getArticlesList="ArticlesList"
    ></Tabnav>
  </div>
</template>

<script type = "text/ecmascript-6">
import Search from "@/components/Layout/Search.vue";
import Tabnav from "@/components/Layout/Tabnav.vue";

import { channelsAPI, articlesAPI } from "@/api/index.js";

export default {
  components: {
    Search,
    Tabnav,
  },
  data() {
    return {
      ChannelsList: [], //频道列表的数据
      ArticlesList: [], //文章列表的数据
    };
  },
  methods: {
    // 频道列表数据的网络请求
    async getChannels() {
      const res = await channelsAPI();
      this.ChannelsList = res.data.data.channels;
      console.log(this.ChannelsList);
    },
    // 文章列表数据的网络请求
    async getarticles() {
      const res = await articlesAPI({
        channel_id: 1,
        timestamp: "2022-02-22", //时间戳不能写死，之后在更换
      });
      this.ArticlesList = res.data.data.results;
      console.log(this.ArticlesList);
    },
  },
  created() {
    this.getChannels();
    this.getarticles();
  },
};
</script>

<style scoped>
::v-deep .van-tab__pane {
  padding: 15px;
}
.main {
  overflow: hidden;
}
.logo_img {
  float: left;
  width: 15%;
  margin-top: 45px;
}
.logo_img img {
  width: 80%;
}
</style>