<template>
  <section id="contacts" class="bg-grey scroll-mt-16">
    <div class="px-4 md:px-8 w-full max-w-308 mx-auto pb-10">
      <SectionTitle :title="t('title')" />
      <div class="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        <div class="relative bg-background max-w-125 w-full
            before:content-[''] before:absolute before:top-0 before:right-0
            before:w-10 before:h-16 before:border-t-2 before:border-r-2 before:border-orange
            after:content-[''] after:absolute after:bottom-0 after:left-0
            after:w-10 after:h-16 after:border-b-2 after:border-l-2 after:border-orange">
          <div class="px-4 py-6">
            <p class="text-2xl text-antiqueWhite text-center font-bold">{{ t('form.title') }}</p>
            <ContactForm />
          </div>
        </div>
        <div class="max-w-125 w-full space-y-6">
          <a :href="`mailto:${links.email}`" :aria-label="`Send email to ${links.email}`" class="w-fit flex items-center gap-3 group">
            <MdOutlineEmail aria-hidden="true" color="#faebd7"
              class="cursor-pointer group-hover:scale-110 transition-transform duration-300 w-8 h-8" />
            <span class="text-lg group-hover:text-antiqueWhite transition-colors duration-300">
              {{ links.email }}
            </span>
          </a>
          <a :href="links.telegram" target="_blank" rel="noopener noreferrer"
            class="w-fit flex items-center gap-3 group">
            <FaTelegramPlane aria-hidden="true" color="#faebd7"
              class="cursor-pointer group-hover:scale-110 transition-transform duration-300 w-8 h-8" />
            <span class="text-lg group-hover:text-antiqueWhite transition-colors duration-300">Telegram</span>
          </a>
          <a :href="links.linkedin" target="_blank" rel="noopener noreferrer"
            class="w-fit flex items-center gap-3 group">
            <CiLinkedin aria-hidden="true" color="#faebd7"
              class="cursor-pointer group-hover:scale-110 transition-transform duration-300 w-9 h-9" />
            <span class="text-lg group-hover:text-antiqueWhite transition-colors duration-300">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { MdOutlineEmail } from 'vue-icons-plus/md';
import { CiLinkedin } from 'vue-icons-plus/ci';
import { FaTelegramPlane } from 'vue-icons-plus/fa';

import { links } from '@/constants';
import SectionTitle from '../SectionTitle.vue';
import ContactForm from './ContactForm.vue';

const { t: $t } = useI18n()
const t = (key: string) => $t(`Contacts.${key}`)
</script>

<style scoped></style>
