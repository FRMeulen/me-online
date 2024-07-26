<template>
  <div class="experience-education h-full flex flex-row">
    <div
      class="custom-timeline border-2 border-primary rounded-xl p-4 flex flex-col h-full w-1/5 md:w-1/4"
    >
      <TimeLine @on-select="selectMoment" class="flex flex-col" />
    </div>
    <div class="moment-details flex flex-col h-full w-full p-4">
      <TransitionGroup name="fade-slide">
        <MomentDetails
          v-for="moment in filteredMoments"
          :key="moment.code"
          :moment="moment"
          class="flex"
        ></MomentDetails>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Moments } from "@/constants";
import { ref, computed } from "vue";

import TimeLine from "@/components/experience/TimeLine.vue";
import MomentDetails from "@/components/experience/MomentDetails.vue";

let selectedMoment = ref("");

const selectMoment = (momentCode: string) => {
  selectedMoment.value = momentCode;
};

const filteredMoments = computed(() => {
  return Moments.filter((moment) => moment.code === selectedMoment.value);
});
</script>

<style scoped>
.timeline::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-slide-enter-active {
  transition: 300ms ease all;
  transition-delay: 300ms;
}

.fade-slide-leave-active {
  transition: 300ms ease all;
}

.fade-slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.fade-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
