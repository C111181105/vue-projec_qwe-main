import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MidbView from '../components/智慧小助手/midb.vue'; // 確保路徑正確
import MidcView from '../components/首頁/midc.vue'; // 確保路徑正確
import wee from '../components/氣象、海浪預測/wee.vue';  // 氣象、海浪預測
import qq from '../components/推薦裝備/qq.vue';  // 推薦裝備
import qq1 from '../components/推薦裝備/qq1.vue';  // 推薦裝備1
import qq2 from '../components/推薦裝備/qq2.vue';  // 推薦裝備2
import qq2word from '../components/推薦裝備/qq2word.vue';  // 推薦裝備2
import mm from '../components/智慧小助手/mm.vue';
import ChatView from '../components/智慧小助手/ChatView.vue'; 
import { RouterLink } from 'vue-router'
const routes = [
  { path: "/", component: Home },
  { path: '/midb', component: MidbView },
  { path: '/midc', component: MidcView },
  { path: '/wee', component: wee },
  { path: '/qq', component: qq },
  { path: '/qq1', component: qq1 },
  { path: '/qq2', component: qq2 },
  { path: '/qq2word', component: qq2word },
  { path: '/mm', component: mm },
  
  { 
    path: "/chat/:id", 
    name: "chat", 
    component: ChatView 
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;