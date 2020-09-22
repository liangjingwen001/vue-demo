import axios from 'axios' // npm i axios --save
import router from "../router/index";

let ajax = axios.create();

let baseURL = 'http://49.234.67.70:3000'
// let baseURL = 'http://127.0.0.1:3000'

export let method = {
  post: 'post',
  get: 'get',
  options: 'options',
}

export let http = function(type, url, more) {
  more = Object.assign({
    needLogin: false,
    headers: more.headers
  }, more)
  return new Promise((resolve, reject) => {
    ajax({
      baseURL: baseURL,
      url: url,
      headers: more.headers,
      method: type,
      params: type === 'get' ? more.params : '',
      data: type === 'post' ? more.params : '',
    })
    .then(res => {
      resolve(res);
      if (res.data.code === 401) {
        router.push({name: 'login'})
      }
    })
    .catch(err => {
      reject(err);
    })
  }) 
}
