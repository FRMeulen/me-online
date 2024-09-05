<template>
  <div class="bg-bgaccent rounded-xl m-5 flex flex-grow">
    <div class="grid grid-rows-7 grid-cols-1 w-full">
      <p class="mx-auto text-3xl row-start-2">As a peercoach I...</p>
      <Transition name="test" mode="out-in">
        <p
          :key="currentTitle"
          class="mx-auto text-5xl row-start-4 text-transparent bg-clip-text bg-primary"
        >
          {{ currentTitle }}
        </p>
      </Transition>
      <Transition name="test" mode="out-in">
        <p :key="currentDescription" class="mx-auto text-3xl row-start-6 h-min">
          {{ currentDescription }}
        </p>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const tasks = ref([
  {
    title: "Guided first-year students",
    description: "because the switch to college can be intimidating.",
  },
  {
    title: "Assisted in projects",
    description: "remembering the pitfalls I encountered in my first year.",
  },
  {
    title: "Tutored students",
    description: "to help the first-years raise their grades.",
  },
  {
    title: "Volunteered at events",
    description: "for the added social interaction.",
  },
]);

const currentIndex = ref(0);
const currentTitle = computed(() => tasks.value[currentIndex.value].title);
const currentDescription = computed(
  () => tasks.value[currentIndex.value].description,
);

let intervalId: number;
const cycleContent = () => {
  currentIndex.value = (currentIndex.value + 1) % tasks.value.length;
};

onMounted(() => {
  intervalId = setInterval(cycleContent, 10000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.test-enter-active,
.test-leave-active {
  transition: opacity 0.5s ease;
}

.test-enter-from,
.test-leave-to {
  opacity: 0;
}
</style>
