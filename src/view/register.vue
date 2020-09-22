<template>
  <div class="container">
    <h3>注册页面</h3>
    <el-form :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.passWord"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="form.confirm"></el-input>
      </el-form-item>
      <!-- <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item> -->
      <el-form-item label="验证码">
        <el-input v-model="form.code" style="width: 160px"></el-input>
        <img src="http://127.0.0.1:3000/user/getImgCode" class="img" ref='codeImg' @click="getCode">
        <!-- <el-button @click="getCode">获取验证码</el-button> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button @click="toLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        userName: '',
        passWord: '',
        confirm: '',
        email: '',
        code: ''
      },
      src: ''
    }
  },
  methods: {
    register() {
      if (!this.form.userName) {
        this.$message.error('请输入账号');
        return
      } else if (!this.form.passWord) {
        this.$message.error('请输入密码');
        return
      } else if (!this.form.confirm) {
        this.$message.error('请确认密码');
        return
      } else if (this.form.passWord !== this.form.confirm) {
        this.$message.error('两次输入的密码不一致');
        return
      } else if (!this.form.code) {
        this.$message.error('请输入验证码');
        return
      }

      this.$ajax.register({
        params: {
          userName: this.form.userName,
          passWord: this.form.passWord,
          code: this.form.code,
        }
        }).then((res) => {
          if (res.data.code === 200) {
            this.$router.push({name: 'login'})
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
          } else if (res.data.code === 1002) {
            this.getCode()
            this.$message.error(res.data.msg);
          } else {
            this.$message.error(res.data.msg);
          }
        })
    },
    toLogin() {
      this.$router.push({name: 'login'})
    },
    getCode() {
      // let re = /@/ig
      // if (!this.form.email) {
      //   this.$message.error('请输入邮箱');
      //   return
      // } else if (!re.test(this.form.email)) {
      //   this.$message.error('请输入正确的邮箱');
      //   return
      // }
      // this.$ajax.getCode({
      //   params: {
      //     mailbox: this.form.email
      //   }
      // }).then((res) => {
      //   if (res.data.code === 200) {
      //     console.log(res.data.data)
      //     this.src = res.data.data
      //   } else {
      //     this.$message.error(res.data.msg);
      //   }
      // })
      this.$refs.codeImg.src = 'http://127.0.0.1:3000/user/getImgCode?d='+Math.random()
    }
  }
}
</script>

<style scoped>
  .container{padding: .4rem;}
  .img{
    width: 114px;
    height: 40px;
    vertical-align: top;
  }
</style>
