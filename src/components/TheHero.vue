<template>
  <section
    id="home"
    aria-label="Hero"
    class="flex items-center justify-center pt-16"
    style="min-height: 100vh; min-height: 100svh"
  >
    <div
      class="mx-auto flex w-full max-w-308 flex-col items-center gap-12 bg-transparent px-4 sm:items-start md:px-8"
    >
      <h1
        class="text-antiqueWhite mb-12 text-center text-3xl leading-20 font-semibold sm:text-start sm:text-4xl md:text-5xl lg:text-7xl"
      >
        <span class="fade-in stagger-1 block pb-14">{{ t('title') }}</span>
        <span class="fade-in stagger-2">{{ t('line_1') }}</span>
        <br />
        <span class="fade-in stagger-3 text-orange">{{ t('line_2') }}</span>
      </h1>
      <a
        href="#about-me"
        class="fade-in stagger-4 text-orange border-orange hover:bg-orange hover:text-background inline-block cursor-pointer rounded-lg border px-6 py-3 text-center transition-colors duration-300"
      >
        <span class="text-xl font-bold sm:text-2xl">{{ t('button') }}</span>
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
  animation-delay: 2s;
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
