import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Introduction from '@/components/Introduction'
import Binding from '@/components/Binding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction

    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/binding',
      name: 'Binding',
      component: Binding
    }
  ]
})
