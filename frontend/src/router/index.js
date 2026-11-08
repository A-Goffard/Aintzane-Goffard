import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'inicio', component: HomeView },
  {
    path: '/proyectos/:slug',
    name: 'proyecto',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/ProyectoView.vue'),
    props: true
  },
  {
    path: '/privacidad',
    name: 'privacidad',
    component: () => import(/* webpackChunkName: "legal" */ '../views/PrivacidadView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'no-encontrado',
    component: () => import(/* webpackChunkName: "legal" */ '../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      // Si venimos de otra página, esperamos a que se pinte la portada antes de bajar
      const espera = from.name && from.name !== to.name ? 150 : 0
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, behavior: 'smooth' }), espera)
      })
    }
    return { top: 0 }
  }
})

export default router
