<template>
  <div :class="cardClass">
    <div class="flex flex-col items-center gap-2 p-4">
      <img :src="icon" :alt="name" width="64" height="64" />
      <span class="text-antiqueWhite">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  icon: string
}>()

const cardClass = [
  'relative bg-grey max-w-32 w-full',
  "before:content-[''] before:absolute before:top-0 before:right-0",
  'before:w-6 before:h-10 before:border-t-2 before:border-r-2 before:border-orange',
  'hover:before:w-full hover:before:h-full before:transition-all before:duration-300',
  "after:content-[''] after:absolute after:bottom-0 after:left-0",
  'after:w-6 after:h-10 after:border-b-2 after:border-l-2 after:border-orange',
  'hover:after:w-full hover:after:h-full after:transition-all after:duration-300',
].join(' ')
</script>
