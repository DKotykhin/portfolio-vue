<template>
  <section id="experience" class="bg-grey scroll-mt-16">
    <div class="px-4 md:px-8 w-full max-w-308 mx-auto pb-10">
      <SectionTitle :title="t('title')" />
      <div class="space-y-10">
        <div v-for="(job, index) in jobs_experience" :key="job.company">
          <p class="text-2xl font-semibold mb-2">
            <a v-if="job.company_url" :href="job.company_url" target="_blank" rel="noopener noreferrer"
              class="text-orange hover:underline">{{ job.company }}</a>
            <span v-else class="text-orange">{{ job.company }}</span>
          </p>
          <p class="text-xl text-antiqueWhite">{{ t(job.position) }}</p>
          <p class="text-lg text-antiqueWhite">{{ job.period }}</p>
          <div class="mt-2 md:text-lg">
            <p class="font-medium text-antiqueWhite mb-1 whitespace-nowrap">{{ t('tech_stack') }}:</p>
            <div>
              <div v-if="job.tech_stack_frontend" class="flex flex-wrap gap-x-2">
                <p class="underline">{{ t('frontend') }}:</p>
                <div v-for="(tech, i) in job.tech_stack_frontend" :key="tech" class="flex items-center gap-2">
                  <span v-if="i !== 0" class="w-1 h-1 rounded-full bg-lightGray" />
                  <span>{{ tech }}</span>
                </div>
              </div>
              <div v-if="job.tech_stack_backend" class="flex flex-wrap gap-x-2 mt-1">
                <p class="underline">{{ t('backend') }}:</p>
                <div v-for="(tech, i) in job.tech_stack_backend" :key="tech" class="flex items-center gap-2">
                  <span v-if="i !== 0" class="w-1 h-1 rounded-full bg-lightGray" />
                  <span>{{ tech }}</span>
                </div>
              </div>
              <div v-if="job.tech_stack_database" class="flex flex-wrap gap-x-2 mt-1">
                <p class="underline">{{ t('database') }}:</p>
                <div v-for="(tech, i) in job.tech_stack_database" :key="tech" class="flex items-center gap-2">
                  <span v-if="i !== 0" class="w-1 h-1 rounded-full bg-lightGray" />
                  <span>{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2 md:text-lg">
            <p class="font-medium text-antiqueWhite mb-1 whitespace-nowrap">{{ t('results') }}:</p>
            <ul class="list-disc list-inside">
              <li v-for="(result, i) in getJobResults(index)" :key="i">
                {{ result }}
              </li>
            </ul>
          </div>
          <div v-if="job.recommendation_link" class="mt-2 md:text-lg">
            <p class="font-medium text-antiqueWhite mb-1 whitespace-nowrap">{{ t('recommendations') }}:</p>
            <div class="flex gap-3">
              <LiaHandPointRight :size="20" class="shrink-0 mt-1 text-orange" />
              <PdfModal :label="t('view_recommendation')" :src="job.recommendation_link"
                trigger-class-name="text-orange hover:underline" />
            </div>
          </div>
          <div v-if="job.examples && job.examples.length > 0" class="mt-2 md:text-lg">
            <p class="font-medium text-antiqueWhite mb-1 whitespace-nowrap">{{ t('examples') }}:</p>
            <ul class="list-disc list-inside text-orange">
              <li v-for="(example, i) in job.examples" :key="i">
                <a :href="example" target="_blank" rel="noopener noreferrer" class="hover:underline">
                  {{ example }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LiaHandPointRight } from 'vue-icons-plus/lia'

import { jobs_experience } from '../constants'
import SectionTitle from './SectionTitle.vue'
import PdfModal from './PdfModal.vue'

const { t: $t, tm } = useI18n()
const t = (key: string) => $t(`Experience.${key}`)

function getJobResults(index: number): string[] {
  const results = tm(`Experience.job_${index + 1}.results`)
  return Array.isArray(results) ? results : []
}
</script>

<style scoped></style>
