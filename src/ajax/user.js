import {method, http} from './http.js'

export default {
  register(more) {
    http(method.post, '/user/reg', more)
  },
  login(more) {
    http(method.post, '/user/login', more)
  },
  getCode(more) {
    http(method.post, '/user/getCode', more)
  }
}
