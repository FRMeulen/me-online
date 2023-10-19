<template>
  <div class="flex flex-row z-50">
    <SideBar />
    <div class="min-h-screen max-h-screen bg-bgprimary w-full flex flex-col">
      <router-view class="m-2 text-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
//import { useStore } from "vuex";
import SideBar from "./components/layout/SideBar.vue";

//const store = useStore();
</script>
