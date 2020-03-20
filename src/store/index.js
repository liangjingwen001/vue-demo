import vue from 'vue'   // npm install vuex --save
import vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

vue.use(vuex)

export default new vuex.Store({state,mutations,getters,actions})
