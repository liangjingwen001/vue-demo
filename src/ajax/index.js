import {method, http} from './http.js'
import user from './user.js'

export default Object.assign({
  addNews (more) {
    return http(method.post, '/news/addNews', more)
  },
  selectNews (more) {
    return http(method.get, '/news/selectNews', more)
  },
  delNews (more) {
    return http(method.post, '/news/delNews', more)
  },
  newsDetail (more) {
    return http(method.post, '/news/newsDetail', more)
  }
}, user)
