<template>
  <div class="container h-full grid items-end overflow-visible">
    <div
      class="timeline h-1/3 my-auto bg-gradient-to-br from-primary to-secondary rounded-xl border-4 border-bgaccent relative overflow-visible"
    >
      <TimelineProject
        v-for="(project, code) in projects"
        :key="code"
        :startDate="project.start"
        :endDate="project.end"
        :above="project.above"
        :color="project.color"
        @mouseover="selectProject(code)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBrunelProjectsStore } from "@/store";
import TimelineProject from "./TimelineProject.vue";
import { computed, ref } from "vue";

const selectedProject = ref("");
const store = useBrunelProjectsStore();
const projects = computed(() => store.projects);

const emit = defineEmits<{
  (e: "onSelect", code: string): string;
}>();

const selectProject = (code: string | number) => {
  selectedProject.value = code as string;
  emit("onSelect", selectedProject.value);
};
</script>
