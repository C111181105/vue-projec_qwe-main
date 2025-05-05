<template>
    <qq2word />
    <div class="page-container">
      <!-- ✅ 網站背景上的介紹文字 -->
      
      
        
        <!-- ✅ 嵌入qq2word.vue 的內容 -->
        
      
  
      <!-- ✅ 品牌清單區塊 -->
      <div class="container">
        <div v-for="brand in brands" :key="brand.name" class="brand">
          <h2 v-html="brand.name"></h2>
          <p>{{ brand.description }}</p>
        </div>
      </div>
    </div>
    <qq2word2 />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import qq2word from './qq2word.vue'
  import qq2word2 from './qq2word2.vue'
  
  const brands = ref([
    {
      name: 'DAIWA 大和釣具',
      description: 'DAIWA成立於1958年，是一家擁有悠久歷史的日本釣具品牌，在全世界都有很高的知名度。DAIWA生產各種釣具，包括釣竿、釣輪、釣餌和其他配件，專業性能和耐用度都深受釣友喜愛，其中DAIWA以製作捲線器特別出名，推出多種系列可以適合不同的釣魚方式和魚種，其他的釣竿、釣具也都具有良好的品質！'
    },
    {
      name: 'SHIMANO (シマノ) 濱瑪諾釣具',
      description: '作為全球頂尖的釣具品牌之一，SHIMANO 以日本精密工藝聞名，結合創新的科技與嚴苛的品質要求，打造出兼具「輕量」、「強韌」與「操作感」的專業釣具。無論是細膩操控路亞竿，還是挑戰大型掠食魚種的強力捲線器，每一件 SHIMANO 裝備都經過嚴格測試，只為帶給釣者最可靠的手感與上鉤瞬間的快感。追求極限，不只是口號。選擇 SHIMANO，讓每一次出竿都成為與大自然對話的精彩時刻。'
    },
    {
      name: 'MEGABASS',
      description: 'MEGABASS（メガバス）｜釣魚界的藝術與性能革命出自日本傳奇設計師伊豫部健之手，MEGABASS 將釣具從單純的工具，昇華為引領潮流的藝術品。每一款路亞、每一支釣竿，皆蘊含著極致細膩的工藝精神，結合無懈可擊的水中表現力，讓大魚無法抗拒。專為追求「勝利與美感並存」的釣者打造，MEGABASS 是信仰，是態度，更是每一次出竿時，讓你自信滿載的秘密武器。'
    },
    {
      name: 'EVERGREEN',
      description: 'EVERGREEN（エバーグリーン）｜專為勝利而生的極致釣具從日本頂尖釣魚賽事淬鍊而來，EVERGREEN 將「釣獲力」與「操作精度」提升至極限。每一支竿、每一款路亞，皆由實戰經驗反覆鍛鍊，專為真正追求大物、挑戰極限的釣手而打造。如果你不只是想釣魚，而是想掌握勝利──那麼，EVERGREEN，就是你的選擇。'
    },
    {
      name: 'OWNER (オーナーばり) 歐娜釣具',
      description: 'OWNER（歐娜釣具）｜釣魚世界的鋒利之名自創立以來，OWNER 始終專注於追求釣鉤的極致鋒利與卓越耐力。每一枚鉤子都經過精密設計與嚴格測試，確保在關鍵時刻穩穩刺穿、牢牢鎖定獵物。不論是淡水湖泊還是海釣大物，OWNER 以超高命中率與超強耐用度，贏得全球職業釣手的信賴。'
    },
    {
      name: 'Major Craft (メジャークラフト) 美津濤釣具',
      description: 'Major Craft（美津濤釣具）｜專為實戰釣者打造的高性價比之選來自日本的人氣釣具品牌，Major Craft 以出色的製作工藝與超越價格的實戰性能，贏得無數釣魚愛好者的信賴。不論是細膩操控的路亞竿，還是重裝搏大物的船釣裝備，每一件產品都經過實地測試，只為讓你用最合理的預算，享受高階釣具帶來的極致手感與爆發力。'
    }
  ])
  </script>
  
  <style scoped>
  .page-container {
    font-family: "Microsoft JhengHei", sans-serif;
    background-color: #f2f6fc;
    padding: 30px 15px;
  }
  
  .intro-section {
    max-width: 900px;
    margin: auto;
    background-color: #e3f2fd;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 0 8px rgba(0,0,0,0.05);
  }
  
  .intro-title {
    font-size: 28px;
    color: #0077cc;
    margin-bottom: 10px;
  }
  
  .intro-text {
    font-size: 16px;
    color: #333;
  }
  
  .container {
    max-width: 900px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    line-height: 1.8;
  }
  
  .brand {
    margin-bottom: 30px;
  }
  
  h2 {
    color: #0056b3;
    border-bottom: 2px solid #ccc;
    padding-bottom: 5px;
  }
  </style>
  