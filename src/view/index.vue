<template>
  <div class="hello">
        <div class="title">我是首页</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    ...mapActions(['testAction']),
    toDetail() {
        this.$router.push({name: 'detail'})
    },
    init() {
      this.$ajax.addUser({
        params: {
          userName: '迪迦',
          passWord: '光之子',
          age: 999
        },
        success: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })

      this.$ajax.getUser({
        params: {
          us: '迪迦'
        },
        success: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })
      }
    },
  created() {
    this.init();
    this.testAction()
    this.$store.dispatch("testAction")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$titleColor: blue;
.hello{color: red;
  .title{color: $titleColor; font-size: 2rem; width: 20rem; background-color: #eee; display: inline-block; height: 10rem}
}
</style>
