<template>
  <div class="home h-full">
    <div class="introduction-container flex flex-row h-fit w-full">
      <div
        class="flex flex-col w-2/3 h-full self-center bg-bgaccent rounded-3xl mr-6"
      >
        <p
          class="font-bold leading-relaxed self-center sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"
        >
          Hello there!
        </p>
        <p
          class="italic h-[6rem] self-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent"
        >
          Welcome to my webpage.
        </p>
      </div>
      <div
        class="w-1/3 bg-gradient-to-br from-primary via-secondary to-primary rounded-full"
      >
        <img alt="Me" class="rounded-full p-1" src="@/assets/me.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
