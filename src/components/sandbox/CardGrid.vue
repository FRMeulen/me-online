<template>
  <div class="card-grid">
    <div v-for="r in rows" :key="r" class="flex row" :class="heightClass">
      <div
        v-for="c in columns"
        :key="c"
        class="flex column border-2 m-2"
        :class="widthClass"
      >
        Block {{ r }} , {{ c }}
      </div>
    </div>
  </div>
  <h1>Rows: {{ rows }}</h1>
  <h1>Columns: {{ columns }}</h1>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  rows: Number,
  columns: Number,
});

const rows = ref(props.rows);
const columns = ref(props.columns);

const widthClass = computed(() => {
  return `w-1/${columns.value}`;
});

const heightClass = computed(() => {
  return `h-1/${rows.value}`;
});
</script>
