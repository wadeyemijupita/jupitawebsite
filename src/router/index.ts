import BankStatementAnalysis from '@/views/BankStatementAnalysis.vue'
import ContactView from '@/views/ContactView.vue'
import CoreServices from '@/views/CoreServices.vue'
import DemoSuccess from '@/views/DemoSuccess.vue'
import FlowkyAi from '@/views/FlowkyAi.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/flowkyai',
      name: 'flowkyai',
      component: FlowkyAi
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/BankStatementAnalysis',
      name: 'BankStatementAnalysis',
      component: BankStatementAnalysis
    },
    {
      path: '/coreservices',
      name: 'coreservices',
      component: CoreServices
    },
    {
      path: '/demo-success',
      name: 'demosuccess',
      component: DemoSuccess
    }
    
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    // Only scroll to element if hash exists AND doesn't contain a slash
    if (to.hash && /^#[^\s\/]+$/.test(to.hash) && document.querySelector(to.hash)) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router
