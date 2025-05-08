<template>
  <!-- 📄 外層容器，包住所有區塊，讓滾動平滑 -->
  <div class="scroll-page">
    <!-- 🖼️ 區塊一：第一張背景圖 -->
    <section class="scroll-section section1">
      <a href="https://www.daiwaseiko.com.tw/" target="_blank" class="text-link">
      <h1><strong>推薦品牌</strong></h1>
      <div class="text">
        <strong>DAIWA 大和釣具</strong>
      </div>
     </a>
    </section>

    <!-- 🖼️ 區塊二：第二張背景圖 -->
    <section class="scroll-section section2">
      <a href="https://www.etuohshop.com/zh-TW/Etuoh/productlist?item1=03&item2=0303&item3=030302&srsltid=AfmBOor2okd6ZxDMv0PlQ3j8DTxw-Lg_XPYqyD0Cw4KjF8mN3et0Ai0q" target="_blank" class="text-link">
      <div class="text">
        SHIMANO (シマノ) 濱瑪諾釣具
      </div>
    </a>
    </section>

    <!-- 🖼️ 區塊三：第三張背景圖 -->
    <section class="scroll-section section3">
      <a href="https://www.gloomis.com/?srsltid=AfmBOopRQSLUg-QCydY_-lg9Adpd6HS_sy3vQ2mGZPJ_5h7v_Qza4Ylv" target="_blank" class="text-link">
      <div class="text">G. Loomis</div>
    </a> 
    </section>

  </div>
 
</template>

<style scoped>
/* 🧭 頁面滾動效果設定（讓 anchor 或滑鼠滾動更平順） */
.scroll-page {
  scroll-behavior: smooth;
}

/* 🧱 每一個背景區塊的基本樣式 */
.scroll-section {
  min-height: 100vh;                   /* 每段區塊至少滿版高 */
  background-size: cover;              /* 背景圖鋪滿並等比例縮放 */
  background-position: center;         /* 背景圖置中 */
  background-repeat: no-repeat;        /* 不重複顯示背景圖 */
  display: flex;                       /* 使用 Flex 對齊內容 */
  justify-content: center;            /* 水平置中 */
  align-items: center;                /* 垂直置中 */
  font-size: 2rem;                     /* 文字大小 */
  width: 100vw;
  color: black(0, 6, 128);                        /* 白色文字 */
}

/* 🖼️ 各區塊的背景圖設定 */
.section1 {
  background-image: url('/裝備/釣魚專案/diawa.jpg');
  position: relative; /* ✅ 讓內部的絕對定位文字可依它定位 */
}

.section2 {
  background-image: url('/裝備/釣魚專案/shi.jpg'); /* 第2張背景圖 */
}

.section3 {
  background-image: url('/裝備/釣魚專案/glo.png'); /* 第3張背景圖 */
  background-size: contain; /* ✅ 縮小圖片以完整顯示 */
  background-repeat: no-repeat;
  background-position: center;
}
/*標題*/
.section1 h1 {
  position: absolute;
  bottom: 85%;
  left: 47%;
  font-family: 'Microsoft JhengHei', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: rgb(14, 14, 14);
}
/* 🧾 文字包裝區塊樣式 */
.section1 .text {
  position: absolute;     /* ✅ 改為絕對定位 */
  bottom: 20%;           /* ✅ 距離底部 20px */
  left: 100px;             /* ✅ 距離左側 20px */
  background-color: rgba(28, 235, 224, 0.4);
  padding: 1.5rem;
  border-radius: 12px;
}
.section2 .text {
  position: absolute;
  bottom: -190%; /* ✅ 更貼近底部 */
  left: 90px;
  font-family: 'Microsoft JhengHei', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  border-radius: 12px;
}

.section3 .text {
  position: absolute;
  bottom: -280%; /* ✅ 更貼近底部 */
  left: 90px;
  font-family: 'Microsoft JhengHei', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  border-radius: 12px;
}
</style>
