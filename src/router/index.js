import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级路由
import Layout from '../views/Layout/index.vue'
import Mine from '../views/Mine/index.vue'

// 引入二级路由
import Home from '../views/Home/index.vue'
import Play from '../views/Play/index.vue'
import Vadio from '../views/Vadio/index.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [{
                path: 'home',
                component: Home
            },
            {
                path: 'play',
                component: Play
            },
            {
                path: 'Vadio',
                component: Vadio
            },
        ]
    },
    {
        path: '/mine',
        component: Mine
    },
]

const router = new VueRouter({
    routes
})

export default router