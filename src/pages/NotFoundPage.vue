<template>
  <div
    class="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center gap-6 px-4 pt-16"
    :style="bgStyle"
  >
    <h1 class="text-antiqueWhite text-center text-3xl font-bold">{{ t('title') }}</h1>
    <p class="text-center">{{ t('description') }}</p>
    <a
      :href="homeLink"
      class="hover:text-antiqueWhite text-orange text-lg font-bold transition-colors duration-300"
    >
      {{ t('backHome') }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: $t, locale } = useI18n()
const t = (key: string) => $t(`NotFound.${key}`)
const homeLink = computed(() => (locale.value === 'ua' ? '/ua' : '/'))

const bgStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.1)' /%3E%3C/svg%3E")`,
  backgroundSize: '20px 20px',
}
</script>

<style scoped></style>
