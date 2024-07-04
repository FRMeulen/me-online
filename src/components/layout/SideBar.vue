<template>
  <div
    class="h-screen w-32 p-1 flex flex-col items-center justify-between bg-bgsecondary textsecondary shadow-lg border-r-2 border-primary"
  >
    <div class="flex flex-col items-center">
      <div class="icon-container items-center">
        <div
          class="bg-gradient-to-br from-primary via-secondary to-primary rounded-full"
        >
          <img alt="Me" class="rounded-full p-1" src="@/assets/me.jpg" />
        </div>
      </div>
      <ThemeSwitcher class="w-16" />
    </div>
    <div class="button-container">
      <PageButton
        icon-name="fa-solid fa-house"
        button-name="Home"
        @click="navigate('home')"
      />
      <PageButton
        icon-name="fa-solid fa-question"
        button-name="About"
        @click="navigate('about')"
      />
      <PageButton
        icon-name="fa-solid fa-clipboard-list"
        button-name="Experience"
        @click="navigate('experience')"
      />
      <PageButton
        icon-name="fa-solid fa-coffee"
        button-name="Sandbox"
        @click="navigate('sandbox')"
      />
    </div>
    <div class="sidebar-footer flex flex-col">
      <div class="bg-primary w-full h-0.5"></div>
      <span class="self-center">Contact</span>
      <div class="socials-icons-container flex flex-row">
        <SocialsIcon
          icon-name="fa-brands fa-github"
          url="https://github.com/FRMeulen"
        />
        <SocialsIcon
          icon-name="fa-brands fa-linkedin"
          url="https://www.linkedin.com/in/frmeulen/"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from "@/components/SideBar/ThemeSwitcher.vue";
import PageButton from "@/components/SideBar/PageButton.vue";
import SocialsIcon from "@/components/SideBar/SocialsIcon.vue";
import router from "@/router";

const navigate = (view: string) => {
  console.log(`Navigating to ${view}.`);
  router.push({ name: view });
};
</script>
