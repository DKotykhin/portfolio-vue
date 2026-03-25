<script setup lang="ts">
import { RouterView } from 'vue-router';

import NavBar from './components/Navbar/NavBar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="bg-background text-lightGray flex min-h-screen flex-col">
    <a href="#home"
      class="focus:bg-orange focus:text-background sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:px-4 focus:py-2 focus:font-bold">
      Skip to content
    </a>
    <NavBar />
    <main class="grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
