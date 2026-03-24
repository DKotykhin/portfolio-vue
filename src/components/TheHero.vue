<template>
  <section id="home" aria-label="Hero" class="flex items-center justify-center pt-16"
    style="min-height: 100vh; min-height: 100svh;">
    <div class="flex flex-col gap-12 items-center sm:items-start w-full max-w-308 mx-auto px-4 md:px-8 bg-transparent">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center sm:text-start mb-12 text-antiqueWhite leading-20">
        <span class="fade-in stagger-1 block pb-14">{{ t('title') }}</span>
        <span class="fade-in stagger-2">{{ t('line_1') }}</span>
        <br />
        <span class="fade-in stagger-3 text-orange">{{ t('line_2') }}</span>
      </h1>
      <a href="#about-me"
        class="fade-in stagger-4 inline-block text-center text-orange border border-orange px-6 py-3 rounded-lg hover:bg-orange hover:text-background transition-colors duration-300 cursor-pointer">
        <span class="text-xl sm:text-2xl font-bold">{{ t('button') }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import bgImageDesktop from '@/assets/images/bg-full.avif'
import bgImageMobile from '@/assets/images/bg-mobile.avif'

const { t: $t } = useI18n()
const t = (key: string) => $t(`HomePage.${key}`)
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

.stagger-1 {
  animation-delay: 0.4s;
}

.stagger-2 {
  animation-delay: 1.2s;
}

.stagger-3 {
  animation-delay: 2.0s;
}

.stagger-4 {
  animation-delay: 2.8s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
    opacity: 1;
  }
}

section {
  background-image: v-bind("'url(' + bgImageMobile + ')'");
}

@media (min-width: 768px) {
  section {
    background-image: v-bind("'url(' + bgImageDesktop + ')'");
  }
}
</style>
