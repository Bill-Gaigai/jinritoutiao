import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: () =>
            import ('@/views/Layout'),

        redirect: '/layout/home',
        children: [{
                path: 'home',
                component: () =>
                    import ('@/views/Home'),
            },
            {
                path: 'play',
                component: () =>
                    import ('@/views/Play'),
            },
            {
                path: 'Vadio',
                component: () =>
                    import ('@/views/Vadio'),
            },
        ]
    },
    {
        path: '/mine',
        component: () =>
            import ('@/views/Mine'),

    },
    {
        path: '/login',
        component: () =>
            import ('@/views/Login'),

    },
]

const router = new VueRouter({
    routes
})

export default router