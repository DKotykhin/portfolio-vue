<template>
  <section id="contacts" class="bg-grey scroll-mt-16">
    <div class="mx-auto w-full max-w-308 px-4 pb-10 md:px-8">
      <SectionTitle :title="t('title')" />
      <div class="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        <div
          class="bg-background before:border-orange after:border-orange relative w-full max-w-125 before:absolute before:top-0 before:right-0 before:h-16 before:w-10 before:border-t-2 before:border-r-2 before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-16 after:w-10 after:border-b-2 after:border-l-2 after:content-['']"
        >
          <div class="px-4 py-6">
            <p class="text-antiqueWhite text-center text-2xl font-bold">{{ t('form.title') }}</p>
            <ContactForm />
          </div>
        </div>
        <nav aria-label="Contact links" class="w-full max-w-125 space-y-6">
          <a
            :href="`mailto:${links.email}`"
            :aria-label="`Send email to ${links.email}`"
            class="group flex w-fit items-center gap-3"
          >
            <MdOutlineEmail
              aria-hidden="true"
              color="#faebd7"
              class="h-8 w-8 cursor-pointer transition-transform duration-300 group-hover:scale-110"
            />
            <span class="group-hover:text-antiqueWhite text-lg transition-colors duration-300">
              {{ links.email }}
            </span>
          </a>
          <a
            :href="links.telegram"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-fit items-center gap-3"
          >
            <FaTelegramPlane
              aria-hidden="true"
              color="#faebd7"
              class="h-8 w-8 cursor-pointer transition-transform duration-300 group-hover:scale-110"
            />
            <span class="group-hover:text-antiqueWhite text-lg transition-colors duration-300"
              >Telegram</span
            >
          </a>
          <a
            :href="links.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-fit items-center gap-3"
          >
            <CiLinkedin
              aria-hidden="true"
              color="#faebd7"
              class="h-9 w-9 cursor-pointer transition-transform duration-300 group-hover:scale-110"
            />
            <span class="group-hover:text-antiqueWhite text-lg transition-colors duration-300"
              >LinkedIn</span
            >
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { MdOutlineEmail } from 'vue-icons-plus/md'
import { CiLinkedin } from 'vue-icons-plus/ci'
import { FaTelegramPlane } from 'vue-icons-plus/fa'

import { links } from '@/constants'
import SectionTitle from '../SectionTitle.vue'
import ContactForm from './ContactForm.vue'

const { t: $t } = useI18n()
const t = (key: string) => $t(`Contacts.${key}`)
</script>

<style scoped></style>
