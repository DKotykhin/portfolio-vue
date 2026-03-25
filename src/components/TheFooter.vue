<template>
  <footer
    class="bg-background flex w-full flex-col items-center justify-center gap-4 px-4 py-6 md:py-8"
  >
    <nav aria-label="Social links" class="flex w-full items-center justify-center gap-12">
      <a
        :href="links.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <CiLinkedin
          aria-hidden="true"
          color="#faebd7"
          class="h-9 w-9 cursor-pointer transition-transform duration-300 hover:scale-110 md:h-12 md:w-12"
        />
      </a>
      <a :href="links.telegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <FaTelegramPlane
          aria-hidden="true"
          color="#faebd7"
          class="h-8 w-8 cursor-pointer transition-transform duration-300 hover:scale-110 md:h-11 md:w-11"
        />
      </a>
      <a :href="links.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <FaGithub
          aria-hidden="true"
          color="#faebd7"
          class="h-8 w-8 cursor-pointer transition-transform duration-300 hover:scale-110 md:h-11 md:w-11"
        />
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

import { links } from '@/constants'

const { t: $t } = useI18n()
const t = (key: string) => $t(`Footer.${key}`)
</script>

<style scoped></style>
