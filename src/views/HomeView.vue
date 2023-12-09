<template>
  <div class="home h-full">
    <HomeBackGround />
    <div
      class="introduction-container flex flex-col items-start h-full justify-center w-full"
    >
      <span
        class="font-bold leading-relaxed self-center text-7xl md:text-8xl lg:text-9xl"
      >
        Hi there!
      </span>
      <div class="flex self-center justify-center w-full">
        <div class="bg-gradient-to-r from-secondary to-primary w-1/3 h-1"></div>
        <div class="bg-gradient-to-r from-primary to-secondary w-1/3 h-1"></div>
      </div>
      <span
        class="font-bold leading-relaxed self-center text-7xl md:text-8xl lg:text-9xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent"
      >
        Welcome
      </span>
      <span
        class="font-bold leading-relaxed self-center text-7xl md:text-8xl lg:text-9xl"
      >
        to my
      </span>
      <span
        class="font-bold leading-relaxed self-center text-7xl md:text-8xl lg:text-9xl bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent pb-3"
      >
        homepage
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeBackGround from "@/components/home/HomeBackGround.vue";
</script>
