<template>
  <div
    class="skills w-full h-1/2 mt-1 bg-gradient-to-b from-bgaccent to-bgprimary rounded-xl border-secondary border-2 flex flex-col"
  >
    <span
      class="font-bold leading-relaxed text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent w-fit ml-2"
    >
      Skills
    </span>
    <div class="flex flex-row self-center w-full">
      <div class="bg-gradient-to-r from-secondary to-primary w-1/2 h-1"></div>
      <div class="bg-gradient-to-r from-primary to-secondary w-1/2 h-1"></div>
    </div>
    <div class="skills-text-container flex flex-row text-xl m-2 h-full">
      <div
        class="skills-category-tabs flex flex-col flex-grow w-1/4 h-full rounded-tl-xl rounded-bl-xl border-primary border-4 bg-slate-600"
      >
        <div
          class="backend-tab skill-tab"
          @click="onTabClick(SkillCategory.Backend)"
          :class="activeState(SkillCategory.Backend)"
        >
          <span>Backend</span>
        </div>
        <div
          class="frontend-tab skill-tab"
          @click="onTabClick(SkillCategory.Frontend)"
          :class="activeState(SkillCategory.Frontend)"
        >
          <span>Frontend</span>
        </div>
        <div
          class="infra-tab skill-tab"
          @click="onTabClick(SkillCategory.Infrastructure)"
          :class="activeState(SkillCategory.Infrastructure)"
        >
          <span>Infrastructure</span>
        </div>
        <div
          class="language-tab skill-tab"
          @click="onTabClick(SkillCategory.Language)"
          :class="activeState(SkillCategory.Language)"
        >
          <span>Language</span>
        </div>
      </div>
      <div
        class="skill-bars-container flex flex-col w-3/4 px-1 rounded-r-xl bg-slate-500 border-primary border-y-4 border-r-4"
      >
        <SkillBar
          v-for="skill in skillsByTab(selectedTab)"
          :key="skill.code"
          :name="skill.skillName"
          :percentage="skill.percentage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SkillBar from "@/components/about/Skills/SkillBar.vue";
import { SkillCategory } from "@/enums/SkillCategory";
import { Skills } from "@/constants";
import { computed, ref } from "vue";

let selectedTab = ref(0);

const skillsByTab = computed(() => (tab: SkillCategory) => {
  return Skills.filter((skill) => skill.category === tab);
});

const activeState = (tab: SkillCategory) =>
  selectedTab.value === tab ? "tab-active" : "tab-inactive";

const onTabClick = (tab: SkillCategory) => {
  selectedTab.value = tab;
};
</script>
