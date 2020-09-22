module.exports = [
    {
        name: 'result',
        path: '/result',
        component: () => import('../view/result.vue')
    },
    {
        name: 'addNews',
        path: '/news/addNews',
        component: () => import('../view/addNews.vue'),
        meta: {
            isLogin: true
        }
    }
]