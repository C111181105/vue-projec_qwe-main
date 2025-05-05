<template>
  <div class="layout">
    <Side />
    <Midb :id="topicId" />
  </div>
</template>

<script setup>
import Side from '@/components/智慧小助手/side.vue'
import Midb from '@/components/智慧小助手/midb.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const topicId = computed(() => route.params.id)
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
</style>
