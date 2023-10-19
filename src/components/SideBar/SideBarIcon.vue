<template>
  <div class="sidebar-icon flex flex-row">
    <font-awesome-icon class="mr-2" :icon="icon" />
    <span>{{ buttonName }}</span>
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
