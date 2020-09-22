import {method, http} from './http.js'

export default {
  login (more) {
    return http(method.post, '/user/login', more)
  },
  register (more) {
    return http(method.post, '/user/reg', more)
  },
  getCode (more) {
    return http(method.post, '/user/getImgCode', more)
  }
}
