import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      // component:()=>import('@/views/login/index')
      // component:login
      component: () => import('@/views/login/index'),
    }
  ]
})
