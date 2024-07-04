<template>
  <a
    :href="link"
    class="flex flex-row border-textprimary border-2 my-2 mx-2 p-2 rounded-xl hover:bg-bgaccent text-textprimary hover:text-primary transition-all"
    target="_blank"
  >
    <font-awesome-icon :icon="icon" class="" />
  </a>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  iconName: String,
  url: String,
});

const icon = ref(props.iconName);
const link = ref(props.url);
</script>
