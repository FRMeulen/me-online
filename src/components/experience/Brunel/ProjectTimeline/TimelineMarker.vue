<template>
  <div
    class="relative h-full flex flex-col items-center overflow-visible bg-textprimary w-1"
    :style="{ left: markerX }"
  >
    <TriangleArrow
      class="absolute top-0.5 transform -translate-y-1/2"
      :color="'text-primary'"
      :direction="'down'"
      :margin="0"
      :size="8"
    />
    <div class="h-full"></div>
    <TriangleArrow
      class="absolute bottom-0.5 transform translate-y-1/2"
      :color="'text-primary'"
      :direction="'up'"
      :margin="0"
      :size="8"
    />
  </div>
</template>

<script lang="ts" setup>
import TriangleArrow from "@/components/shared/TriangleArrow.vue";

const props = defineProps({
  markerX: {
    type: String,
    required: true,
  },
});
</script>
