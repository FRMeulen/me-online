<template>
  <div class="brunel-container grid grid-rows-12 grid-cols-1 w-full h-full">
    <div
      class="general-container row-span-1 m-2 text-center my-auto card mx-auto p-2"
    >
      <p class="text-xl text-primary">
        Brunel offered me my first full-time job as an IT-specialist.
      </p>
      <p class="text-xl text-primary">
        Through their network, I worked on projects for different clients.
      </p>
    </div>
    <div class="timeline-container row-span-1 m-2">
      <BrunelTimeline />
    </div>
    <div class="detailed-container row-span-10 m-2 debug-green">
      <p>Details here</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BrunelTimeline from "./ProjectTimeline/BrunelTimeline.vue";
</script>
