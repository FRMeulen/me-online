<template>
  <div class="switcher bg-white debug-red" @click="switchTheme">SWITCH</div>
</template>

<script lang="ts" setup>
const switchTheme = () => {
  document.documentElement.setAttribute("data-theme", "light");
};
</script>
