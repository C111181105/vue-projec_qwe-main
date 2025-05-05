<script setup>
import { ref } from "vue"; // 使用 Vue 3 的 ref 來建立響應式資料
import { RouterView } from "vue-router"; // 用來處理 router-link

// 產品資料（使用 ref 包裝成響應式陣列）
const products = ref([
  {
    id: 1,
    text: "海上活動智慧客服",
    image: "/mida-1.png",
    link: "/midb" // Vue Router 內部路由
  },
  {
    id: 2,
    text: "推薦裝備",
    image: "/mida-2.png",
    link: "https://www.ronin.com.tw/v2/official/SalePageCategory/491821?lang=zh-TW" // 外部連結
  },
  {
    id: 3,
    text: "氣象預測 海浪預測",
    image: "/mida-3.png",
    link: "https://www.cwa.gov.tw/V8/C/W/County/County.html?CID=64" // 外部連結
  },
  {
    id: 4,
    text: "開發社群",
    image: "/mida-4.png",
    link: "https://www.ronin.com.tw/v2/official/SalePageCategory/491821?lang=zh-TW"
  },
  {
    id: 5,
    text: "語音功能",
    image: "/mida-5.png",
    link: "/midb"
  },
  {
    id: 6,
    text: "警示系統",
    image: "/mida-6.png",
    link: "/midb"
  },
  {
    id: 7,
    text: "行程規劃 推薦飯店",
    image: "/mida-7.png",
    link: "/midb"
  }
]);
</script>

<template>
  <!-- 所有產品卡片的外部容器 -->
  <div class="products-container">
    <!-- 使用 v-for 渲染每一個產品 -->
    <div
      v-for="(product, index) in products"
      :key="product.id"
      class="product-section"
    >
      <!-- 圖片容器：內含圖片與浮水印文字 -->
      <div class="product-image-container">
        <!-- 商品圖片 -->
        <img
          :src="product.image"
          :alt="product.name"
          class="product-image"
        />
        <!-- 圖片上的文字浮水印 -->
        <span class="background-text">{{ product.text }}</span>
      </div>

      <!-- 商品資訊區塊，包含按鈕 -->
      <div class="product-info">
        <!-- 如果是內部連結（/開頭），用 RouterLink -->
        <RouterLink
          v-if="product.link.startsWith('/')"
          :to="product.link"
          class="buy-button"
        >
          了解更多
        </RouterLink>

        <!-- 否則是外部連結，用 a -->
        <a
          v-else
          :href="product.link"
          target="_blank"
          class="buy-button"
        >
          了解更多
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 外部容器為 grid 排列，每排最多三個產品卡片 */
.products-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
}

/* 單一產品的區塊樣式 */
.product-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 300px;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  position: relative;
}

/* 圖片容器：置中對齊圖片 */
.product-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 浮在圖片上的文字樣式（中心） */
.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  pointer-events: none; /* 不會擋住點擊事件 */
}

/* 商品圖片樣式：充滿容器且維持比例 */
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* 商品資訊區塊（按鈕）固定在底部 */
.product-info {
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 了解更多按鈕樣式 */
.buy-button {
  display: inline-block;
  padding: 10px 20px;
  background: #0071e3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

/* 滑鼠懸停按鈕變色 */
.buy-button:hover {
  background: #005bb5;
}

/* 響應式設計：手機螢幕時變為單欄排版 */
@media (max-width: 768px) {
  .products-container {
    grid-template-columns: 1fr;
  }

  .product-section {
    width: 100%;
  }
}
</style>
