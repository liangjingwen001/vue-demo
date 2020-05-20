// 全局同步方法
const mutations = {
    islogin(state, login) {
      state.login = login
    },
    setToken(state, token) {
        state.token = token
    },
    showMessage(state, msg) {
        state.showMessage = true;
        state.totalText = msg;
        setTimeout(() => {
          state.showMessage = false;
        }, 3000)
    }
  }

  export default mutations
