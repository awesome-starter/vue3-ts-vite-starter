<template>
  <router-view :key="key" />
</template>

<script setup lang="ts">
import { isMobile, watchResize } from '@bassist/utils'

const route = useRoute()
const key = computed(() => `${String(route.name || route.path)}-${new Date()}`)

watchResize(() => {
  document.body.className = `platform-${isMobile() ? 'mobile' : 'desktop'}`
})
</script>
