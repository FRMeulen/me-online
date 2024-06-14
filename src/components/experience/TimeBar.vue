<template>
  <div class="flex flex-col w-full justify-center items-center p-2">
    <div
      class="h-1/2 flex bg-gradient-to-r from-secondary to-primary rounded-xl w-full"
    ></div>
    <span>{{ start }} - {{ end }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  start: Number,
  end: Number,
});

const start = ref(props.start);
const end = ref(props.end);
</script>
