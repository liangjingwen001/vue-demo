// 全局同步方法
const mutations = {
    islogin(state, login) {
      state.login = login
    },
    setToken(state, token) {
        state.token = token
    },
    showToast(state, msg) {
        state.showToast = true;
        state.toastText = msg;
        clearTimeout(state.timer)
        state.timer = setTimeout(() => {
          state.showToast = false;
        }, 2000)
    }
  }

  export default mutations
