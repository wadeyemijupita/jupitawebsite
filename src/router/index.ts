import BankStatementAnalysis from '@/views/BankStatementAnalysis.vue'
import ContactView from '@/views/ContactView.vue'
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
   
  ]
})

export default router
