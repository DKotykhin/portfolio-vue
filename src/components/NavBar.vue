<template>
  <div class="fixed top-0 w-full z-50 bg-background flex justify-center">
    <div class="px-4 md:px-8 w-full max-w-360 flex items-center justify-between gap-4 h-16">
      <a href="#home">
        <img :src="logo" alt="Logo" width="40" height="40"
          class="cursor-pointer hover:scale-125 transition-transform duration-300" />
      </a>
      <nav class="hidden md:flex gap-4">
        <a v-for="link in navLinks" :key="link.id" :href="link.href"
          :class="['transition-colors duration-300', activeSection === link.id ? 'text-orange' : 'text-antiqueWhite hover:text-orange']">
          {{ link.name }}
        </a>
      </nav>
      <button class="md:hidden" aria-label="Open menu">
        <GiHamburgerMenu size="24" className="text-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GiHamburgerMenu } from 'vue-icons-plus/gi';
import logo from '@/assets/images/logo-192x192.svg'

import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
const t = (key: string) => $t(`Navigation.${key}`)

const navLinks = computed(() => [
  { name: t('home'), href: '#home', id: 'home' },
  { name: t('about'), href: '#about-me', id: 'about-me' },
  { name: t('skills'), href: '#skills', id: 'skills' },
  { name: t('experience'), href: '#experience', id: 'experience' },
  { name: t('background'), href: '#background', id: 'background' },
  { name: t('contacts'), href: '#contacts', id: 'contacts' },
])

const activeSection = ref('home')
let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { threshold: 0.5 },
  )

  navLinks.value.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())

</script>

<style scoped></style>
