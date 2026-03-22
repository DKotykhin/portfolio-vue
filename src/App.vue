<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="bg-background text-antiqueWhite min-h-screen flex flex-col">
    <NavBar />
    <main class="grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
