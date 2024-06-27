<template>
  <div class="py-2 details-box debug-red" @click="debug">
    {{ title }}
    <div class="w-full h-2 flex bg-white"></div>
    {{ description }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  description: String,
});

const title = ref(props.title);
const description = ref(props.description);

const debug = () => {
  console.log(title.value);
  console.log(description.value);
};
</script>
