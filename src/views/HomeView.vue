<template>
  <div class="home h-full overflow-hidden" ref="view">
    <div
      class="introduction-container h-full w-fit flex flex-col justify-center items-center m-auto"
      ref="intro_container"
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
        class="font-bold leading-relaxed self-center text-7xl md:text-8xl lg:text-9xl bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent pb-5"
      >
        homepage
      </span>
    </div>
    <HomeBackGround
      :viewWidth="viewSize.width.value"
      :viewHeight="viewSize.height.value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import HomeBackGround from "@/components/home/HomeBackGround.vue";
import { useElementSize } from "@vueuse/core";

interface ElementSize {
  width: Ref<number>;
  height: Ref<number>;
}

const view = ref(null);
const intro_container = ref(null);
const viewSize: ElementSize = useElementSize(view);
</script>
