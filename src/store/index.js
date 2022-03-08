import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOKEN_KEY = "TOUTIAO_USER"

export default new Vuex.Store({
    state: {
        // 每次登录成功之后，先从state中获取之前保存的token值
        user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    },
    mutations: {
        setUser(state, data) {
            state.user = data

            // 为了防止数据刷新后丢失，把数据放在本地存储中
            window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
        }
    },
    actions: {},
    modules: {}
})