<template>
  <div>
    <div
      class="py-2 details-box bg-bgsecondary rounded-xl border-2 border-primary"
    >
      <span class="text-5xl text-secondary pl-4">{{ moment.title }}</span>
      <div class="w-full h-2 flex mt-4 bg-gray-400"></div>
      <div class="text-box w-full h-full m-2 text-center">
        <p class="my-2 text-xl" v-for="(line, index) in textLines" :key="index">
          {{ line + "." }}
        </p>
      </div>
    </div>
    <div
      class="location-box bg-bgsecondary rounded-xl border-2 border-primary mt-4"
    >
      <span class="text-box w-full h-full m-2">
        {{ moment.location }} -- {{ moment.subtitle }}
      </span>
      <component :is="component"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Moment } from "@/models";
import { useSubcomponentsStore } from "@/store";
import { PropType, computed, shallowRef } from "vue";

const props = defineProps({
  moment: { type: Object as PropType<Moment>, required: true },
});

const store = useSubcomponentsStore();
const moment = props.moment === undefined ? new Moment() : props.moment;
const component = shallowRef(store.componentFor(moment.code));

const textLines = computed(() => {
  const array = moment.description.split(".");
  array?.pop();
  return array;
});
</script>
