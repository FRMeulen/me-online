<template>
  <div class="flex flex-row mb-8" :class="code + '-entry'">
    <div class="flex flex-col justify-center">
      <div class="entry-dot bg-textprimary w-3 h-3 rounded-3xl"></div>
      <div class="triangle ml-3"></div>
    </div>
    <div
      class="entry-box ml-8 p-2 border-primary border-2 rounded-xl w-full hover:bg-bgaccent"
      @mouseenter="selectMoment"
    >
      <div class="entry-time text-secondary italic text-sm mt-2">
        {{ time }}
      </div>
      <div class="entry-title text-textprimary text-2xl font-smibold">
        {{ title }}
      </div>
      <div class="entry-subtitle text-primary mb-2">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const props = defineProps({
  code: String,
  time: String,
  title: String,
  subtitle: String,
});

const code = ref(props.code);
const time = ref(props.time);
const title = ref(props.title);
const subtitle = ref(props.subtitle);

const emit = defineEmits<{
  (e: "onSelect", code: string): string;
}>();

const selectMoment = () => {
  emit("onSelect", code.value as string);
};
</script>

<style scoped>
.entry-dot {
  margin-left: -6px;
  position: fixed;
}

.triangle {
  width: 0;
  height: 0;
  position: fixed;
  border: solid 10px;
  border-color: transparent var(--primary) transparent transparent;
}
</style>
