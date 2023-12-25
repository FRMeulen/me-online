<template>
  <div
    class="h-screen w-32 p-1 flex flex-col items-center justify-between bg-bgsecondary textsecondary shadow-lg border-r-2 border-primary"
  >
    <div class="icon-container items-center">
      <div
        class="bg-gradient-to-br from-primary via-secondary to-primary rounded-full"
      >
        <img alt="Me" class="rounded-full p-1" src="@/assets/me.jpg" />
      </div>
    </div>
    <div class="button-container">
      <SideBarIcon
        icon-name="fa-solid fa-house"
        button-name="Home"
        @click="navigate('home')"
      />
      <SideBarIcon
        icon-name="fa-solid fa-question"
        button-name="About"
        @click="navigate('about')"
      />
      <SideBarIcon
        icon-name="fa-solid fa-envelope"
        button-name="Contact"
        @click="navigate('contact')"
      />
      <SideBarIcon
        icon-name="fa-solid fa-coffee"
        button-name="Sandbox"
        @click="navigate('sandbox')"
      />
    </div>
    <div class="sidebar-footer">Sidebar footer</div>
  </div>
</template>

<script setup lang="ts">
import SideBarIcon from "@/components/SideBar/SideBarIcon.vue";
import router from "@/router";

const navigate = (view: string) => {
  console.log(`Navigating to ${view}.`);
  router.push({ name: view });
};
</script>
