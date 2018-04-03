import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Onsiterepair from '@/components/onsiterepair'
import PhoneList from '@/components/phoneList'
import PhoneDetail from '@/components/phoneDetail'
import PersonDetail from '@/components/personDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Onsiterepair',
      name: 'Onsiterepair',
      component: Onsiterepair
    },
    {
      path: '/PhoneList',
      name: 'PhoneList',
      component: PhoneList
    },
    {
      path: '/PhoneDetail',
      name: 'PhoneDetail',
      component: PhoneDetail
    },
    {
      path: '/PersonDetail',
      name: 'PersonDetail',
      component: PersonDetail
    }
  ]
})
