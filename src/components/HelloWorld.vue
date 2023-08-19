<template>
  <h1>{{ msg }}</h1>

  <ul>
    <li>
      Tutorial ☞
      <a href="https://vue3.chengpeiquan.com/" target="_blank">
        Learning Vue3
      </a>
    </li>
    <li>
      Official Website ☞
      <a href="https://vuejs.org/" target="_blank">Vue3</a>
      |
      <a href="https://vitejs.dev/" target="_blank">Vite</a>
    </li>
  </ul>

  <hr />

  <p>
    This is a message from
    <a href="https://vue3.chengpeiquan.com/pinia.html" target="_blank">Pinia</a>
    :
  </p>
  <blockquote>
    <p>{{ message }}</p>
  </blockquote>
  <button type="button" @click="store.updateMessageSync('New Message')">
    <span>Update Message</span>
  </button>

  <hr />

  <ul>
    <li>
      Click
      <router-link to="/foo">
        <span>Here</span>
      </router-link>
      to see a children router.
    </li>
    <li>
      <button type="button" @click="count++">
        <span>count is: {{ count }}</span>
      </button>
    </li>
    <li>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores'

defineProps<{ msg: string }>()

const count = ref<number>(0)
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<style lang="less" scoped>
ul {
  li {
    line-height: 2;
  }
}

blockquote {
  color: var(--c-black);
  background-color: var(--c-gray);
  padding: calc(var(--w-space) / 2);
  border-radius: var(--w-radius-xs);
  p {
    margin: 0;
  }
}

hr {
  width: 60%;
  border-color: var(--c-border);
  margin: var(--w-space) auto;
  opacity: 0.2;
}

a {
  color: #42b983;
}

p {
  margin: 0;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
