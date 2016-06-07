import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { session } from '../utils/storage'

export default new Vuex.Store({
  state: {
    user: session.get('user') // 记录用户信息, null 说明用户未登录
  },
  mutations: {
    setUser (state, userObj) {
      state.user = userObj
      session.set('user', userObj)
    }
  }
})
