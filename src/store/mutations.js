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
        setTimeout(() => {
          state.showToast = false;
        }, 3000)
    }
  }

  export default mutations
