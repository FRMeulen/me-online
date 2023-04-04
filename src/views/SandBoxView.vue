<template>
  <div class="sandbox bg-slate-500 text-center">
    <h1>Sandbox page</h1>
    <CardGrid :rows="3" :columns="4" />
  </div>
</template>

<script setup lang="ts">
import CardGrid from "@/components/sandbox/CardGrid.vue";
</script>
