<template>
  <div
    class="flex flex-row border-white m-1 py-2 hover:py-5 border-2 rounded-xl bg-bgprimary hover:bg-primary transition-all ease-linear duration-200 group"
    :class="hobby"
  >
    <font-awesome-icon
      class="mt-1.5 ml-1 w-1/5 group group-hover:ml-4 transition-all ease-linear duration-200"
      :icon="icon"
    />
    <span class="justify-center mb-1 mx-auto px-1 w-fit">{{ hobby }}</span>
    <font-awesome-icon
      class="mt-1.5 mr-1 w-1/5 group group-hover:mr-4 transition-all ease-linear duration-200"
      :icon="icon"
    />
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
