<template>
  <div class="grid grid-cols-2 w-full middle-school-component">
    <div class="text-part">
      <div
        class="level-card m-2 pb-2 bg-bgaccent border-secondary border-2 rounded-xl text-center"
      >
        <p class="text-3xl text-primary mb-4">Level</p>
        <p>Before college, I attended VWO-level general education.</p>
        <p>The profile I went with was called Nature & Technology.</p>
        <p>This set focuses on scientific subjects.</p>
      </div>
      <div
        class="years-card m-2 pb-2 bg-bgaccent border-secondary border-2 rounded-xl text-center relative mb-[35px] overflow-visible"
      >
        <p class="text-3xl text-primary mb-4">Years</p>
        <p>The education took a total of 6 years.</p>
        <p>Check the subjects per year here.</p>
        <div class="relative mb-[25px] overflow-visible">
          <div
            class="absolute flex flex-row justify-evenly right-5 left-5 top-2 p-2 bg-bgprimary border border-secondary rounded-2xl text-white"
          >
            <div
              class="bg-secondary rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-accent"
              @mouseenter="selectYear(1)"
            >
              <span>1</span>
            </div>
            <div
              class="bg-secondary rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-accent"
              @mouseenter="selectYear(2)"
            >
              <span>2</span>
            </div>
            <div
              class="bg-secondary rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-accent"
              @mouseenter="selectYear(3)"
            >
              <span>3</span>
            </div>
            <div
              class="bg-secondary rounded-full w-20 h-8 flex items-center justify-center font-bold hover:bg-accent"
              @mouseenter="selectYear(4)"
            >
              <span>4, 5 & 6</span>
            </div>
          </div>
        </div>
      </div>
      <Transition name="fade">
        <div
          class="year-one-description m-2 pb-2 bg-bgaccent border-secondary border-2 rounded-xl text-center"
          v-if="selectedYear > 0"
        >
          <span class="text-primary">{{ yearDescription }}</span>
        </div>
      </Transition>
    </div>
    <div class="subjects-part text-center flex flex-col items-center">
      <p class="text-3xl text-primary">Subjects</p>
      <p
        class="text-xl text-primary"
        v-if="selectedYear > 0 && selectedYear < 4"
      >
        Year {{ selectedYear }}
      </p>
      <p class="text-xl text-primary" v-if="selectedYear >= 4">
        Years 4, 5, and 6
      </p>
      <div
        class="subjects-container h-full grid grid-cols-1 w-fit items-center"
      >
        <TransitionGroup
          name="fade"
          tag="div"
          class="flex flex-col h-full items-center justify-evenly"
        >
          <div
            v-for="subject in subjects"
            :key="subject"
            class="bg-bgaccent w-full mx-4 border-2 border-primary rounded-xl"
          >
            {{ subject }}
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMiddleSchoolSubjectsStore } from "@/store";
import { computed, ref } from "vue";

const selectedYear = ref(0);
const store = useMiddleSchoolSubjectsStore();

const selectYear = (year: number) => {
  selectedYear.value = year;
};

const yearDescription = computed(() => {
  const descriptions: string[] = [
    "",
    `The first year is an introduction year. Not all subjects are given yet.`,
    `More subjects are introduced and their complexity deepens.`,
    `The broadest year of all, all available subjects are scheduled this year.`,
    `Students have now selected their preferred subject set and specialize on those.`,
  ];
  return descriptions[selectedYear.value];
});

const subjects = computed(() => {
  return store.subjectsForYear(selectedYear.value);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
