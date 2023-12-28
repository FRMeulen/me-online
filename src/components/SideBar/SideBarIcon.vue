<template>
  <div class="sidebar-icon flex flex-row">
    <font-awesome-icon class="w-1/3 ml-2" :icon="icon" />
    <span class="w-2/3 justify-center mr-2">{{ buttonName }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  iconName: String,
  buttonName: String,
});

const icon = ref(props.iconName);
const buttonName = ref(props.buttonName);
</script>
