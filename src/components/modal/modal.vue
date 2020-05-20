<template>
  <div class="container">
    <div class="mask"></div>
    <div class="content">
      <div class="text">126712</div>
      <div class="btn">确定</div>
    </div>
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
  .mask{position: fixed; width: 100%; height: 100%; top: 0; background-color: #000; opacity: .6;}
  .content{width: 14rem; height: 8rem; background-color: #fff; border-radius: .2rem; position: fixed; top: 50%; left: 50%; margin-top: -4rem; margin-left: -7rem; line-height: 2rem; font-size: .8rem;
    .text{height: 6rem;}
    .btn{height: 2rem; line-height: 2rem; border-top:1px solid #eee}
  }
}
</style>
