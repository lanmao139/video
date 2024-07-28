import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        header: true
      }      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        header: false
      }
    },   
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
      meta: {
        header: true
      }
    },      
  ]
})

export default router
