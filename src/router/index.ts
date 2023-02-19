import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { APP_TITLE } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${APP_TITLE}` : APP_TITLE
})

export default router
