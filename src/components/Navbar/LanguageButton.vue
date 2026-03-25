<template>
  <RouterLink
    :to="{ path: locale === 'en' ? '/ua' : '/', hash: '#' + activeSection }"
    :aria-label="locale === 'en' ? 'Switch to Ukrainian' : 'Switch to English'"
    class="text-md border-lightGray flex min-w-12 items-center justify-center rounded-md border py-1 capitalize transition-discrete duration-300 hover:brightness-125"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ hovered || isMobile ? (locale === 'en' ? 'Ua' : 'En') : locale }}
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{ locale: string; isMobile: boolean; activeSection: string }>()
const hovered = ref(false)
</script>

<style scoped></style>
