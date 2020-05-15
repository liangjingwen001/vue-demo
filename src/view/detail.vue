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
      id: ''
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

          // console.log(btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')))
          // const str = String.fromCharCode(...new Uint8Array(res.data));
          // this.imgUrl = `data:image/jpeg;base64,${window.btoa(str)}`;
          // console.log(this.imgUrl)
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
          this.$router.push({name: 'index'})
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
          }
        }
      })
    },
  },
  mounted() {
    this.getImg();
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
</style>
