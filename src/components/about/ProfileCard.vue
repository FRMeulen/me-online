<template>
  <div
    class="w-2/3 bg-bgaccent h-1/2 flex flex-col rounded-xl border-secondary border-2"
  >
    <span
      class="font-bold leading-relaxed text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent w-fit"
    >
      Profile
    </span>
    <div class="flex flex-row self-center w-full">
      <div class="bg-gradient-to-r from-secondary to-primary w-1/2 h-1"></div>
      <div class="bg-gradient-to-r from-primary to-secondary w-1/2 h-1"></div>
    </div>
    <div class="text-container m-2">
      <p>
        My name is <ColorWord word="Falco" />, and I'm a {{ age }}-year-old
        <ColorWord word="fullstack software developer" /> from the Netherlands.
      </p>
      <p>I am friendly, helpful, and eager to learn.</p>
      <p>Things I like to do in my spare time include:</p>
      <div class="hobbies-container flex flex-row w-fit mx-auto">
        <HobbyCard
          v-for="hobby in Hobbies"
          v-bind:key="hobby.code"
          :hobby-name="hobby.hobbyName"
          :icon-name="hobby.iconName"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Hobbies } from "@/constants";
import HobbyCard from "@/components/about/HobbyCard.vue";
import ColorWord from "@/components/about/ColorWord.vue";

const age = computed(() => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const pastBirthDay =
    currentMonth > 5 || (currentMonth == 5 && currentDay >= 29);

  return pastBirthDay ? currentYear - 1998 : currentYear - 1999;
});
</script>

<style scoped>
.text-container > p {
  margin-bottom: 0.5rem;
}
</style>
