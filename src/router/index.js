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
            {
                path: '/graph_width',
                component: () => import('../pages/graph_width/index.vue'),
            },
            {
                path: '/update_node',
                component: () => import('../pages/update_node/index.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router