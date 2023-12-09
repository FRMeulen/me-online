<template>
  <div
    v-for="(word, index) in words"
    :key="index"
    :style="word.style"
    class="debug-red"
  >
    {{ word.text }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";

interface Word {
  text: string;
  style: Record<string, string>;
}

onMounted(() => {
  setInterval(addWord, 500); // Adjust timing here.
});

const words: Ref<Word[]> = ref([]);

const addWord = (): void => {
  const text = "<Code>"; // Fix random word generation.
  const x: number = Math.random() * (window.innerWidth - 300) + 30;
  const y: number = Math.random() * (window.innerHeight - 300);

  const word: Word = {
    text,
    style: {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      transition: "opacity 1s",
      opacity: "1",
    },
  };

  words.value.push(word);

  setTimeout(() => {
    word.style.opacity = "0";
    setTimeout(() => words.value.splice(words.value.indexOf(word), 1), 1000);
  }, 5000);
};
</script>
