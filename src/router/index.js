import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'

import home from '@/components/home'
import dailyPassengerFlow from '@/components/passengerFlowReport/dailyPassengerFlow'
import history from '@/components/passengerFlowReport/history'
import vidio from '@/components/passengerFlowReport/vidio'
import showRoom from '@/components/passengerFlowReport/showRoom'
import keyModel from '@/components/passengerFlowReport/keyModel'
import interactive from '@/components/passengerFlowReport/interactive'


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
      component: home,
      children: [
        {
          path:'/dailyPassengerFlow',
          name:'dailyPassengerFlow',
          component: dailyPassengerFlow
        },
        {
          path:'/history',
          name:'history',
          component: history
        },
        {
          path:'/vidio',
          name:'vidio',
          component: vidio
        },
        {
          path:'/showRoom',
          name:'showRoom',
          component: showRoom
        },
        {
          path: '/keyModel',
          component: keyModel
        },
        {
          path: '/interactive',
          component: interactive
        }
      ]
    },
    {
      path:'/HelloWorld',
      name:'HelloWorld',
      component: HelloWorld
    },
    
    
  ]


export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})