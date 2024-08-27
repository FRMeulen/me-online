<template>
  <div class="flex flex-col items-center h-full w-full" @wheel="scroll">
    <TriangleArrow
      :direction="'up'"
      :size="30"
      :color="upColor"
      :margin="1.5"
      @click="scrollTimelineUp"
    />
    <div
      class="flex flex-col items-center justify-between entries-container h-full w-full"
    >
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="0"
          v-model="moments[0]"
          @on-select="selectMoment"
        />
      </div>
      <TriangleArrow :direction="'down'" :size="10" :color="'accent'" />
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="1"
          v-model="moments[1]"
          @on-select="selectMoment"
        />
      </div>
      <TriangleArrow :direction="'down'" :size="10" :color="'accent'" />
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="2"
          v-model="moments[2]"
          @on-select="selectMoment"
        />
      </div>
      <TriangleArrow :direction="'down'" :size="10" :color="'accent'" />
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="3"
          v-model="moments[3]"
          @on-select="selectMoment"
        />
      </div>
      <TriangleArrow :direction="'down'" :size="10" :color="'accent'" />
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="4"
          v-model="moments[4]"
          @on-select="selectMoment"
        />
      </div>
    </div>
    <TriangleArrow
      :direction="'down'"
      :size="30"
      :color="downColor"
      :margin="1.5"
      @click="scrollTimelineDown"
    />
  </div>
</template>

<script lang="ts" setup>
import { Moments } from "@/constants";
import { computed, ref } from "vue";
import TimeLineEntry from "./TimeLineEntry.vue";
import TriangleArrow from "@/components/shared/TriangleArrow.vue";

const selectedSlot = ref(0);
const scrollPos = ref(0);

const upColor = computed(() => {
  return scrollPos.value <= 0 ? "disabled" : "primary";
});

const downColor = computed(() => {
  return scrollPos.value >= Moments.length - 5 ? "disabled" : "primary";
});

const moments = computed(() => {
  return Moments.slice(scrollPos.value, 5 + scrollPos.value);
});

const emit = defineEmits<{
  (e: "onSelect", code: string): string;
}>();

const selectMoment = (number: number) => {
  selectedSlot.value = number;
  emit("onSelect", moments.value[number].code);
};

const scroll = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    scrollTimelineDown();
  } else {
    scrollTimelineUp();
  }

  emit("onSelect", moments.value[selectedSlot.value].code);
};

const scrollTimelineDown = () => {
  scrollPos.value =
    scrollPos.value >= Moments.length - 5
      ? Moments.length - 5
      : scrollPos.value + 1;
};

const scrollTimelineUp = () => {
  scrollPos.value = scrollPos.value <= 0 ? 0 : scrollPos.value - 1;
};
</script>
