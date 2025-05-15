import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/views/Forms/LoginForm.vue'
import RegisterForm from '@/views/Forms/RegisterForm.vue'
import HomePage from '@/views/Pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
  ],
})

export default router
