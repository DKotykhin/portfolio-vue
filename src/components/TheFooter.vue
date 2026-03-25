<template>
  <footer class="w-full flex flex-col justify-center items-center gap-4 px-4 py-6 md:py-8 bg-background">
    <nav aria-label="Social links" class="w-full flex justify-center items-center gap-12">
      <a :href="links.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <CiLinkedin aria-hidden="true" color="#faebd7"
          class="cursor-pointer hover:scale-110 transition-transform duration-300 w-9 h-9 md:w-12 md:h-12" />
      </a>
      <a :href="links.telegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <FaTelegramPlane aria-hidden="true" color="#faebd7"
          class="cursor-pointer hover:scale-110 transition-transform duration-300 w-8 h-8 md:w-11 md:h-11" />
      </a>
      <a :href="links.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <FaGithub aria-hidden="true" color="#faebd7"
          class="cursor-pointer hover:scale-110 transition-transform duration-300 w-8 h-8 md:w-11 md:h-11" />
      </a>
    </nav>
    <p class="text-antiqueWhite text-center">
      &copy; {{ new Date().getFullYear() }} {{ t('text') }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CiLinkedin } from 'vue-icons-plus/ci'
import { FaTelegramPlane, FaGithub } from 'vue-icons-plus/fa'

import { links } from '@/constants';

const { t: $t } = useI18n()
const t = (key: string) => $t(`Footer.${key}`)
</script>

<style scoped></style>
