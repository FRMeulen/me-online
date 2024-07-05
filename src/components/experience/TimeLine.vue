<template>
  <div class="flex flex-col items-center h-full w-full" @wheel="scroll">
    <div class="triangle-up mb-8 h-fit"></div>
    <div
      class="flex flex-col items-center justify-between entries-container h-full w-full"
    >
      <!-- TODO: Animate scrolling. -->
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="0"
          v-model="moments[0]"
          @on-select="selectMoment"
        />
      </div>
      <div class="small-triangle-down"></div>
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="1"
          v-model="moments[1]"
          @on-select="selectMoment"
        />
      </div>
      <div class="small-triangle-down"></div>
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="2"
          v-model="moments[2]"
          @on-select="selectMoment"
        />
      </div>
      <div class="small-triangle-down"></div>
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="3"
          v-model="moments[3]"
          @on-select="selectMoment"
        />
      </div>
      <div class="small-triangle-down"></div>
      <div class="h-1/5 w-full">
        <TimeLineEntry
          :number="4"
          v-model="moments[4]"
          @on-select="selectMoment"
        />
      </div>
    </div>
    <div class="triangle-down mt-8 h-fit"></div>
  </div>
</template>

<script lang="ts" setup>
import { Moments } from "@/constants";
import { computed, ref } from "vue";
import TimeLineEntry from "./TimeLineEntry.vue";

const selectedSlot = ref(0);
const scrollPos = ref(0);

const upColor = computed(() => {
  return scrollPos.value <= 0 ? "transparent" : "var(--text-primary)";
});

const downColor = computed(() => {
  return scrollPos.value >= Moments.length - 5
    ? "transparent"
    : "var(--text-primary)";
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
    console.log("Scroll down");
    scrollPos.value =
      scrollPos.value >= Moments.length - 5
        ? Moments.length - 5
        : scrollPos.value + 1;
  } else {
    scrollPos.value = scrollPos.value <= 0 ? 0 : scrollPos.value - 1;
  }

  emit("onSelect", moments.value[selectedSlot.value].code);
};
</script>

<style scoped>
.triangle-up {
  width: 0;
  height: 0;
  position: relative;
  border: solid 20px;
  border-color: transparent transparent v-bind(upColor) transparent;
}

.triangle-down {
  width: 0;
  height: 0;
  position: relative;
  border: solid 20px;
  border-color: v-bind(downColor) transparent transparent transparent;
}

.small-triangle-up {
  width: 0;
  height: 0;
  position: relative;
  border: solid 10px;
  border-color: transparent transparent var(--primary) transparent;
  margin-bottom: 0.75rem;
}

.small-triangle-down {
  width: 0;
  height: 0;
  position: relative;
  border: solid 10px;
  border-color: var(--primary) transparent transparent transparent;
  margin-top: 0.75rem;
}
</style>
