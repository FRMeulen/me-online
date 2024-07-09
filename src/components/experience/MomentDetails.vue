<template>
  <div
    class="flex flex-col justify-center w-full h-full box-border border-2 border-primary rounded-xl bg-bgsecondary"
  >
    <div
      class="flex flex-row flex-grow justify-between max-h-16 m-1 text-secondary pl-4"
    >
      <span class="text-5xl">{{ moment.title }}</span>
      <div class="flex flex-col items-center mr-4">
        <span class="text-xl border-b-2 border-secondary pb-1">{{
          moment.start
        }}</span>
        <span class="text-xl">{{ moment.end }}</span>
      </div>
    </div>
    <div class="w-full h-2 flex bg-bgaccent"></div>
    <div class="w-full flex flex-row location-box justify-between px-4 pb-1">
      <span class="text-xl italic">{{ moment.subtitle }}</span>
      <span class="text-xl italic">{{ moment.location }}</span>
    </div>
    <div class="w-full h-2 flex bg-bgaccent"></div>
    <div class="subcomponent-container flex flex-row flex-grow m-1">
      <component :is="component"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Moment } from "@/models";
import { useSubcomponentsStore } from "@/store";
import { PropType, shallowRef } from "vue";

const props = defineProps({
  moment: { type: Object as PropType<Moment>, required: true },
});

const store = useSubcomponentsStore();
const moment = props.moment === undefined ? new Moment() : props.moment;
const component = shallowRef(store.componentFor(moment.code));
</script>
