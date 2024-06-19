<template>
  <div class="experience-education h-full flex flex-col">
    <div class="education-box flex mt-2 h-full w-full">
      <fwb-timeline class="m-2">
        <TimeBarEntry
          class="my-8"
          v-for="moment in Moments"
          :key="moment.code"
          :time="moment.time"
          :title="moment.title"
          :subtitle="moment.subtitle"
        />
      </fwb-timeline>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FwbTimeline } from "flowbite-vue";
import TimeBarEntry from "@/components/experience/TimeBarEntry.vue";
import { Moments } from "@/constants";
</script>
