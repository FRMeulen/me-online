<template>
  <div
    class="flex flex-col border-white mx-1 border-2 rounded-xl bg-bgprimary"
    :class="hobby"
  >
    <font-awesome-icon class="mt-1" :icon="icon" />
    <span class="w-fit justify-center mb-1 mx-1">{{ hobby }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  iconName: String,
  hobbyName: String,
});

const icon = ref(props.iconName);
const hobby = ref(props.hobbyName);
</script>
