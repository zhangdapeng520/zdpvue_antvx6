import {createWebHashHistory, createRouter} from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/index',
        children: [
            {
                path: 'index',
                component: () => import('../pages/layout/index.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router