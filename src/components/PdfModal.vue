<template>
  <button @click="handleClick" :class="triggerClassName">
    {{ label }}
  </button>

  <Teleport to="body">
    <div
      v-if="open"
      role="dialog"
      aria-modal="true"
      :aria-label="label"
      class="fixed inset-0 z-50 flex flex-col bg-black/90"
      @keydown="handleKeydown"
    >
      <div class="flex justify-end p-3">
        <button
          ref="closeButtonRef"
          @click="closeModal"
          class="text-antiqueWhite hover:text-orange px-4 py-1 text-2xl font-bold transition-colors duration-300"
          aria-label="Close PDF viewer"
        >
          ✕
        </button>
      </div>
      <iframe ref="iframeRef" :src="src" class="w-full flex-1" :title="label" tabindex="0" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const props = defineProps<{
  label: string
  src: string
  triggerClassName?: string
}>()

const open = ref(false)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
const iframeRef = ref<HTMLIFrameElement | null>(null)

function handleClick() {
  if (window.innerWidth < 768) {
    window.open(props.src, '_blank')
  } else {
    open.value = true
    nextTick(() => {
      closeButtonRef.value?.focus()
    })
  }
}

function closeModal() {
  open.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeModal()
    return
  }

  if (e.key === 'Tab') {
    const focusable = [closeButtonRef.value, iframeRef.value].filter(Boolean) as HTMLElement[]
    if (focusable.length < 2) return

    const first = focusable[0]!
    const last = focusable[focusable.length - 1]!

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }
}
</script>
