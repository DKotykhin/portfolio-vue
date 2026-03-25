<template>
  <div class="bg-background fixed top-0 z-50 flex w-full justify-center">
    <div class="flex h-16 w-full max-w-360 items-center justify-between gap-4 px-4 md:px-8">
      <a href="#home">
        <img
          :src="logo"
          alt="Logo"
          width="40"
          height="40"
          class="cursor-pointer transition-transform duration-300 hover:scale-125"
        />
      </a>
      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          :class="[
            'transition-colors duration-300',
            activeSection === link.id ? 'text-orange' : 'hover:text-orange text-white',
          ]"
        >
          {{ link.name }}
        </a>
        <LanguageButton :locale="$i18n.locale" :isMobile="false" :activeSection="activeSection" />
      </nav>
      <button class="md:hidden" aria-label="Open menu" @click="isOpen = true">
        <GiHamburgerMenu :size="24" class="text-white" />
      </button>
    </div>
  </div>
  <MobileNavBar
    :activeSection="activeSection"
    :navLinks="navLinks"
    :isOpen="isOpen"
    :onClose="() => (isOpen = false)"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { GiHamburgerMenu } from 'vue-icons-plus/gi'

import logo from '@/assets/images/logo-192x192.svg'
import MobileNavBar from './MobileNavBar.vue'
import LanguageButton from './LanguageButton.vue'

const { t: $t } = useI18n()
const t = (key: string) => $t(`Navigation.${key}`)

export interface NavLink {
  name: string
  href: string
  id: string
}

const navLinks = computed<NavLink[]>(() => [
  { name: t('home'), href: '#home', id: 'home' },
  { name: t('about'), href: '#about-me', id: 'about-me' },
  { name: t('skills'), href: '#skills', id: 'skills' },
  { name: t('experience'), href: '#experience', id: 'experience' },
  { name: t('background'), href: '#background', id: 'background' },
  { name: t('contacts'), href: '#contacts', id: 'contacts' },
])

const activeSection = ref('home')
const isOpen = ref(false)

const updateActiveSection = () => {
  const scrollY = window.scrollY + window.innerHeight * 0.3
  const sections = navLinks.value
    .map(({ id }) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null)

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollY) {
      activeSection.value = section.id
      return
    }
  }
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', updateActiveSection))
</script>

<style scoped></style>
