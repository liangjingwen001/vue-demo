import {method, http} from './http.js'

export default {
  uploadImg(more) {
    http(method.post, '/news/uploadImg', more)
  },
  getImg(more) {
    http(method.post, '/news/getImg', more)
  },
  addNews(more) {
    http(method.post, '/news/addNews', more)
  },
  selectNews(more) {
    http(method.post, '/news/selectNews', more)
  },
  delNews(more) {
    http(method.post, '/news/delNews', more)
  },
  newsDetail(more) {
    http(method.post, '/news/newsDetail', more)
  },
  editNews(more) {
    http(method.post, '/news/editNews', more)
  },
  downloadFile(more) {
    http(method.post, '/news/downloadFile', more)
  },
}
