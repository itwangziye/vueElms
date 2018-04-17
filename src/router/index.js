import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=> import('@/page/index/index')
    },
    {
      path:'/button',
      name:'button',
      component:()=> import('@/page/button/index')
    }
  ]
})
