import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import('../views/about.vue')
  },
  {
    path: '/projects',
    name: 'projects',
  
    component: () => import('../views/projects.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
  
    component: () => import('../views/testimonials.vue')
  },
  {
    path: '/contact',
    name: 'contact',
  
    component: () => import('../views/contact.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
