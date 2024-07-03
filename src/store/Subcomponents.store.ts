import BrunelProjects from "@/components/experience/Subcomponents/BrunelProjects.vue";
import { defineStore } from "pinia";
import { Component, computed, shallowRef, ShallowRef } from "vue";

export const useSubcomponentsStore = defineStore("subcomponents", () => {
  const registry: ShallowRef<{ [id: string]: Component }> = shallowRef({
    brunel: BrunelProjects,
  });

  const componentFor = computed(() => (code: string) => {
    return registry.value[code];
  });

  return { registry, componentFor };
});
