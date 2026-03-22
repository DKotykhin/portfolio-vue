<template>
  <h2 ref="titleRef" class="section-title text-4xl font-bold text-antiqueWhite flex justify-center px-4 py-10">
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ title: string }>()

const titleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        titleRef.value?.classList.add('fade-in')
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )

  if (titleRef.value) observer.observe(titleRef.value)
})
</script>

<style scoped>
.section-title {
  opacity: 0;
  scale: 0;
}

.fade-in {
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    scale: 1;
  }
}
</style>
