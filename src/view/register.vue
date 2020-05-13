<template>
  <div class="container">
    <h1>注册页面</h1>
    <div class="content">
      <div><input type="text" placeholder="Username" v-model="userName"></div>
      <div><input type="text" placeholder="Password" v-model="passWord"></div>
      <div><input type="text" placeholder="mailbox" v-model="mailbox"><span @click="getCode">获取验证码</span></div>
      <div class="btn" @click="reg">注册</div>
      <div @click="log">立即登录</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName: '',
      passWord: '',
      mailbox: ''
    }
  },
  methods: {
    reg() {
      this.$ajax.register({
        params: {
          userName: this.userName,
          passWord: this.passWord
        },
        success: (res) => {
          if (res.data.code === 200) {
            this.$router.push({name: 'login'})
          } else {
            alert(res.data.msg)
          }
        }
      })
    },
    getCode() {
      this.$ajax.getCode({
        params: {
          mailbox: this.mailbox
        },
        success: (res) => {
          if (res.data.code === 200) {
           
          } else {
            alert(res.data.msg)
          }
        }
      })
    },
    log() {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{position: fixed; width: 100%; height: 100%; background: linear-gradient(#33FFFF, #9999FF);}
  .btn{width: 10rem; height: 2rem; text-align: center; line-height: 2rem; border-radius: 1rem; background: linear-gradient(to right, #33FFFF, #9999FF); margin: 2rem auto .2rem; color: #fff;}
</style>
