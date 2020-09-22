<template>
  <div class="container">
    <span>新增新闻</span>
    <el-form :model="form" label-width="40px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="作者" v-if="this.form.author">
        <el-input v-model="form.author" disabled></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="$router.go(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: '',
  data () {
    return {
      form: {
        _id: '',
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$ajax.addNews({
        params: {
          title: this.form.title,
          content: this.form.content,
          _id: this.form._id
        },
        headers: {
          token: this.$store.state.token
        },
        }).then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
            this.$router.go(-1)
          } else {
            this.$message.error(res.data.msg);
          }
        })
    },
    initData() {
      this.$ajax.newsDetail({
        params: {
          _id: this.form._id
        },
        headers: {
          token: this.$store.state.token
        },
      }).then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data[0]
          this.form.title = data.title
          this.form.content = data.content
          this.form.author = data.author
        } else {
          this.$message.error(res.data.msg);
        }
      })
    }
  },
  created() {
    if (this.$route.query.id) {
      this.form._id = this.$route.query.id
      this.initData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{color: #565698; padding: .2rem;
}
</style>
