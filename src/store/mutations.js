// 全局同步方法
const mutations = {
    islogin(state, login) {
      state.login = login
    },
    setToken(state, token) {
        state.token = token
    }
  }

  export default mutations
