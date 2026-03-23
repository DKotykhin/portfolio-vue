import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import i18n from './i18n'
import HomePage from './pages/HomePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:locale(en|ua)?',
      component: HomePage,
    },
    {
      path: '/:notFound(.*)*',
      component: NotFoundPage,
    },
  ],
})

router.afterEach((to) => {
  window.gtag?.('event', 'page_view', { page_path: to.fullPath })
})

router.beforeEach((to: RouteLocationNormalized) => {
  const locale = (to.params.locale as string) || 'en'
  i18n.global.locale.value = locale as 'en' | 'ua'
  document.title = i18n.global.t('pageTitle')
  return true
})

export default router
