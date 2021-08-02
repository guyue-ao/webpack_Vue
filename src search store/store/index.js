// vuex最核心的管理模块
import Vuex from 'vuex'
import Vue from 'vue'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})