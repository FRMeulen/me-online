<template>
  <span class="bg-accent bg-clip-text text-transparent">{{ word }}</span>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  word: String,
});

const word = ref(props.word);
</script>
