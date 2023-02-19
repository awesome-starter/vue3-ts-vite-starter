<template>
  <div class="content">
    <img alt="Vue logo" :src="logo" />
    <p>This is a children router.</p>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.png'
</script>

<style lang="less" scoped>
.content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--c-text);
  margin-top: calc(var(--w-space) * 3);
  a {
    color: #42b983;
  }
}
</style>
