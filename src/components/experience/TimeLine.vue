<template>
  <div class="flex flex-col h-fit w-full">
    <div class="h-fit w-full timeline border-textprimary">
      <TimeLineEntry
        v-for="moment in Moments"
        :key="moment.code"
        :code="moment.code"
        :time="moment.time"
        :title="moment.title"
        :subtitle="moment.subtitle"
        @on-select="selectMoment"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Moments } from "@/constants";
import { ref } from "vue";
import TimeLineEntry from "./TimeLineEntry.vue";

const selectedMoment = ref("");

const emit = defineEmits<{
  (e: "onSelect", code: string): string;
}>();

const selectMoment = (code: string) => {
  selectedMoment.value = code;
  emit("onSelect", code);
};
</script>

<style scoped>
.timeline {
  border-width: 0px;
  border-left-width: 1px;
}
</style>
