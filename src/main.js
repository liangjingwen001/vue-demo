
import Vue from 'vue'
import App from './App'
import head from "./components/head";
import store from "./store/index";
import router from "./router/index";
import ElementUI from 'element-ui';
import ajax from './ajax/index.js';

Vue.use(ElementUI);

Vue.component('myHead', head)

Vue.config.productionTip = false
Vue.prototype.$ajax = ajax

router.beforeEach((to, from, next) => {
	if (to.meta.needLogin) {
    if (store.state.login) {
      next();
    } else {
      next({name: 'login'})
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
