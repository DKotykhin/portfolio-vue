<template>
  <section id="skills" class="bg-background scroll-mt-16">
    <div class="mx-auto w-full max-w-308 px-4 pb-10 md:px-8">
      <SectionTitle :title="t('title')" />
      <div class="flex flex-col gap-10">
        <div v-for="{ label, skills } in categories" :key="label">
          <p class="text-antiqueWhite mb-4 text-center text-xl font-bold lg:text-left">
            {{ label }}
          </p>
          <div class="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
            <SkillCard
              v-for="skill in skills"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import SectionTitle from '../SectionTitle.vue'
import SkillCard from './SkillCard.vue'
import { frontendSkills, backendSkills, databaseSkills, otherSkills } from './skillData'

const { t: $t } = useI18n()
const t = (key: string) => $t(`Skills.${key}`)

const categories = computed(() => [
  { label: t('frontend'), skills: frontendSkills },
  { label: t('backend'), skills: backendSkills },
  { label: t('database'), skills: databaseSkills },
  { label: t('other'), skills: otherSkills },
])
</script>

<style scoped></style>
