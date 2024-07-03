import BrunelProjects from "@/components/experience/Subcomponents/BrunelProjects.vue";
import { defineStore } from "pinia";
import { Component, computed, ref, Ref } from "vue";

export const useSubcomponentsStore = defineStore("subcomponents", () => {
  const registry: Ref<{ [id: string]: Component }> = ref({
    brunel: BrunelProjects,
  });

  const componentFor = computed(() => (code: string) => {
    return registry.value[code];
  });

  return { registry, componentFor };
});
