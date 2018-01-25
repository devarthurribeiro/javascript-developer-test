import Vue from 'vue'
import VueX from 'vuex'
import Users from './modules/users'

Vue.use(VueX)

export default new VueX.Store({
  modules: {
    Users
  }
})
