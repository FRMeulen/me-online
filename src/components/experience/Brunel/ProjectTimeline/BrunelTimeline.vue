<template>
  <div class="container h-full grid items-end debug-red">
    <div
      class="timeline h-2/3 mx-2 mb-1 bg-gradient-to-br from-primary to-secondary rounded-xl border-4 border-bgaccent relative overflow-visible"
    >
      <TimelineProject
        v-for="(project, code) in projects"
        :key="code"
        :startDate="project.start"
        :endDate="project.end"
        :above="project.above"
        :color="project.color"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBrunelProjectsStore } from "@/store";
import TimelineProject from "./TimelineProject.vue";
import { computed } from "vue";

const store = useBrunelProjectsStore();

const projects = computed(() => store.projects);
</script>
