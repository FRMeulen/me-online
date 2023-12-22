<template>
  <TransitionGroup name="words" tag="div">
    <div v-for="word in displayedWords" :key="word.text" :style="word.style">
      {{ word.text }}
    </div>
  </TransitionGroup>
</template>

<style scoped>
.words-enter-active,
.words-leave-active {
  transition: all 0.5s ease;
}
.words-enter-from,
.words-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";

const wordInterval = 2500;
const wordShowDuration = 2000;

interface Word {
  text: string;
  style: Record<string, string>;
}

onMounted(() => {
  setInterval(addWord, wordInterval); // Adjust timing here.
});

const displayedWords: Ref<Word[]> = ref([]);

const addWord = (): void => {
  const text = "<Code>"; // Fix random word generation.
  const x: number = getSuitableXPos();
  const y: number = getSuitableYPos();

  const word: Word = {
    text,
    style: {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
    },
  };

  displayedWords.value.push(word);

  setTimeout(
    () => displayedWords.value.splice(displayedWords.value.indexOf(word), 1),
    wordShowDuration,
  );
};

const getSuitableXPos = (): number => {
  const borderOffset = 300;
  const sideBarOffset = 200;
  return Math.random() * (window.innerWidth - borderOffset) + sideBarOffset;
};

const getSuitableYPos = (): number => {
  const borderOffset = 30;
  return Math.random() * (window.innerHeight - borderOffset);
};
</script>
