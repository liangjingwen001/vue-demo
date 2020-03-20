<template>
  <div class="hello">
    <h1>详情页面</h1>
    <h2 @click="tosonfoot">Essential Links</h2>
    <router-link to="/result"> Go to result</router-link>
    <router-view></router-view>
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
    tosonfoot() {
        this.$router.push({name: 'foot'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
