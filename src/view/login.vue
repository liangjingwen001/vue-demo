<template>
  <div class="container">
    <Head msg="米老鼠"><span slot="first">第一次来的</span><span slot="second">下次再来</span></Head>
    <h1>登录页面</h1>
    <div>
      <div><input type="text" placeholder="Username" v-model="userName"></div>
      <div><input type="text" placeholder="Password" v-model="passWord" @keypress.enter="login"></div>
      <div class="btn" @click="login" >登陆</div>
      <div @click="reg">立即注册</div>
    </div>
  </div>
</template>

<script>
import Head from '../components/head.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  components:{Head},
  methods: {
    login() {
      this.$ajax.login({
        params: {
          userName: this.userName,
          passWord: this.passWord
        },
        success: (res) => {
          if (res.data.code == 200) {
            this.$store.commit('islogin', true)
            this.$store.commit('setToken', res.data.token)
            window.sessionStorage.setItem('islogin', true);
            window.sessionStorage.setItem('token', res.data.token)
            this.$router.push({name: 'index'})
          } else {
            this.$store.commit('showToast', res.data.msg)
          }
        }
      })
    },
    reg() {
      this.$router.push({name: 'register'})
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{position: fixed; width: 100%; height: 100%; background: linear-gradient(#33FFFF, #9999FF);
    .btn{width: 10rem; height: 2rem; text-align: center; line-height: 2rem; border-radius: 1rem; background: linear-gradient(to right, #33FFFF, #9999FF); margin: 2rem auto .2rem; color: #fff;}
  }
</style>
