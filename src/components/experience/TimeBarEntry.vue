<template>
  <fwb-timeline-item>
    <fwb-timeline-point />
    <fwb-timeline-content>
      <fwb-timeline-time class="text-secondary"> {{ time }} </fwb-timeline-time>
      <fwb-timeline-title class="text-white">
        {{ title }}
      </fwb-timeline-title>
      <fwb-timeline-body class="text-primary">
        {{ subtitle }}
      </fwb-timeline-body>
    </fwb-timeline-content>
  </fwb-timeline-item>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  FwbTimelineItem,
  FwbTimelinePoint,
  FwbTimelineContent,
  FwbTimelineTime,
  FwbTimelineTitle,
  FwbTimelineBody,
} from "flowbite-vue";

const props = defineProps({
  time: String,
  title: String,
  subtitle: String,
});

const time = ref(props.time);
const title = ref(props.title);
const subtitle = ref(props.subtitle);
</script>
