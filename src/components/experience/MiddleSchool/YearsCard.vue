<template>
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
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedYear = ref(0);

const selectYear = (year: number) => {
  selectedYear.value = year;
  emit("onSelect", selectedYear.value);
};

const emit = defineEmits<{
  (e: "onSelect", year: number): number;
}>();
</script>
