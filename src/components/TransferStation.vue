<template>
  <router-view :key="key" />
</template>

<script setup lang="ts">
const route = useRoute()
const key = computed(() =>
  route.name
    ? String(route.name) + new Date()
    : String(route.path) + new Date(),
)
</script>

<style></style>
