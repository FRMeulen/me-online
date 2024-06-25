<template>
  <div class="details-box">
    {{ name }}
    <div class="w-full h-2 flex bg-white"></div>
    {{ description }}
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  name: String,
  description: String,
});

const name = ref(props.name);
const description = ref(props.description);

watchEffect(() => {
  name.value = props.name;
  description.value = props.description;
});
</script>
