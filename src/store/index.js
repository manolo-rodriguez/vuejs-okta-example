import Vue from 'vue'
import Vuex from 'vuex'
import progressBar from './modules/progressBar'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    progressBar
  },
  strict: debug
})
