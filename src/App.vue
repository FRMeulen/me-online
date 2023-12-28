<template>
  <div class="flex flex-row z-50">
    <SideBar />
    <div class="min-h-screen max-h-screen bg-bgprimary w-full flex flex-col">
      <RouterView class="router-view m-2 text-white" v-slot="{ Component }">
        <Transition name="page-flipbook" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/layout/SideBar.vue";
</script>

<style>
div {
  overflow: hidden;
}
</style>

<style scoped>
.page-flipbook-enter-active,
.page-flipbook-leave-active {
  transition: 600ms ease all;
}

.page-flipbook-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.page-flipbook-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
