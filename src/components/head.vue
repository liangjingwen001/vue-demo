<template>
  <div class="head">
    <slot name="first"></slot>
    欢迎光临{{msg}}
    <slot name="second"></slot>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus.js";
export default {
  name: 'HelloWorld',
  props: ["msg"],
  data () {
    return {
      data: ''
    }
  },
  created() {
    eventBus.$on('tobrother', (msg) => {
      console.log(msg)
    })
  }
}
</script>

<style scoped>
.head{width: 100%; height: 20px; background-color: rgba(0,0,0, 0.6); color: #fff; font-size: 12px;}
</style>
