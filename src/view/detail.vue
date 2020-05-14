<template>
  <div class="container">
    <input type="file" @change="uploadImg">
    <button>上传图片</button><br />
    <img :src="imgUrl" alt="">
    <router-link to="/result"> Go to result</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      img: '',
      imgUrl: ''
    }
  },
  methods: {
    tosonfoot() {
        this.$router.push({name: 'foot'})
    },
    uploadImg(e) {
      let file = e.target.files[0];
      console.log(file)
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
        params: {},
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
  },
  mounted() {
    this.getImg();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    img{width: 100%; height: 300px;}
  }
</style>
