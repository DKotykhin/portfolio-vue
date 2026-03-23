<template>
  <RouterLink
    :to="{ path: locale === 'en' ? '/ua' : '/', hash: '#' + activeSection }"
    :aria-label="locale === 'en' ? 'Switch to Ukrainian' : 'Switch to English'"
    class="capitalize flex justify-center items-center py-1 min-w-12 rounded-md text-md border border-lightGray hover:brightness-125 transition-discrete duration-300"
    @mouseenter="hovered = true" @mouseleave="hovered = false">
    {{ hovered || isMobile ? (locale === 'en' ? 'Ua' : 'En') : locale }}
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{ locale: string, isMobile: boolean, activeSection: string }>()
const hovered = ref(false)
</script>

<style scoped></style>
