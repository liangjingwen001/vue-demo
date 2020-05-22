<template>
  <div class="container">
    <div v-for="(item, index) in newsList" :key="index" class="content">
      <div>{{item.title}} <span @click="delNews(item._id)">删除</span></div>
      <div>作者：{{item.author}} <span @click="editNews(item._id)">编辑</span></div>
      <p>{{item.newsContent}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      age: 11,
      newsList: [],
    }
  },
  methods: {
    ...mapActions(['testAction']),
    toDetail() {
        this.$router.push({name: 'detail'})
    },
    init() {
      this.$ajax.selectNews({
        params: {
          token: this.$store.state.token
        },
        success: (res) => {
          this.newsList = res.data.data;
        }
      })
    },
    delNews(id) {
      this.$ajax.delNews({
        params: {
          _id: id,
          token: this.$store.state.token
        },
        success: (res) => {
          if (res.data.code === 200) {
            this.init();
          }
        }
      })
    },
    editNews(id) {
      this.$router.push({name: 'detail', query: {id: id}})
    }
  },
  created() {
    // 跳转后再获取数据
    // this.init();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
  // 获取数据后再跳转
  beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter')
      next((vm) => {
        vm.init();
      })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  .content{width: 98%; margin: 1rem auto; border: 1px solid #eee; border-radius: .5rem;}
}
</style>
