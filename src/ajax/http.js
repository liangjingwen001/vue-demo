import axios from 'axios' // npm i axios --save
import store from '../store/index'
import router from '../router/index'

let ajax = axios.create();
let baseURL = 'http://127.0.0.1:3000'

export let method = {
  post: 'post',
  get: 'get',
  options: 'options',
}

export let http = function(type, url, more) {
  more = Object.assign({
    needLogin: false,
    headers: more.headers,
    success: function() {},
    error: function() {},
    finally: function() {}
  }, more)
  return ajax({
    baseURL: baseURL,
    url: url,
    method: type,
    headers: more.headers,
    responseType: more.responseType,
    params: type === 'get' ? more.params : '',
    data: type === 'post' ? more.params : '',
  })
  .then(res => {
    if (res.data.code === 401) {
      store.commit('islogin', false)
      router.push({name: 'login'})
    }
    more.success(res);
  })
  .catch(err => {
    more.error(err);
  })
}
