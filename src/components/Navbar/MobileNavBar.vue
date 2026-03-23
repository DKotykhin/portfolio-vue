<template>
  <div class="md:hidden">
    <div aria-hidden="true"
      :class="['fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300', isOpen ? 'opacity-70' : 'opacity-0 pointer-events-none']"
      @click="onClose" />
    <nav :aria-hidden="!isOpen" aria-label="Mobile navigation"
      :class="[isOpen ? 'translate-y-0' : '-translate-y-full', 'fixed top-0 left-0 w-full bg-background p-4 flex flex-col z-50 items-center transition-transform duration-300']">
      <button @click="onClose" aria-label="Close menu" class="self-end">
        <IoClose :size="24" class="text-white" />
      </button>
      <ul class="flex flex-col gap-4">
        <li v-for="(link, index) in navLinks" :key="link.id" class="w-full text-center">
          <a :href="link.href" @click="onClose" class="text-white text-xl">
            {{ link.name }}
          </a>
          <div v-if="index < navLinks.length - 1" class="border-b border-gray w-full pt-3" />
        </li>
      </ul>
      <div class="pt-6">
        <LanguageButton :locale="$i18n.locale" :isMobile="true" :activeSection="activeSection" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { IoClose } from 'vue-icons-plus/io'
import type { NavLink } from './NavBar.vue'
import LanguageButton from './LanguageButton.vue'


const props = defineProps<{ navLinks: NavLink[], isOpen: boolean, onClose: () => void, activeSection: string }>()

watch(() => props.isOpen, (open) => {
  document.body.classList.toggle('overflow-hidden', open)
})
</script>

<style scoped></style>
