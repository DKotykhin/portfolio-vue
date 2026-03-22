import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import i18n from './i18n'
import HomePage from './pages/HomePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
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

router.beforeEach((to: RouteLocationNormalized) => {
  const locale = (to.params.locale as string) || 'en'
  i18n.global.locale.value = locale as 'en' | 'ua'
  document.title = i18n.global.t('pageTitle')
})

export default router
