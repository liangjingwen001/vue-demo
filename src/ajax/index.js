import {method, http} from './http.js'
import user from './user.js'

export default Object.assign({
  login (more) {
    http(method.get, '/index/login', more)
  }
}, user)
