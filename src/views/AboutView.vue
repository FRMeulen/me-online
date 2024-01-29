<template>
  <div class="about h-full overflow-hidden flex flex-row">
    <div class="h-full w-2/3 flex flex-col mr-1">
      <ProfileCard />
      <SkillsCard />
    </div>
    <div class="h-full w-1/3 flex flex-col ml-1">
      <HobbiesCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "@/components/about/Profile/ProfileCard.vue";
import HobbiesCard from "@/components/about/Hobbies/HobbiesCard.vue";
import SkillsCard from "@/components/about/Skills/SkillsCard.vue";
</script>
