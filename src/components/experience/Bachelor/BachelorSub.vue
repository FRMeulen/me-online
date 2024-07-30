<template>
  <div class="grid grid-rows-6 w-full bachelor-component">
    <div
      class="description-card mx-auto w-fit row-span-1 m-2 p-2 bg-bgaccent border-secondary border-2 rounded-xl text-center"
    >
      <p>
        My passion for computers led me to the bachelor's of Computer
        Engineering.
      </p>
      <p>
        Here I learned various programming languages and hardware skills, and
        practiced them through projects.
      </p>
      <p>
        As my studies progressed I realized I am more interested in doing
        software rather than hardware.
      </p>
      <p>
        This is also reflected in my roles during the projects I did these four
        years.
      </p>
    </div>
    <div
      class="information-part row-span-5 m-2 p-2 bg-bgaccent border-secondary border-2 rounded-xl grid grid-cols-12 grid-rows-1"
    >
      <div class="grid col-span-1 items-center justify-start">
        <TriangleArrow :direction="'left'" :color="'secondary'" :size="20" />
      </div>
      <div class="grid col-span-10">
        <ProjectInfo :project="project" />
      </div>
      <div class="grid col-span-1 items-center justify-end">
        <TriangleArrow :direction="'right'" :color="'secondary'" :size="20" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectInfo from "@/components/experience/Bachelor/ProjectInfo.vue";
import TriangleArrow from "@/components/shared/TriangleArrow.vue";

const project = {
  projectName: "Test",
  imageName: "simba",
  imagePos: "left",
  paragraphs: ["paragraph 1", "paragraph 2"],
  keywords: ["TypeScript", "Vue 3", "TailwindCss"],
};
</script>
