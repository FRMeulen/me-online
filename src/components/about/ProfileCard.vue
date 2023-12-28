<template>
  <div class="w-2/3 bg-bgaccent h-1/2 flex flex-col">
    <span
      class="font-bold leading-relaxed text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent w-fit"
    >
      Profile
    </span>
    <div class="flex flex-row self-center w-full">
      <div class="bg-gradient-to-r from-secondary to-primary w-1/2 h-1"></div>
      <div class="bg-gradient-to-r from-primary to-secondary w-1/2 h-1"></div>
    </div>
    <div class="text-container m-2 debug-green">
      <span>My name is Falco, and I'm {{ age }} years old.</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const age = computed(() => {
  return new Date().getFullYear() - 1998;
});
</script>
