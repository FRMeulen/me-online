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
    <div class="skills-text-container text-xl m-2 h-full">
      <div
        class="skills-category-tabs flex flex-col flex-grow w-1/4 h-full rounded-tl-xl rounded-bl-xl border-primary border-4 bg-slate-600"
      >
        <div
          class="backend-tab skill-tab"
          @click="onTabClick('backend')"
          :class="activeState('backend')"
        >
          <span>Backend</span>
        </div>
        <div
          class="frontend-tab skill-tab"
          @click="onTabClick('frontend')"
          :class="activeState('frontend')"
        >
          <span>Frontend</span>
        </div>
        <div
          class="infra-tab skill-tab"
          @click="onTabClick('infra')"
          :class="activeState('infra')"
        >
          <span>Infrastructure</span>
        </div>
        <div
          class="language-tab skill-tab"
          @click="onTabClick('language')"
          :class="activeState('language')"
        >
          <span>Language</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

let selectedTab = "";

const activeState = computed(
  () => (tab: string) => isActive(tab) ? "active" : "inactive",
);

const isActive = (tab: string) => selectedTab === tab;

const onTabClick = (tab: string) => {
  selectedTab = tab;
};
</script>
