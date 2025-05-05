<template>
    <div class="lure-recommend p-6">
      <h1 class="text-2xl font-bold mb-4">推薦假餌一覽</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="lure in lures" :key="lure.name" class="border rounded-xl shadow-md p-4">
          <img :src="lure.image" alt="假餌圖片" class="w-full h-48 object-cover rounded-lg mb-2">
          <h2 class="text-xl font-semibold">{{ lure.name }}</h2>
          <p class="text-sm text-gray-600">適用魚種：{{ lure.targetFish }}</p>
          <p class="text-sm">建議使用方式：{{ lure.usage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const lures = [
    {
      name: '米諾型假餌（Minnow）',
      image: '/裝備/釣魚專案/路亞.png',
      targetFish: '鱸魚、紅鰽、竹梭魚',
      usage: '慢速收線、模擬小魚游動'
    },
    {
      name: '波扒（Popper）',
      image: '/裝備/釣魚專案/衝浪板.png',
      targetFish: '黑鯛、雷魚、石斑',
      usage: '短促拉扯產生水花聲音，吸引攻擊'
    },
    {
      name: '金屬鐵板（Metal Jig）',
      image: '/裝備/釣魚專案/釣竿.png',
      targetFish: '青物、鰤魚、鮪魚',
      usage: '高速收線，模擬獵物逃跑'
    }
  ]
  </script>
  
  <style scoped>
  .lure-recommend {
    background-color: #f8fafc;
  }
  </style>