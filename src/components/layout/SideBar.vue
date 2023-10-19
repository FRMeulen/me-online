<template>
  <div
    class="h-screen w-16 p-1 flex flex-col bg-bgsecondary textsecondary shadow-lg border-r-2 border-primary"
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
    <SideBarIcon
      icon-name="fa-solid fa-coffee"
      tooltip="Sandbox"
      @click="navigate('sandbox')"
    />
  </div>
</template>

<script setup lang="ts">
import SideBarIcon from "@/components/SideBar/SideBarIcon.vue";
import router from "@/router";

const navigate = (view: string) => {
  console.log(view);
  router.push({ name: view });
};
</script>
