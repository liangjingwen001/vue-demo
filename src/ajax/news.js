import {method, http} from './http.js'

export default {
  uploadImg(more) {
    http(method.post, '/news/uploadImg', more)
  },
  getImg(more) {
    http(method.get, '/news/getImg', more)
  },
}
