import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const RouterModel = new Router({
  routes: [
    {
      path: '*',
      redirect: {
        path: '/'
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: resolve => require(['@/components/helloWorld'], resolve)
    },
    {
      path: '/',
      name: '主页',
      redirect: '/home',
      meta: {
      },
      component: resolve => require(['@/views/layout'], resolve), // resolve => require(['../views/layout/Layout'], resolve),
      children: [{
        path: 'home',
        name: '主页',
        component: resolve => require(['@/views/home'], resolve),
        meta: {
        }
      }
      ]
    }
  ]
})

export default RouterModel

