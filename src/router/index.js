import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import RecepiesPage from '@/pages/RecepiesPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import RecepieView from '@/pages/RecepieView.vue'
import AuthPage from '@/pages/AuthPage.vue'
import { forbidUnauthenticated } from './navigationGuard'
import AddRecepiesPage from '@/pages/AddRecepiesPage.vue'
import EditRecipePage from '@/pages/EditRecipePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      beforeEnter: forbidUnauthenticated,
    },
    {
      path: '/auth',
      name: 'AuthPage',
      component: AuthPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/recepies',
      name: 'RecepiesPage',
      component: RecepiesPage,
    },
    {
      path: '/recepies/:id',
      name: 'RecepieView',
      component: RecepieView,
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage,
    },
    {
      path: '/recepies/add',
      name: 'AddRecepiePage',
      component: AddRecepiesPage,
    },
    {
      path: '/recepies/edit/:id',
      name: 'EditRecipePage',
      component: EditRecipePage,
    },
  ],
})

export default router
