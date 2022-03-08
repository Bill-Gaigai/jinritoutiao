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
      <van-form @submit="onSubmit" ref="loginForm">
        <van-field
          v-model="user.mobile"
          name="mobile"
          placeholder="请输入手机号"
          :rules="UserFormRules.mobile"
          type="number"
          maxlength="11"
        >
          <i slot="left-icon" class="toutiao toutiao-mobile"></i>
        </van-field>

        <van-field
          v-model="user.code"
          type="password"
          name="code"
          placeholder="请输入密码"
          left-icon="music-o"
          :rules="UserFormRules.code"
          maxlength="6"
        >
          <i slot="left-icon" class="toutiao toutiao-mima"></i>

          <template #button>
            <van-count-down
              :time="time"
              format="ss s"
              v-if="isCountDownShow"
              @finish="isCountDownShow = false"
            />
            <van-button
              v-else
              class="NumBtn"
              round
              size="small"
              type="default"
              native-type="button"
              @click="onSendSms"
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

import { authorizationsAPI, sendSmsAPI } from "../../api/index";

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
      // 表单验证规则 start
      // 表单验证：
      //   给van-field 组件内部，有rules，用来配置验证规则：
      //   当表单提交的时候会自动触发表单验证：验证通过——触发submit事件；验证失败，不会触发submit事件
      //   https://vant-contrib.gitee.io/vant/v2/#/zh-CN/form#rule-shu-ju-jie-gou
      UserFormRules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空!",
          },
          {
            pattern: /^1\d{10}$/,
            message: "手机号格式错误!",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空！",
          },
          {
            pattern: /^\d{6}$/,
            message: "验证码格式错误!",
          },
        ],
      },
      // 表单验证规则 end
      // 倒计时 start
      time: 1000 * 60,
      isCountDownShow: false, //控制倒计时效果是否显示，默认为不显示
      // 倒计时 end
    };
  },

  methods: {
    // 1、表单验证 start
    async onSubmit() {
      // 1.1获取表单数据
      const user = this.user;
      // 1.1.1处理表单数据过程中（用户点击登录后，在系统登录之前），给用户登录做出提示
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true, //禁用背景点击
        duration: 2000, // 持续展示 单位毫秒
      });
      // 1.2验证成功，请求登录
      try {
        const res = await authorizationsAPI(user);
        this.$store.commit("setUser", res.data.data); //直接将mutations中的方法映射到原地
        this.$toast.success("登录成功!");
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail("手机号或验证码错误");
        } else {
          this.$toast.fail("登录失败，请稍后重试");
        }
      }
    },
    // 1、表单验证 end
    // --------------------------------------------------------------------------------------
    // 2、点击 发送验证码，验证手机号 start
    async onSendSms() {
      ///2.1验证手机号码，是否通过
      try {
        await this.$refs.loginForm.validate("mobile");
        this.$toast("验证成功！");
      } catch (err) {
        return this.$toast("验证失败！");
      }

      // 2.2验证通过，显示倒计时
      this.isCountDownShow = true;

      // 2.3发送验证码
      // 每个手机号每分钟发送一次
      try {
        await sendSmsAPI(this.user.mobile);
        this.$toast("发送成功!");
      } catch (err) {
        this.isCountDownShow = false;
        if (err.response.status === 429) {
          this.$toast("发送太频繁了！请稍后再试");
        } else {
          this.$toast("发送失败!请重新发送");
        }
      }
    },
    //2、点击 发送验证码，验证手机号 end
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