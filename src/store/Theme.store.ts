import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref("dark");

  function switchTheme() {
    theme.value = theme.value === "dark" ? "light" : "dark";
  }

  const currentTheme = computed(() => {
    return theme;
  });

  return { currentTheme, switchTheme };
});
