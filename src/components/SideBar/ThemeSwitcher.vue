<template>
  <div
    class="switcher flex bg-bgprimary border-secondary border-4 m-2 rounded-2xl justify-between"
    @click="switchTheme"
  >
    <Transition name="sun-slide">
      <div class="ml-1 bg-bgprimary rounded-xl" v-if="isTheme('light')">☀</div>
    </Transition>
    <div></div>
    <Transition name="moon-slide">
      <div class="mr-1 bg-bgprimary rounded-xl" v-if="isTheme('dark')">🌙</div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from "@/store";
import { ref } from "vue";

const store = useThemeStore();
const theme = ref(store.currentTheme);

const isTheme = (t: string) => {
  return theme.value === t;
};

const switchTheme = () => {
  store.switchTheme();
  document.documentElement.setAttribute("data-theme", theme.value);
};
</script>

<style scoped>
.sun-slide-enter-active,
.sun-slide-leave-active,
.moon-slide-enter-active,
.moon-slide-leave-active {
  transition: 300ms ease all;
}

.sun-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.sun-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.moon-slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.moon-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
