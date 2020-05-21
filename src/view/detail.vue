<template>
  <div class="container">
    <input type="file" @change="uploadImg">
    <router-link to="/result"> Go to result</router-link>
    <img :src="imgUrl" alt="">
    <input type="text" placeholder="标题" v-model="title"><br/>
    <input type="text" placeholder="作者" v-model="author"><br/>
    <textarea name="" id="" cols="30" rows="10" placeholder="内容" v-model="newsContent"></textarea><br/>
    <button @click="addNews">上传</button>
    <button @click="editNews">编辑</button>
    <button @click="downloadImg">下载图片</button>
    <button @click="downloadFile">下载文件</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      img: '',
      imgUrl: '',
      title: '',
      author: '',
      newsContent: '',
      id: '',
    }
  },
  methods: {
    tosonfoot() {
        this.$router.push({name: 'foot'})
    },
    uploadImg(e) {
      let file = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          let data = reader.result.split(',')[1];
          this.imgUrl = e.target.result;
          this.$ajax.uploadImg({
            params: {
              img: data
            },
            success: (res) => {
              console.log(res)
            }
          })
        }
      }
    },
    getImg(e) {
      this.$ajax.getImg({
        params: {
          token: this.$store.state.token
        },
        // responseType: 'arraybuffer',
        success: (res) => {
          this.imgUrl = 'data:image/png;base64,' + res.data.data;

          // console.log('-------------------------------')
          // const str = btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
          // this.imgUrl = 'data:image/png;base64,' + str;
        }
      })
    },
    addNews() {
      this.$ajax.addNews({
        params: {
          title: this.title,
          author: this.author,
          newsContent: this.newsContent,
          token: this.$store.state.token
        },
        success: (res) => {
          if (res.data.code === 200) {
            this.$router.push({name: 'index'})
          } else {
            this.$store.commit('showToast', res.data.msg)
          }
        }
      })
    },
    init(id) {
      this.$ajax.newsDetail({
        params: {
          _id: id,
          token: this.$store.state.token
        },
        success: (res) => {
          let data = res.data.data[0];
          this.title = data.title,
          this.author = data.author,
          this.newsContent = data.newsContent
        }
      })
    },
    editNews() {
      this.$ajax.editNews({
        params: {
          _id: this.id,
          title: this.title,
          author: this.author,
          newsContent: this.newsContent,
          token: this.$store.state.token
        },
        success: (res) => {
          if (res.data.code = 200) {
            this.$router.push({name: 'index'})
          } else {
            this.$store.commit('showToast', res.data.msg)
          }
        }
      })
    },
    downloadImg() {
      this.$ajax.getImg({
        params: {
          token: this.$store.state.token
        },
        success: (res) => {
          let src = 'data:image/png;base64,' + res.data.data;
          const aLink = document.createElement('a');
          aLink.href = src;
          aLink.download = 'test.png';
          aLink.click();
        }
      })
    },
    downloadFile() {
      this.$ajax.downloadFile({
        params: {
          token: this.$store.state.token
        },
        responseType: 'blob',
        success: (res) => {
          // xsls类型：application/vnd.ms-excel
          // 图片类型：image/jpeg
          let blob = new Blob([res.data], {type: "text/xml"})
          const aLink = document.createElement('a');
          aLink.href = URL.createObjectURL(blob);
          aLink.setAttribute('download', '测试.xls');
          aLink.click();
        }
      })
    }
  },
  computed: {},
  mounted() {
    // this.getImg();
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.init(this.$route.query.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    img{width: 100%; height: 300px;}
  }
  .fontSize{font-size: 2rem;}
</style>
