import axios from 'axios' // npm i axios --save

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
    params: more.params,
  })
  .then(res => {
    more.success(res);
  })
  .catch(err => {
    more.error(err);
  })
}
