import {method, http} from './http.js'

export default {
  getUser (more) {
    http(method.get, '/user/detail', more)
  },
  addUser(more) {
    http(method.post, '/user/add', more)
  }
}
