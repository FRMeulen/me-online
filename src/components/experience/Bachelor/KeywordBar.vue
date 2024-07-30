<template>
  <div class="sliding-text-bar">
    <div class="text-wrapper" ref="textWrapper">
      <span
        v-for="(word, index) in words"
        :key="index"
        class="text-item"
        :style="{ marginRight: spacerMargin + 'px' }"
      >
        {{ word }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const spacerMargin = ref(400);

const props = defineProps({
  words: {
    type: Array,
    required: true,
  },
});
const words = ref(props.words);
</script>

<style scoped>
.sliding-text-bar {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
}

.text-wrapper {
  display: inline-block;
  white-space: nowrap;
  animation: slide 10s linear infinite;
}

.text-item {
  display: inline-block;
}

@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
