<template>
  <div class="flex flex-row z-50">
    <div
      class="fixed top-0 left-16 z-0 min-h-screen min-w-full bg-gradient-to-l from-gray-600 to-gray-800"
    >
      <router-view class="m-2" />
    </div>
    <SideBar />
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/layout/SideBar.vue";
</script>
