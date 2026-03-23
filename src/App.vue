<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import NavBar from './components/Navbar/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="bg-background min-h-screen flex flex-col text-lightGray">
    <a href="#home"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-orange focus:text-background focus:rounded-lg focus:font-bold">
      Skip to content
    </a>
    <NavBar />
    <main class="grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
