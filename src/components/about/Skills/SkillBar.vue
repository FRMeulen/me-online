<template>
  <div
    class="skill-bar bg-bgsecondary rounded-xl w-full border-2 border-secondary my-0.5"
  >
    <div class="flex flex-col">
      <span class="text-xl m-1 ml-3">{{ name }}</span>
      <div class="bar-container flex flex-row w-full rounded-b-xl">
        <div
          class="filled-part bg-gradient-to-b from-primary from-70% to-slate-400 h-5"
          :style="{ width: filled + '%' }"
        ></div>
        <div
          class="empty-part bg-bgprimary h-5 w-full"
          :style="{ width: empty + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: String,
  percentage: Number,
});

const name = ref(props.name);
const filled = computed(() => {
  return props.percentage === undefined
    ? 0
    : props.percentage < 0
    ? 0
    : props.percentage > 100
    ? 100
    : props.percentage;
});
const empty = computed(() => {
  return 100 - filled.value;
});
</script>
