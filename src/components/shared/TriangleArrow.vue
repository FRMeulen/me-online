<template>
  <div class="triangle" :class="direction"></div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  direction: String,
  color: String,
  size: Number,
  margin: {
    type: Number,
    default: 0.75,
  },
});

const direction = computed(() => "triangle-" + props.direction);
const size = computed(() => props.size + "px");
const margin = computed(() => props.margin + "rem");
const color = computed(() => {
  if (props.color === "disabled") {
    return "transparent";
  }

  return "var(--" + props.color + ")";
});
</script>

<style scoped>
.triangle {
  width: 0;
  height: 0;
  position: relative;
  border: solid v-bind(size);
}

.triangle-down {
  border-color: v-bind(color) transparent transparent transparent;
  margin-top: v-bind(margin);
}

.triangle-left {
  border-color: transparent v-bind(color) transparent transparent;
  margin-right: v-bind(margin);
}

.triangle-up {
  border-color: transparent transparent v-bind(color) transparent;
  margin-bottom: v-bind(margin);
}

.triangle-right {
  border-color: transparent transparent transparent v-bind(color);
  margin-left: v-bind(margin);
}
</style>
