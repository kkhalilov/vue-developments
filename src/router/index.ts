import { createRouter, createWebHistory } from 'vue-router'
import TableView from '../views/table/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableView,
    },
  ],
})

export default router
