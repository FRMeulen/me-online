<template>
  <div class="experience-education h-full flex flex-row">
    <div class="timeline-box flex mt-2 h-full">
      <fwb-timeline
        class="timeline m-2"
        v-on:wheel="handleScroll"
        :style="{ position: 'relative', top: scrollPosition + 'px' }"
      >
        <TimeBarEntry
          class="mb-8 border-primary border-2 rounded-xl p-2 hover:bg-gray-500"
          v-for="moment in Moments"
          :key="moment.code"
          :time="moment.time"
          :title="moment.title"
          :subtitle="moment.subtitle"
          @mouseover="selectMoment(moment.code)"
        />
      </fwb-timeline>
    </div>
    <div class="moment-details flex flex-col h-full w-full p-4 debug-green">
      <p>{{ scrollPosition }}</p>
      <Transition name="fade-slide" mode="out-in">
        <component :is="MomentDetails" v-model="selectedMoment"></component>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FwbTimeline } from "flowbite-vue";
import TimeBarEntry from "@/components/experience/TimeBarEntry.vue";
import { Moments } from "@/constants";
import { ref, computed } from "vue";
import MomentDetails from "@/components/experience/MomentDetails.vue";

let selectedMomentCode = ref("");
let scrollPosition = ref(0);

const selectMoment = (momentCode: string) => {
  console.log(momentCode + " selected.");
  selectedMomentCode.value = momentCode;
};

const selectedMoment = computed(() => {
  var moment = Moments.filter((m) => m.code === selectedMomentCode.value);
  console.log(moment);
  return moment;
});

const handleScroll = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    scrollPosition.value =
      scrollPosition.value >= 0 ? 0 : scrollPosition.value + 10;
  } else if (e.deltaY < 0) {
    scrollPosition.value -= 10;
  }
};
</script>

<style scoped>
.timeline-box::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-slide-enter-active,
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
