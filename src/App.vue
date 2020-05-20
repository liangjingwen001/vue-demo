<template>
  <div id="app">
    <router-view></router-view>
    <toast></toast>
  </div>
</template>

<script>
import leftNav from './components/leftNav'
import {mapMutations} from 'vuex'
export default {
  name: 'App',
  components: {
    leftNav
  },
  data () {
    return {
      msg: '父组件传给子组件的数据',
      sonData: ''
    }
  },
  methods: {
    ...mapMutations(['islogin','setToken']),
    getMsg(msg) {
      this.sonData = msg
    }
  },
  computed: {},
  created() {
    this.$store.commit('islogin', false)
  }
}
</script>

<style>
html,body{margin: 0; padding: 0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
