<template>
  <div
    class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg"
  >
    <SideBarIcon
      icon-name="fa-solid fa-house"
      tooltip="Home"
      @click="navigate('home')"
    />
    <SideBarIcon
      icon-name="fa-solid fa-question"
      tooltip="About"
      @click="navigate('about')"
    />
    <SideBarIcon
      icon-name="fa-solid fa-envelope"
      tooltip="Contact"
      @click="navigate('contact')"
    />
  </div>
</template>

<script setup lang="ts">
import SideBarIcon from "@/components/SideBar/SideBarIcon.vue";
import router from "@/router";

const navigate = (view: string) => {
  router.push({ name: view });
};
</script>
