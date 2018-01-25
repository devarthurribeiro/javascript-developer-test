import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Profile from '@/pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/profile/:username',
          name: 'Prodile',
          component: Profile
        }
      ]
    }
  ]
})
