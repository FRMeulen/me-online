<template>
  <div class="container h-full grid items-end overflow-visible">
    <div
      class="timeline h-1/3 my-auto bg-gradient-to-br from-primary to-secondary rounded-xl border-4 border-bgaccent relative overflow-visible"
      @mouseenter="toggleTranslate"
      @mouseleave="toggleTranslate"
      @mousemove="translateMarker"
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
      <TimelineMarker :markerX="markerX" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBrunelProjectsStore } from "@/store";
import TimelineProject from "./TimelineProject.vue";
import TimelineMarker from "./TimelineMarker.vue";
import { computed, ref } from "vue";

const selectedProject = ref("");
const translateEnabled = ref(false);
const markerX = ref("0%");
const store = useBrunelProjectsStore();
const projects = computed(() => store.projects);

const emit = defineEmits<{
  (e: "onSelect", code: string): string;
}>();

const selectProject = (code: string | number) => {
  selectedProject.value = code as string;
  emit("onSelect", selectedProject.value);
};

const toggleTranslate = () => {
  translateEnabled.value = !translateEnabled.value;
};

const translateMarker = (event: MouseEvent) => {
  if (!translateEnabled.value) return;

  const el = event.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();

  const posX = ((event.clientX - rect.left) / rect.width) * 100;
  markerX.value = `${posX}%`;
};
</script>
