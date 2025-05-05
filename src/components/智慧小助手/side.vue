<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="icon-row">
      <button class="toggle-btn" @click="collapsed = !collapsed">
        <font-awesome-icon :icon="['fas', 'house']" />
      </button>
    </div>

    <div v-if="!collapsed" class="section">
      <div class="chat-header">
        <h3>聊天紀錄</h3>
        <button class="add-btn" @click="addTopic">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>

      <ul>
        <li v-for="topic in topicsRef" :key="topic.id">
          <router-link :to="`/chat/${topic.id}`">{{ topic.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { topics as initialTopics } from './topics.js'

const collapsed = ref(false)
const topicsRef = ref([...initialTopics])
let nextId = topicsRef.value.length > 0 ? Math.max(...topicsRef.value.map(t => t.id)) + 1 : 1

function addTopic() {
  const newTopic = { id: nextId++, title: `話題 ${nextId - 1}` }
  topicsRef.value.push(newTopic)
}
</script>

<style scoped>
.icon-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 30px;
  bottom: 0;
  width: 200px;
  background-color: #f0f0f0;
  padding: 1rem;
}

.sidebar.collapsed {
  width: 50px;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
}

.add-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #007bff;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section h3 {
  font-size: 14px;
  margin: 10px 0 5px;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  padding: 5px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

li:hover {
  text-decoration: underline;
}
</style>
