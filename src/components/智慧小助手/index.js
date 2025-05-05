import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '@/views/ChatView.vue'
import mm from '@/components/智慧小助手/mm.vue'

const routes = [
  //{ path: '/', component: mm },
  { path: '/', redirect: '/chat/1' },
  { path: '/chat/:id', name: 'chat', component: ChatView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router