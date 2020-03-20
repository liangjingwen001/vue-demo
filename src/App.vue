<template>
  <div id="app">
    <el-aside width="230px">
      <leftNav></leftNav>
    </el-aside>
    <el-container>
      <router-view></router-view>
    </el-container>
    <!-- <myFoot v-on:toparent="getMsg"></myFoot> -->
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
    this.setToken('12312312312312')
    this.$store.commit('islogin', false)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
