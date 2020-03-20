// vuex属性计算，在视图里面当变量使用
const getters = {
    total(state,getter) {
      return getter.count * state.price
    },
    count() {
        return 21
    }
  }

  export default getters