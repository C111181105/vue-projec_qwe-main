<template>
  
    <div class="lure-guide">
      <div class="content-wrapper slide-in">
      <h1>路亞介紹</h1>
      
  
      <p>「路亞」源自英文 Lure，意為「誘餌」，是一種利用人工擬餌模仿小魚、昆蟲等弱小生物動作，引誘掠食性魚類攻擊的釣法。</p>
      <p>路亞釣又稱擬餌釣法，不使用活餌，而是依靠假餌與拋投、操控技巧吸引魚上鉤。常見魚種包括鱸魚、鱒魚、紅鰽、黑鯛等。</p>
      <p>此釣法重視操作節奏與觀察力，結合運動與策略，深受釣魚愛好者喜愛。</p>
  
      <p><b>選擇適合的路亞竿對釣魚的成功率和體驗至關重要。以下是選購路亞竿時應考慮的要點：</b></p>
  
      <h2>1. 認識路亞竿&nbsp;&nbsp;&nbsp;&nbsp;2. 竿長考量&nbsp;&nbsp;&nbsp;&nbsp;3. 調性與力量</h2>
      
      <h2>4. 常見路亞竿類型&nbsp;&nbsp;&nbsp;&nbsp;5. 維護與保養</h2>
     
      
  
      <!-- ✅ 新增連結標題 -->
      <h2>
        <a href="https://www.youtube.com/watch?v=jTqb1-QpEfM&t=66s" target="_blank" rel="noopener noreferrer">
          路亞教學（點我觀看教學短片）
        </a>
      </h2>
  
      </div>
    </div>
  </template>
  
  <script setup>
  // 無需邏輯
  </script>
  
  <style scoped>
  
  .lure-guide {
  background-image: url('/裝備/釣魚專案/背景.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* 固定背景 */
  padding: 0;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  min-height: 100vh;   /* 高度至少填滿整個畫面 */
  width: 102%;
  text-align: center;
  background-attachment: fixed;
}

.content-wrapper {
  padding-top: 190px; /* ✅ 就這行：讓文字往下 */
}

.lure-guide h1 {
  font-size: 28px;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0,0,0,0.6); /* ✅ 增加可讀性 */
  margin-bottom: 20px;
}

.lure-guide h2 {
  font-size: 20px;
  margin-top: 30px;
  color: #0077cc;
  
}

.lure-guide p {
  margin-bottom: 16px;
  font-size: 20px; /* ✅ 加這行就會變大 */
  line-height: 1.5; /* ✅ 可選：讓行距更舒服 */
  color:#1f1f1f;
}

.lure-guide ul {
  padding-left: 20px;
  margin-bottom: 16px;
  list-style: none;
}

.lure-guide li {
  margin-bottom: 8px;
}

.care-image {
  max-width: 100%;
  border-radius: 8px;
  margin: 16px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.care-image:hover {
  transform: scale(1.02);
}

.slide-in {
  opacity: 0;
  transform: translateX(-100px);
  animation: slideFromLeft 1s ease-out forwards;
}

/* ✅ 定義動畫關鍵影格 */
@keyframes slideFromLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
  