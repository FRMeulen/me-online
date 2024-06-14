<template>
  <div class="experience-education h-full flex flex-col">
    <div class="experience-box flex h-2/5 w-full">
      <span class="experience">Experience</span>
    </div>
    <div
      class="time-bar flex items-stretch h-1/5 w-full justify-center bg-bgaccent rounded-xl border-secondary border-2"
    >
      <TimeBar :start="birthYear" :end="currentYear" />
    </div>
    <div class="education-box flex h-2/5 w-full">
      <span class="education">Education</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import TimeBar from "@/components/experience/TimeBar.vue";

const birthYear = 1998;
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
