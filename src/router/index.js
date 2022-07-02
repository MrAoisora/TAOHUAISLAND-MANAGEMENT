import Vue from 'vue'
import Router from 'vue-router'
import FrameWork from '@/components/FrameWork'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'frameWork',
      component: FrameWork
    }
  ]
})
