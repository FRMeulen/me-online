<template>
  <div
    class="flex flex-col w-full h-full justify-between items-center border-secondary border-2 rounded-3xl p-2 bg-bgaccent hover:bg-highlight"
    @mouseenter="selectMoment"
    :class="model.code + '-entry'"
  >
    <div class="entry-time-start text-secondary">{{ model.start }}</div>
    <div class="entry-title text-textprimary text-xl font-semibold">
      {{ model.title }}
    </div>
    <div class="entry-time-end text-secondary">{{ model.end }}</div>
  </div>
</template>

<script lang="ts" setup>
import { Moment } from "@/models";
import { PropType, ref } from "vue";

const model = defineModel({
  type: Object as PropType<Moment>,
  required: true,
  default: new Moment(),
});

const props = defineProps({
  number: Number,
});
const number = ref(props.number);

const emit = defineEmits<{
  (e: "onSelect", number: number): number;
}>();

const selectMoment = () => {
  emit("onSelect", number.value as number);
};
</script>

<style scoped>
.triangle {
  width: 0;
  height: 0;
  position: relative;
  border: solid 10px;
  border-color: var(--primary) transparent transparent transparent;
}
</style>
