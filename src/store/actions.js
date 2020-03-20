// 全局异步方法
const actions = {
    testAction(context) {
        // context包含state,mutations,actions,getters
        // 执行异步操作
      console.log(context)
    }
  }

  export default actions
