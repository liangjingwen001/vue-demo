<template>
  <div class="head">
    我是顶部组件-{{msg}}
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
.head{width: 100%; height: 200px; background-color: #eee}
</style>

