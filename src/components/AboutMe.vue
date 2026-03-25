<template>
  <section id="about-me" class="bg-grey scroll-mt-16">
    <div class="px-4 md:px-8 w-full max-w-308 mx-auto pb-10">
      <SectionTitle :title="t('title')" />
      <div class="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:items-stretch lg:justify-between">
        <img :src="photo" alt="Dmytro Kotykhin - FullStack Developer"
          class="rounded-md shadow-antiqueWhite shadow-md object-cover w-full max-w-125" />
        <div class="w-full max-w-125 flex flex-col justify-center gap-5 lg:px-5">
          <p class="text-4xl text-antiqueWhite font-bold">{{ t('name') }}</p>
          <p class="text-3xl text-orange font-bold">{{ t('position') }}</p>
          <div class="flex items-center gap-2 mt-2">
            <FiMapPin aria-hidden="true" color="#faebd7" class="text-[24px]" />
            <span class="text-lg">{{ t('location') }}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <div v-for="(skill, index) in coreSkills" :key="skill" class="flex items-center gap-2">
              <span v-if="index !== 0" class="w-1 h-1 rounded-full bg-lightGray" />
              <span class="font-semibold">{{ skill }}</span>
            </div>
          </div>
          <p class="md:text-lg lg:mt-6">{{ t('description') }}</p>
          <nav aria-label="Social links" class="flex items-center gap-8 grow">
            <a :href="links.linkedin" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 group">
              <CiLinkedin aria-hidden="true" color="#faebd7"
                class="cursor-pointer group-hover:scale-110 transition-transform duration-300 w-9 h-9" />
              <span class="text-lg group-hover:text-antiqueWhite transition-colors duration-300">LinkedIn</span>
            </a>
            <a :href="links.github" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 group">
              <FaGithub aria-hidden="true" color="#faebd7"
                class="cursor-pointer group-hover:scale-110 transition-transform duration-300 w-8 h-8" />
              <span class="text-lg group-hover:text-antiqueWhite transition-colors duration-300">GitHub</span>
            </a>
          </nav>
          <div class="flex flex-col gap-6 mt-8">
            <PdfModal :label="t('viewCV')" :src="CV"
              trigger-class-name="w-full px-4 py-2 border border-antiqueWhite text-antiqueWhite text-xl font-bold rounded-md hover:bg-antiqueWhite hover:text-background transition-colors duration-300 text-center" />
            <a :href="CV" download
              class="w-full px-4 py-2 border border-orange text-orange text-xl font-bold rounded-md hover:bg-orange hover:text-background transition-colors duration-300 text-center">
              {{ t('downloadCV') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { FiMapPin } from 'vue-icons-plus/fi'
import { CiLinkedin } from 'vue-icons-plus/ci'
import { FaGithub } from 'vue-icons-plus/fa'

import photo from '@/assets/images/photo.avif'
import CV from '@/assets/cv/Dmytro_Kotykhin_CV.pdf'
import { links, coreSkills } from '../constants'
import SectionTitle from './SectionTitle.vue'
import PdfModal from './PdfModal.vue'

const { t: $t } = useI18n()
const t = (key: string) => $t(`AboutMe.${key}`)
</script>
