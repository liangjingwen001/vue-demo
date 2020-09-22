
import Vue from 'vue'
import App from './App'
import store from "./store/index";
import router from "./router/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ajax from './ajax/index.js';

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$ajax = ajax

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    if (store.state.token) {
      next()
    } else {
      router.push({name: 'login'})
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
