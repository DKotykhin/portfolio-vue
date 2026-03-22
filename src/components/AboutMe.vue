<template>
  <section id="about-me" class="bg-grey flex justify-center min-h-screen scroll-mt-16">
    <div class="px-4 md:px-8 max-w-308 pb-10">
      <SectionTitle :title="t('title')" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionTitle from './SectionTitle.vue';

const { t: $t } = useI18n()
const t = (key: string) => $t(`AboutMe.${key}`)
</script>

<style lang="scss" scoped></style>
