<template>
  <div class="flex flex-row z-50">
    <SideBar />
    <div
      class="min-h-screen max-h-screen bg-gradient-to-l from-gray-600 to-gray-800"
      :style="{ width: widthClass }"
    >
      <router-view class="m-2 text-white bg-slate-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import SideBar from "./components/layout/SideBar.vue";

const store = useStore();

const sidebarWidth = ref(32);
const heightBuffer = ref(16);

store.commit("updateWidth", window.innerWidth - sidebarWidth.value);
store.commit("updateHeight", window.innerHeight - heightBuffer.value);

function onResize(): void {
  store.commit("updateWidth", window.innerWidth - sidebarWidth.value);
}

const widthClass = computed(() => {
  return `${store.getters.width}px`;
});

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>
