<template>
  <div class="flex flex-row z-50">
    <SideBar />
    <div class="fixed top-0 left-20 z-0">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/layout/SideBar.vue";
</script>
