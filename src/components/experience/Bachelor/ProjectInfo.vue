<template>
  <div
    class="grid grid-cols-1 grid-rows-10 bg-bgsecondary border-secondary border-2 rounded-xl"
  >
    <div
      class="row-span-1 text-4xl text-center text-secondary border-b-4 border-secondary"
    >
      {{ project.projectName }}
    </div>
    <div class="row-span-9 grid grid-rows-8 grid-cols-1">
      <div class="row-span-7 flex flex-row">
        <div
          v-if="project.imagePos == 'left'"
          class="image-container-left flex items-center w-1/4 m-4 rounded-full h-fit my-auto border-primary border-2"
        >
          <img :src="imagePath" alt="Dynamic Image" />
        </div>
        <div class="paragraphs-container flex flex-grow">
          {{ project.paragraphs }}
        </div>
        <div
          v-if="project.imagePos == 'right'"
          class="image-container-right flex items-center w-1/4 m-4 rounded-full h-fit my-auto border-primary border-2"
        >
          <img :src="imagePath" alt="Dynamic Image" />
        </div>
      </div>
      <div
        class="row-span-1 flex flex-row debug-blue items-center justify-center"
      >
        {{ project.keywords }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Project } from "@/models";
import { computed, PropType } from "vue";

const props = defineProps({
  project: { type: Object as PropType<Project>, required: true },
});

const project = props.project === undefined ? new Project() : props.project;

const imagePath = computed(() => {
  return require(`@/assets/${project.imageName}.png`);
});
</script>
