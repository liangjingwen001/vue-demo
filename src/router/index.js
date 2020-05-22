import Vue from 'vue'
import Router from 'vue-router' // npm install vue-router --save
import index from "../view/index.vue"

Vue.use(Router)  // 模块化使用需要手动安装

export default new Router({
    mode: 'history',
    routes: [].concat(
        [{
        name: 'login',
        path: '/',
        component(resolve) {require(['../view/login.vue'], resolve)},
        alias: '/login'  // 别名
    },
    {
        name: 'register',
        path: '/register',
        component(resolve) {
            require(['../view/register.vue'], resolve)
        }
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
      meta: {
        needLogin: true
      }
    },
    {
        name: 'index',
        path: '/index',
        component: index,
        meta: {
          needLogin: true
        },
        // redirect: '/detail'  重定向
    }],
    require('./result.js')
    )
})
