import RobecoProject from "@/components/experience/Brunel/Projects/RobecoProject.vue";
import LifeguardBrigadeProject from "@/components/experience/Brunel/Projects/LifeguardBrigadeProject.vue";
import ProcorneaProject from "@/components/experience/Brunel/Projects/ProcorneaProject.vue";
import GoudseProject from "@/components/experience/Brunel/Projects/GoudseProject.vue";
import KiwaProject from "@/components/experience/Brunel/Projects/KiwaProject.vue";
import { defineStore } from "pinia";
import { Component, computed, shallowRef, ShallowRef } from "vue";
import { BrunelProject } from "@/models";

export const useBrunelProjectsStore = defineStore("brunelProjects", () => {
  const components: ShallowRef<{ [id: string]: Component }> = shallowRef({
    robeco: RobecoProject,
    lifeguard: LifeguardBrigadeProject,
    procornea: ProcorneaProject,
    goudse: GoudseProject,
    kiwa: KiwaProject,
  });

  const projects: {
    [code: string]: BrunelProject;
  } = {
    robeco: {
      start: new Date("2020-11-01"),
      end: new Date("2022-03-01"),
      above: true,
      color: "timeline-primary",
    },
    lifeguard: {
      start: new Date("2022-03-01"),
      end: new Date("2022-06-01"),
      above: false,
      color: "timeline-secondary",
    },
    procornea: {
      start: new Date("2022-06-01"),
      end: new Date("2023-02-01"),
      above: true,
      color: "timeline-tertiary",
    },
    goudse: {
      start: new Date("2023-05-01"),
      end: new Date(),
      above: false,
      color: "timeline-primary",
    },
    kiwa: {
      start: new Date("2023-08-01"),
      end: new Date("2024-05-01"),
      above: true,
      color: "timeline-secondary",
    },
  };

  const componentFor = computed(() => (code: string) => {
    return components.value[code];
  });

  return { components, projects, componentFor };
});
