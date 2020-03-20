<template>
  <div class="hello">
    <h1>我是结果页</h1>
    <h2 @click="toDetail">Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toDetail() {
        this.$router.push({name: 'detail'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
