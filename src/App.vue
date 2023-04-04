<template>
  <div class="flex flex-row z-50">
    <SideBar />
    <div
      class="min-h-screen bg-gradient-to-l from-gray-600 to-gray-800"
      :style="{ width: widthClass }"
    >
      <router-view class="m-2 text-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import SideBar from "./components/layout/SideBar.vue";

const sidebarWidth = ref(32);
const routerViewWidth = ref(window.innerWidth - sidebarWidth.value);

function onResize(): void {
  routerViewWidth.value = window.innerWidth - sidebarWidth.value;
}

const widthClass = computed(() => {
  return `${routerViewWidth.value - sidebarWidth.value}px`;
});

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>
