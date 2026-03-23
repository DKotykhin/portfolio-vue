<template>
  <button @click="handleClick" :class="triggerClassName">
    {{ label }}
  </button>

  <div v-if="open" class="fixed inset-0 z-50 flex flex-col bg-black/90">
    <div class="flex justify-end p-3">
      <button
        @click="open = false"
        class="text-antiqueWhite text-2xl font-bold px-4 py-1 hover:text-orange transition-colors duration-300"
        aria-label="Close PDF viewer"
      >
        ✕
      </button>
    </div>
    <iframe :src="src" class="flex-1 w-full" :title="label" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  label: string;
  src: string;
  triggerClassName?: string;
}>();

const open = ref(false);

function handleClick() {
  if (window.innerWidth < 768) {
    window.open(props.src, '_blank');
  } else {
    open.value = true;
  }
}
</script>
