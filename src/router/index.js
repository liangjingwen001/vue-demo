import Vue from 'vue'
import Router from 'vue-router' // npm install vue-router --save
import index from "../view/index.vue"

Vue.use(Router)  // 模块化使用需要手动安装

export default new Router({
    mode: 'history',
    routes: [].concat([
        {
            name: 'login',
            path: '/',
            component(resolve) {
                require(['../view/login.vue'], resolve)
            }
        },
        {
            name: 'register',
            path: '/register',
            component: () => import('../view/register.vue')
        },
        {
            name: 'detail',
            path: '/detail',
            component: () => import('../view/detail.vue'),
        //   children: [
        //   {
        //     name: 'head',
        //     path: '/detail/head',   
        //     component: () => import('../components/head.vue')
        //   }
        // ],redirect:'/detail/head' // 子组件，默认显示这个
        },
        {
            name: 'index',
            path: '/news/index',
            component: index,
            meta: {
                isLogin: true
            }
        }],
        require('./result.js')
        )
})