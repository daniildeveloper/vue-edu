import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Introduction from '@/components/Introduction'
import Binding from '@/components/Binding'
import EventHandling from '@/components/EventHandling'
import Transition from '@/components/Transition'
import VuexIntro from '@/components/VuexIntro'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VuexIntro',
      component: VuexIntro
    },
    {
      path: '/intro',
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
    },
    {
      path: '/event-handling',
      name: 'EventHandling',
      component: EventHandling
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition
    }
  ]
})
