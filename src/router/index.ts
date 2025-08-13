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
   
  ]
})

export default router
