import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { APP_NAME } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
})

export default router
