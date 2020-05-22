
import Vue from 'vue'
import App from './App'
import toast from "./components/toast";
import modal from "./components/modal/modal";
import store from "./store/index";
import router from "./router/index";
import ElementUI from 'element-ui';
import ajax from './ajax/index.js';

Vue.use(ElementUI);

Vue.component('toast', toast)
Vue.component('modal', modal)

Vue.config.productionTip = false;
Vue.prototype.$ajax = ajax;

router.beforeEach((to, from, next) => {
	if (to.meta.needLogin) {
    if (store.state.login) {
      next();
    } else {
      next('login')
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
