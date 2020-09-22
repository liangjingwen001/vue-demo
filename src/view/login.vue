<template>
  <div class="container">
    <h3>登录页面</h3>
    <el-form :model="form" label-width="40px">
      <el-form-item label="账号">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="toRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      form: {
        userName: '',
        passWord: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$ajax.login({
        params: {
          userName: this.form.userName,
          passWord: this.form.passWord,
        }
        }).then((res) => {
          if (res.data.code === 200) {
            this.$store.commit('islogin', true)
            this.$store.commit('setToken', res.data.token)
            sessionStorage.setItem('token', res.data.token)
            this.$router.push({name: 'index'})
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
          } else {
            this.$message.error(res.data.msg);
          }
        })
    },
    toRegister() {
      this.$router.push({name: 'register'})
    }
  }
}
</script>

<style scoped>
  .container{padding: 2rem;}
</style>
