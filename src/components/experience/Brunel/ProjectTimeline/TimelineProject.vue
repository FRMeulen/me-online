<template>
  <div
    class="timeline-project rounded-md absolute text-center"
    :style="projectStyle"
  ></div>
</template>

<script lang="ts" setup>
import { DateHelper } from "@/helpers";
import { computed, PropType } from "vue";

const timelineStartDate = new Date("2020-10-01");
const currentDate = new Date();
const totalMonths = computed(() =>
  DateHelper.monthsBetween(timelineStartDate, currentDate),
);

const props = defineProps({
  startDate: {
    type: Date as PropType<Date>,
    required: true,
  },
  endDate: {
    type: Date as PropType<Date>,
    required: true,
  },
  above: {
    type: Boolean,
    required: false,
    default: true,
  },
  color: {
    type: String,
    required: false,
    default: "timelineprimary",
  },
});

const projectStyle = computed(() => {
  const duration = DateHelper.monthsBetween(props.startDate, props.endDate);
  const start = DateHelper.monthsBetween(timelineStartDate, props.startDate);

  const skip = (start / totalMonths.value) * 100;
  const width = (duration / totalMonths.value) * 100;
  const top = props.above === true ? "-30%" : "70%";

  return {
    left: `${skip}%`,
    width: `${width}%`,
    top: top,
  };
});

const gradient = computed(() => {
  return props.above == true
    ? `linear-gradient(var(--background-accent), var(--${props.color}) 40%)`
    : `linear-gradient(var(--${props.color}) 40%, var(--background-accent))`;
});
</script>

<style scoped>
.timeline-project {
  height: 20px;
  background-image: v-bind(gradient);
}
</style>
