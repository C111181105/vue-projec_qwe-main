<template>
  <div class="container">
    <!-- 頁面標題 -->
    <h1>🌤️ 全台 36 小時天氣預報</h1>

    <div class="grid-wrapper">
      <!-- 預報卡片，顯示每一個縣市的天氣資訊 -->
      <div
        v-for="(city, index) in forecasts"
        :key="index"
        class="forecast-card"
      >
        <h2>{{ city.location }}</h2>
        <!-- 每個城市有三個時段的預報 -->
        <div
          v-for="(item, i) in city.forecast"
          :key="i"
          class="forecast-block"
        >
          <p>🕓 時間：{{ item.start }} ~ {{ item.end }}</p>
          <p>🌤️ 天氣：{{ item.weather }}</p>
          <p>🌧️ 降雨機率：{{ item.rain }}</p>
          <p>🌡️ 溫度：{{ item.minT }} ~ {{ item.maxT }}</p>
          <p>😊 舒適度：{{ item.feeling }}</p>
        </div>
      </div>

      <!-- 右側空格（隱藏，用來排版補齊一排三個） -->
      <div class="spacer-card" v-for="n in 1" :key="'right-' + n"></div>
    </div>

    <!-- 資料尚未載入時的提示 -->
    <div v-if="!forecasts.length">
      <p>資料載入中或發生錯誤</p>
    </div>
  </div>
</template>

<script setup>
// 匯入 Vue 的響應式函數與生命周期
import { ref, onMounted } from 'vue';

// 建立 forecasts 狀態（用來儲存所有縣市的預報資料）
const forecasts = ref([]);

// 畫面載入時從後端 API 取得預報資料
onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/forecast');
    const data = await res.json();
    forecasts.value = data.forecasts;
  } catch (err) {
    console.error('❌ 錯誤：', err);
  }
});
</script>

<style scoped>
/* 容器排版設定（置中 + 邊距） */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 32px;
}

/* 標題樣式 */
h1 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 28px;
  color: #2a2a2a;
}

/* 卡片區塊排版：使用 grid 一排最多三張卡片 */
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);;
  gap: 24px;
  justify-content: start; /* 從左側開始對齊 */
}

/* 每張預報卡片樣式 */
.forecast-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fdfdfd;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}



/* 城市標題 */
.forecast-card h2 {
  font-size: 18px;
  margin-bottom: 12px;
  text-align: center;
  color: #333;
}

/* 單個時段的天氣資訊塊 */
.forecast-block {
  background: #f2f6fa;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
}

/* 每段文字樣式 */
.forecast-block p {
  margin: 4px 0;
  font-size: 14px;
}
</style>
