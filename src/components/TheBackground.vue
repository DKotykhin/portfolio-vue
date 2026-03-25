<template>
  <section id="background" class="bg-background scroll-mt-16">
    <div class="px-4 md:px-8 w-full max-w-308 mx-auto pb-10">
      <SectionTitle :title="t('title')" />
      <div class="flex flex-col lg:flex-row gap-10">
        <div class="w-full">
          <p class="text-2xl text-orange mb-6">{{ t('certificates.title') }}</p>
          <div v-for="{ text, url } in certificates" :key="text" class="flex gap-3">
            <LiaHandPointRight :size="20" class="shrink-0 mt-1" />
            <p class="md:text-lg mb-1">
              <a :href="url" target="_blank" rel="noopener noreferrer" class="hover:underline">
                {{ t(`certificates.${text}`) }}
              </a>
            </p>
          </div>
          <p class="text-2xl text-orange mt-10 mb-6">{{ t('education.title') }}</p>
          <p class="text-lg text-antiqueWhite mb-1">{{ t('education.name') }}</p>
          <div class="flex gap-3">
            <LiaHandPointRight :size="20" class="shrink-0 mt-1" />
            <p class="md:text-lg mb-1">{{ t('education.degree') }}</p>
          </div>
        </div>
        <div class="w-full">
          <p class="text-2xl text-orange mb-6">{{ t('languages.title') }}</p>
          <div v-for="key in languages" :key="key" class="flex gap-3">
            <LiaHandPointRight :size="20" class="shrink-0 mt-1" />
            <p class="md:text-lg mb-1">{{ t(`languages.${key}`) }}</p>
          </div>
          <p class="text-2xl text-orange mt-10 mb-6">{{ t('hobbies.title') }}</p>
          <div v-for="key in hobbies" :key="key" class="flex gap-3">
            <LiaHandPointRight :size="20" class="shrink-0 mt-1" />
            <p class="md:text-lg mb-1">{{ t(`hobbies.${key}`) }}</p>
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
