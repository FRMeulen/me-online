<template>
  <div class="sidebar-icon group">
    <font-awesome-icon :icon="icon" />
    <span class="sidebar-tooltip group-hover:scale-100">{{ tooltipText }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  iconName: String,
  tooltip: String,
});

const icon = ref(props.iconName);
const tooltipText = ref(props.tooltip);
</script>
