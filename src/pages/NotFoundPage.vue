<template>
  <main class="pt-16 min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center gap-6 px-4" :style="bgStyle">
    <h1 class="text-3xl text-antiqueWhite font-bold text-center">{{ t('title') }}</h1>
    <p class="text-center">{{ t('description') }}</p>
    <a href="/" class="hover:text-antiqueWhite transition-colors duration-300 text-orange font-bold text-lg">
      {{ t('backHome') }}
    </a>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
const t = (key: string) => $t(`NotFound.${key}`)

const bgStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.1)' /%3E%3C/svg%3E")`,
  backgroundSize: '20px 20px',
}
</script>

<style scoped></style>
