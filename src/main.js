import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/icon/local.css'

import './assets/css/index.less' //加载字体样式

// rem适配，动态设置rem基准值
import "amfe-flexible"

import { Tabbar, TabbarItem, NavBar, Search, Tab, Tabs, Toast, Cell, CellGroup, Form, Field, Button, CountDown } from 'vant'
// import { Toast } from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Search).use(Tab).use(Tabs).use(Toast).use(Cell).use(CellGroup).use(Form).use(Field).use(Button).use(Toast).use(CountDown);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')