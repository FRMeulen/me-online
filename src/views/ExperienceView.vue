<template>
  <div class="experience-education h-full flex flex-row">
    <div
      class="timeline-box flex mt-2 h-full"
      v-on:wheel="handleScroll"
      ref="timeline"
    >
      <fwb-timeline
        class="timeline m-2"
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
      <TransitionGroup name="fade-slide">
        <MomentDetails
          v-for="moment in filteredMoments"
          :key="moment.code"
          :title="moment.title"
          :description="moment.description"
          :show-file-list="false"
        ></MomentDetails>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FwbTimeline } from "flowbite-vue";
import TimeBarEntry from "@/components/experience/TimeBarEntry.vue";
import { Moments } from "@/constants";
import { ref, computed, Ref } from "vue";
import MomentDetails from "@/components/experience/MomentDetails.vue";
import { useElementSize } from "@vueuse/core";

interface ElementSize {
  width: Ref<number>;
  height: Ref<number>;
}

let selectedMoment = ref("");
let scrollPosition = ref(0);

const timeline = ref(null);
const timelineSize: ElementSize = useElementSize(timeline);

const maxScroll = computed(() => {
  console.log(timelineSize.height.value);
  console.log(timelineSize.height.value * -0.1);
  return timelineSize.height.value * -0.1;
});

const selectMoment = (momentCode: string) => {
  selectedMoment.value = momentCode;
};

const filteredMoments = computed(() => {
  return Moments.filter((moment) => moment.code === selectedMoment.value);
});

const handleScroll = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    scrollPosition.value =
      scrollPosition.value >= 0 ? 0 : scrollPosition.value + 10;
  } else if (e.deltaY < 0) {
    scrollPosition.value =
      scrollPosition.value <= maxScroll.value
        ? maxScroll.value
        : scrollPosition.value - 10;
  }
};
</script>

<style scoped>
.timeline-box::-webkit-scrollbar {
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
