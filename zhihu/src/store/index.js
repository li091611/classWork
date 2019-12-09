import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './action'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations,
  actions,
  modules: {
  }
})
