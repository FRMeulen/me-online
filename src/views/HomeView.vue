<template>
  <div class="home w-11/12">
    <div class="flex flex-row max-h-80">
      <img alt="Me" src="@/assets/me.jpg" class="profile-icon" />
      <div class="card w-2/3">
        <h1 class="card-title">Hello there! - Let me introduce myself.</h1>
        <p class="card-text h-3/4">
          I'm Falco van der Meulen, a friendly full-stack developer and
          enthusiastic climber.<br />
          Currently 24 years of age and living near Rotterdam, South-Holland.<br />
          I love playing video games, going to festivals, climbing, watching
          anime, or hanging out with friends.<br />
          <br />
        </p>
        <p class="text-right text-white">
          Feel free to have a look around my webpage :)
        </p>
      </div>
      <div class="card-no-hover w-1/5">
        <h1 class="card-title">Find me</h1>
        <SocialsIcon
          icon-name="fa-brands fa-github"
          description="Github: FRMeulen"
          url="https://github.com/FRMeulen"
        />
        <SocialsIcon
          icon-name="fa-brands fa-linkedin"
          description="LinkedIn"
          url="https://www.linkedin.com/in/falco-van-der-meulen-671614153/"
        />
        <SocialsIcon
          icon-name="fa-solid fa-envelope"
          description="falco.meulen@gmail.com"
          url="#"
        />
      </div>
    </div>
    <div class="flex flex-row">
      <div class="card w-full">
        <h1 class="card-text">To-be timeline?</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialsIcon from "@/components/home/SocialsIcon.vue";
</script>
