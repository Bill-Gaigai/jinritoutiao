<template>
  <div class="main">
    <!-- 状态栏 -->
    <Navbar
      title="登录"
      class="loginNavbar"
      background="#1989fa"
      color="#fff"
    ></Navbar>
    <!-- 登录表单 -->
    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="user.mobile"
          name="用户名"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        >
          <i slot="left-icon" class="toutiao toutiao-mobile"></i>
        </van-field>
        <van-field
          v-model="user.code"
          type="password"
          name="密码"
          placeholder="请输入密码"
          left-icon="music-o"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
          <i slot="left-icon" class="toutiao toutiao-mima"></i>

          <template #button>
            <van-button class="NumBtn" round size="small" type="default"
              >发送验证码</van-button
            >
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script type = "text/ecmascript-6">
import Navbar from "@/components/Layout/Navbar.vue";

import { authorizationsAPI } from "../../api/index";
export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      user: {
        mobile: "",
        code: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      // 获取表单数据
      const user = this.user;
      try {
        const res = await authorizationsAPI(user);
        console.log("登录成功", res);
      } catch (err) {
        if (err.response.status === 400) {
          console.log("手机号或验证码错误");
        } else {
          console.log("登录失败，请稍后重试");
        }
      }
    },
  },
};
</script>

<style  scoped >
.login {
  margin-top: 46px;
}
.NumBtn {
  background-color: #eee;
  color: #999;
  height: 30px;
}
::v-deep .van-field__left-icon {
  padding-top: 2px;
}
.toutiao {
  font-size: 20px;
}
/* .van-cell {
  text-align: center;
} */
</style>