<template>
  <div
    class="hobbies w-full h-full bg-gradient-to-b from-bgsecondary to-bg-primary rounded-xl border-primary border-2 flex flex-col"
  >
    <span
      class="font-bold leading-relaxed text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent w-fit mx-auto"
    >
      Hobbies
    </span>
    <div class="flex flex-row self-center w-full">
      <div class="bg-gradient-to-r from-secondary to-primary w-1/2 h-1"></div>
      <div class="bg-gradient-to-r from-primary to-secondary w-1/2 h-1"></div>
    </div>
    <div
      class="hobbies-container text-xl m-2 h-full flex flex-col justify-evenly"
    >
      <HobbyIcon
        v-for="hobby in Hobbies"
        :key="hobby.code"
        :hobby-name="hobby.hobbyName"
        :icon-name="hobby.iconName"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Hobbies } from "@/constants";
import HobbyIcon from "@/components/about/Hobbies/HobbyIcon.vue";
</script>
