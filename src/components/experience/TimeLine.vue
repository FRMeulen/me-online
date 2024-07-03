<template>
  <div class="flex flex-col h-full w-fit">
    <div class="h-full w-fit timeline">
      <div class="dummy-entry flex flex-row">
        <div class="flex flex-col justify-center">
          <div class="dummy-entry-dot bg-white w-3 h-3 rounded-3xl"></div>
          <div class="triangle ml-3"></div>
        </div>
        <div
          class="dummy-entry-box ml-8 p-2 border-primary border-2 rounded-xl"
        >
          <div class="dummy-entry-time text-secondary italic text-sm mt-2">
            {{ time }}
          </div>
          <div class="dummy-entry-title text-white text-2xl font-smibold">
            {{ title }}
          </div>
          <div class="dummy-entry-subtitle text-primary mb-2">
            {{ subtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const time = "October 2020 -- Now";
const title = "IT-Specialist";
const subtitle = "Brunel Nederland";

onMounted(() => {
  console.log("Mounted!");
});
</script>

<style scoped>
.timeline {
  border-color: white;
  border-width: 0px;
  border-left-width: 1px;
}

.dummy-entry-dot {
  margin-left: -6px;
  position: fixed;
}

.triangle {
  width: 0;
  height: 0;
  position: fixed;
  border: solid 10px;
  border-color: transparent #57b3ad transparent transparent;
}
</style>
