<template>
  <div class="main-layout">
    <Side />
    <Midb :id="topicId" />
  </div>
</template>

<script setup>
import Side from './side.vue'
import Midb from './midb.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const topicId = computed(() => route.params.id || '1')  // 從網址取得主題 id
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
</style>