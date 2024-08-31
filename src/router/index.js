import {createWebHashHistory, createRouter} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('../pages/layout/index.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                component: () => import('../pages/index/index.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router