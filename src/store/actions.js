// 全局异步方法
const actions = {
    showMessage(context, data) {
        // context包含state,mutations,actions,getters
        // 执行异步操作
      console.log(data)
      context.state.showMessage = data.showMessage
    }
  }

  export default actions
