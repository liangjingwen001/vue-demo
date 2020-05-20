<template>
  <div class="container">
    <div class="text" v-if="this.$store.state.showToast">{{this.$store.state.toastText}}</div>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: [],
  data () {
    return {}
  },
  watch: {
    showTotal(val) {
      console.log(val)
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  .text{width: 10rem; height: 2rem; background-color: rgba(00, 00, 00, .6); border-radius: .2rem; color: #fff; position: fixed; top: 50%; left: 50%; margin-top: -10%; margin-left: -5rem; line-height: 2rem; font-size: .8rem;}
}
</style>
