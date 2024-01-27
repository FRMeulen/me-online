<template>
  <div
    class="profile w-full h-1/2 mb-1 bg-gradient-to-b from-bgprimary to-bgaccent rounded-xl border-secondary border-2 flex flex-col"
  >
    <span
      class="font-bold leading-relaxed text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent w-fit ml-2"
    >
      Profile
    </span>
    <div class="flex flex-row self-center w-full">
      <div class="bg-gradient-to-r from-secondary to-primary w-1/2 h-1"></div>
      <div class="bg-gradient-to-r from-primary to-secondary w-1/2 h-1"></div>
    </div>
    <div class="profile-box flex flex-row text-xl m-2 h-full">
      <div class="text-container w-4/5">
        <p>
          My name is <ColorWord word="Falco" />, and I'm a medior
          <ColorWord word="full-stack developer" /> from the Netherlands.
        </p>
      </div>
      <div class="portrait-container w-1/5 flex justify-end">
        <img
          class="portrait self-end"
          alt="Portrait"
          src="@/assets/portrait.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ColorWord from "@/components/about/Profile/ColorWord.vue";
</script>
