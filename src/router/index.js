import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/components/Login'
import MyCell from '@/components/MyCell'
import Address from '@/components/Address'
import AddrMge from '@/components/AddrMge'
import Tick from '@/components/Tick'
import Demo from '@/components/demo'
import Tabbar from '@/components/tabbar'

export default new Router({
  routes: [
    {
      path:'/',
      component:Login
    },
    {
      path:'/mycell',
      component:MyCell
    },
    {
      path:'/address',
      component:Address
    },
    {
      path:'/addrmge',
      name:'addrmge',
      component:AddrMge
    },
    {
      path:'/tick',
      component:Tick
    },
    {
      path:'/demo',
      component:Demo
    },
    {
      path:'/tabbar',
      component:Tabbar
    }
  ]  
})
