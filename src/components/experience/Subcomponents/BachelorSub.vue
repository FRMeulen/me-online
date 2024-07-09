<template>
  <div class="relative">
    <!-- Element 1 -->
    <div
      ref="element1"
      class="absolute bg-blue-500 rounded-full w-4 h-4 top-10 left-10"
    ></div>

    <!-- Element 2 -->
    <div
      ref="element2"
      class="absolute bg-green-500 rounded-full w-4 h-4 top-20 left-50"
    ></div>

    <!-- Line -->
    <div
      ref="line"
      class="absolute border border-red-500"
      :style="lineStyle"
    ></div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const element1 = ref(null);
const element2 = ref(null);
const line = ref(null);

// Watch for changes in element positions and update the line
watchEffect(() => {
  if (element1.value && element2.value && line.value) {
    const rect1 = element1.value.getBoundingClientRect();
    const rect2 = element2.value.getBoundingClientRect();

    // Calculate line dimensions and position
    const lineStyle = {
      top: `${rect1.top + rect1.height / 2}px`,
      left: `${rect1.left + rect1.width / 2}px`,
      width: `${Math.sqrt(
        (rect2.left - rect1.left) ** 2 + (rect2.top - rect1.top) ** 2,
      )}px`,
      transform: `rotate(${Math.atan2(
        rect2.top - rect1.top,
        rect2.left - rect1.left,
      )}rad)`,
    };

    // Apply styles to line
    Object.assign(line.value.style, lineStyle);
  }
});
</script>

<style scoped>
.relative {
  position: relative;
  height: 300px;
  width: 100%;
}

.absolute {
  position: absolute;
}

.border {
  border-width: 1px;
  border-style: solid;
}
</style>
