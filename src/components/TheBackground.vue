<template>
  <section id="background" class="bg-background scroll-mt-16">
    <div class="mx-auto w-full max-w-308 px-4 pb-10 md:px-8">
      <SectionTitle :title="t('title')" />
      <div class="flex flex-col gap-10 lg:flex-row">
        <div class="w-full">
          <p class="text-orange mb-6 text-2xl">{{ t('certificates.title') }}</p>
          <div v-for="{ text, url } in certificates" :key="text" class="flex gap-3">
            <LiaHandPointRight :size="20" class="mt-1 shrink-0" />
            <p class="mb-1 md:text-lg">
              <a :href="url" target="_blank" rel="noopener noreferrer" class="hover:underline">
                {{ t(`certificates.${text}`) }}
              </a>
            </p>
          </div>
          <p class="text-orange mt-10 mb-6 text-2xl">{{ t('education.title') }}</p>
          <p class="text-antiqueWhite mb-1 text-lg">{{ t('education.name') }}</p>
          <div class="flex gap-3">
            <LiaHandPointRight :size="20" class="mt-1 shrink-0" />
            <p class="mb-1 md:text-lg">{{ t('education.degree') }}</p>
          </div>
        </div>
        <div class="w-full">
          <p class="text-orange mb-6 text-2xl">{{ t('languages.title') }}</p>
          <div v-for="key in languages" :key="key" class="flex gap-3">
            <LiaHandPointRight :size="20" class="mt-1 shrink-0" />
            <p class="mb-1 md:text-lg">{{ t(`languages.${key}`) }}</p>
          </div>
          <p class="text-orange mt-10 mb-6 text-2xl">{{ t('hobbies.title') }}</p>
          <div v-for="key in hobbies" :key="key" class="flex gap-3">
            <LiaHandPointRight :size="20" class="mt-1 shrink-0" />
            <p class="mb-1 md:text-lg">{{ t(`hobbies.${key}`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LiaHandPointRight } from 'vue-icons-plus/lia'
import SectionTitle from './SectionTitle.vue'
import { certificates } from '../constants'

const { t: $t } = useI18n()
const t = (key: string) => $t(`Background.${key}`)

const languages = ['language1', 'language2', 'language3', 'language4'] as const
const hobbies = ['hobby1', 'hobby2', 'hobby3'] as const
</script>
