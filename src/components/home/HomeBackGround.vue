<template>
  <TransitionGroup name="words" tag="div">
    <div
      v-for="word in displayedWords"
      :key="word.text"
      :style="word.style"
      class="text-slate-400"
    >
      {{ word.text }}
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { HomeScreenWords } from "@/constants";

interface Props {
  viewWidth: number;
  viewHeight: number;
}

interface Word {
  text: string;
  style: Record<string, string>;
}

const props = defineProps<Props>();

const wordInterval = 2500;
const wordShowDuration = 2000;

onMounted(() => {
  setInterval(addWord, wordInterval);
});

const displayedWords: Ref<Word[]> = ref([]);

const addWord = (): void => {
  const text = `<${
    HomeScreenWords[Math.floor(Math.random() * HomeScreenWords.length)]
  }>`;
  const x: number = getSuitableXPos();
  const avoidCenter = x > 0.25 * props.viewWidth && x < 0.75 * props.viewWidth;
  const y: number = getSuitableYPos(avoidCenter);

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
  const sideBarOffset = 75;
  const x: number = getRandomPos(props.viewWidth, sideBarOffset);
  return x < 125 ? 125 : x;
};

const getSuitableYPos = (avoidCenter: boolean): number => {
  const bottomOffset = -10;
  let overlap = true;
  let yInCenter = false;
  let y = 0;

  while (overlap) {
    y = getRandomPos(props.viewHeight, bottomOffset);
    yInCenter = y > 0.2 * props.viewHeight && y < 0.8 * props.viewHeight;
    overlap = avoidCenter && yInCenter;
  }

  return y < 5 ? 5 : y;
};

const getRandomPos = (axisLength: number, offset: number): number => {
  return Math.random() * axisLength + offset;
};
</script>

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
