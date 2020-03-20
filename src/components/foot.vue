<template>
  <div class="head">
    我是底部组件
    <button @click="tobrother">子传父</button>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus.js";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '底部给头部的信'
    }
  },
  methods: {
    tobrother() {
      eventBus.$emit("tobrother", this.msg)
    }
  }
}
</script>

<style scoped>
.head{width: 100%; height: 200px; background-color: #eee}
</style>
