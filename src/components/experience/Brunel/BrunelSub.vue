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
    <div class="timeline-container row-span-2 m-1 mx-8 overflow-visible">
      <BrunelTimeline @onSelect="showDetails" />
    </div>
    <div class="detailed-container row-span-9 m-2">
      <div
        class="placeholder text-2xl text-center h-full flex justify-center items-center"
        v-if="placeholder"
      >
        Hover the timeline entries for details!
      </div>
      <component :is="component" v-if="!placeholder"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBrunelProjectsStore } from "@/store";
import { computed, ref, shallowRef } from "vue";
import BrunelTimeline from "./ProjectTimeline/BrunelTimeline.vue";

const store = useBrunelProjectsStore();
const project = ref("");
const component = shallowRef();
const placeholder = computed(() => project.value === "");

const showDetails = (code: string) => {
  project.value = code;
  component.value = store.componentFor(project.value);
};
</script>
