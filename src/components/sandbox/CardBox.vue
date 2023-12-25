<template>
  <div :class="colorClass">Test</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  width: Number,
  height: Number,
  color: String,
});

const colorClass = computed(() => {
  return `bg-${props.color}`;
});
</script>
