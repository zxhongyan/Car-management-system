import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dailyPassengerFlow from '@/components/passengerFlowReport/dailyPassengerFlow'
import history from '@/components/passengerFlowReport/history'
import vidio from '@/components/passengerFlowReport/vidio'
import login from '@/components/login'
// import App1 from '@/App1'
import home from '@/components/home'
Vue.use(Router)


let constantRouterMap =  [
    {
      path:'/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component: home
    },
    {
      path:'/HelloWorld',
      name:'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path:'/HelloWorld',
    //   name:'HelloWorld',
    //   redirect:'/Hello'
    // },
    // {
    //   path:'/Hello',
    //   name:'Hello',
    //   component: resolve => require(['@/components/HelloWorld'],resolve)
    // },
    // {
    //   path:'/App1',
    //   name:'App1',
    //   redirect:'/page'
    // },
    // {
    //   path:'/page',
    //   name:'page',
    //   component: resolve => require(['@/App1'],resolve)
    // },
    {
      path:'/dailyPassengerFlow',
      name:'dailyPassengerFlow',
      component:dailyPassengerFlow
    },
    {
      path:'/history',
      name:'history',
      component:history
    },
    {
      path:'/vidio',
      name:'vidio',
      component:vidio
    },
  ]


export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})