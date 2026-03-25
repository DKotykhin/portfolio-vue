<template>
  <section id="about-me" class="bg-grey scroll-mt-16">
    <div class="mx-auto w-full max-w-308 px-4 pb-10 md:px-8">
      <SectionTitle :title="t('title')" />
      <div
        class="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0"
      >
        <img
          :src="photo"
          alt="Dmytro Kotykhin - FullStack Developer"
          class="shadow-antiqueWhite w-full max-w-125 rounded-md object-cover shadow-md"
        />
        <div class="flex w-full max-w-125 flex-col justify-center gap-5 lg:px-5">
          <p class="text-antiqueWhite text-4xl font-bold">{{ t('name') }}</p>
          <p class="text-orange text-3xl font-bold">{{ t('position') }}</p>
          <div class="mt-2 flex items-center gap-2">
            <FiMapPin aria-hidden="true" color="#faebd7" class="text-[24px]" />
            <span class="text-lg">{{ t('location') }}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <div v-for="(skill, index) in coreSkills" :key="skill" class="flex items-center gap-2">
              <span v-if="index !== 0" class="bg-lightGray h-1 w-1 rounded-full" />
              <span class="font-semibold">{{ skill }}</span>
            </div>
          </div>
          <p class="md:text-lg lg:mt-6">{{ t('description') }}</p>
          <nav aria-label="Social links" class="flex grow items-center gap-8">
            <a
              :href="links.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-2"
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
            <a
              :href="links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-2"
            >
              <FaGithub
                aria-hidden="true"
                color="#faebd7"
                class="h-8 w-8 cursor-pointer transition-transform duration-300 group-hover:scale-110"
              />
              <span class="group-hover:text-antiqueWhite text-lg transition-colors duration-300"
                >GitHub</span
              >
            </a>
          </nav>
          <div class="mt-8 flex flex-col gap-6">
            <PdfModal
              :label="t('viewCV')"
              :src="CV"
              trigger-class-name="w-full px-4 py-2 border border-antiqueWhite text-antiqueWhite text-xl font-bold rounded-md hover:bg-antiqueWhite hover:text-background transition-colors duration-300 text-center"
            />
            <a
              :href="CV"
              download
              class="border-orange text-orange hover:bg-orange hover:text-background w-full rounded-md border px-4 py-2 text-center text-xl font-bold transition-colors duration-300"
            >
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
import { CiLinkedin } from 'vue-icons-plus/ci'
import { FaGithub } from 'vue-icons-plus/fa'
import { FiMapPin } from 'vue-icons-plus/fi'

import CV from '@/assets/cv/Dmytro_Kotykhin_CV.pdf'
import photo from '@/assets/images/photo.avif'
import { coreSkills, links } from '../constants'
import PdfModal from './PdfModal.vue'
import SectionTitle from './SectionTitle.vue'

const { t: $t } = useI18n()
const t = (key: string) => $t(`AboutMe.${key}`)
</script>
