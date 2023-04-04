<template>
  <div
    class="flex flex-row border-b-gray-200 border-2 my-1 px-2 rounded-xl hover:ml-2 transition-all"
  >
    <font-awesome-icon :icon="icon" class="text-white mt-1 mr-3" />
    <a :href="link" class="card-text">
      {{ desc }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  iconName: String,
  description: String,
  url: String,
});

const icon = ref(props.iconName);
const desc = ref(props.description);
const link = ref(props.url);
</script>
