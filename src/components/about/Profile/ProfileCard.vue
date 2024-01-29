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
    <div class="profile-box flex flex-row text-xl m-2 h-full w-fit">
      <img class="transform -scale-x-100" src="@/assets/portrait.png" />
      <div class="right-section flex flex-col w-full">
        <div class="top-text-section flex flex-col w-full h-1/2 justify-evenly">
          <p>Hi, I'm <ColorWord word="Falco" />.</p>
          <p>
            A {{ age }}-year-old <ColorWord word="full-stack developer" /> from
            the Netherlands.
          </p>
          <p>
            I am a <ColorWord word="friendly" /> guy with a love for cats and a
            <ColorWord word="passion" /> for programming.
          </p>
          <p>
            Working in a <ColorWord word="team" /> has my preference, it keeps
            my <ColorWord word="knowledge" /> up to date.
          </p>
        </div>
        <div class="bottom-text-section flex flex-row w-full h-1/2">
          <div class="bottom-text flex flex-col w-full justify-evenly">
            <p>
              <ColorWord word="Communicating" /> with clients and colleagues is
              <ColorWord word="no problem" /> for me, in fact I prefer being
              around other people.
            </p>
            <p>
              When I'm not working, I like to play video games, hang out with
              friends, and pet my cute cat <ColorWord word="Simba" />.
            </p>
          </div>
          <img src="@/assets/simba.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ColorWord from "@/components/about/Profile/ColorWord.vue";
import { Secrets } from "@/constants";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const age = computed(() => {
  const pastBirthDay =
    month > Secrets.birthMonth ||
    (month == Secrets.birthMonth && day > Secrets.birthDay);
  return pastBirthDay ? year - 1998 : year - 1999;
});
</script>
