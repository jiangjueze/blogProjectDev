import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import blog from './modules/blog'

Vue.use(Vuex) // 在这里use能够保证不报错，在main.js里用的话会在import的时候导致报错(解析的顺序问题)

export default new Vuex.Store({
  modules:{
    auth,
    blog
  }
})