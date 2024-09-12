import BachelorSub from "@/components/experience/Bachelor/BachelorSub.vue";
import BrunelProjects from "@/components/experience/Subcomponents/BrunelSub.vue";
import GraduationSub from "@/components/experience/Subcomponents/GraduationSub.vue";
import InternshipSub from "@/components/experience/Internship/InternshipSub.vue";
import MiddleSchoolSub from "@/components/experience/MiddleSchool/MiddleSchoolSub.vue";
import PeercoachSub from "@/components/experience/Peercoach/PeercoachSub.vue";
import { defineStore } from "pinia";
import { Component, computed, shallowRef, ShallowRef } from "vue";

export const useSubcomponentsStore = defineStore("subcomponents", () => {
  const registry: ShallowRef<{ [id: string]: Component }> = shallowRef({
    middleschool: MiddleSchoolSub,
    bachelor: BachelorSub,
    peercoach: PeercoachSub,
    internship: InternshipSub,
    graduation: GraduationSub,
    brunel: BrunelProjects,
  });

  const componentFor = computed(() => (code: string) => {
    return registry.value[code];
  });

  return { registry, componentFor };
});
