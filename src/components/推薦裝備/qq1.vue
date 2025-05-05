<template>
    <div class="table-container">
      <h2>立槳裝備表格</h2>
      <table>
        <thead>
          <tr>
            <th>裝備品牌</th>
            <th>裝備名稱</th>
            <th>價格</th>
            <th>使用心得</th>
            <th>連結</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in equipmentList" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div class="review-cell">
                {{ item.review }}
              </div>
            </td>
            <td>
              <a v-if="item.link" :href="item.link" target="_blank" class="link">查看</a>
              <span v-else>—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BigEquipmentTable',
    data() {
      return {
        equipmentList: [
          {
            name: 'Aqua Marina',
            type: '充氣立式划槳-雙人型 Super Trip ｜ BT-20ST01',
            price: 'NT$22,300',
            review: 'Super Trip BT-20ST01 雙人充氣立槳，整體感受非常棒！這款立槳板空間充足，兩人一起站立依然非常穩定，對初學者來說非常友善。寬大的設計提升了平衡性，即使在海邊或湖面上划行，也能保持順暢。它的充氣設計攜帶方便，重量輕盈，收納簡單，適合自駕出遊或家庭活動。唯一需要注意的是雙人使用時要配合彼此的重心，否則剛開始會有點晃，不過習慣後就能一起享受划行的樂趣。CP 值很高，推薦！',
            link: 'https://www.metroasis.com.tw/SalePage/Index/7110284?lang=zh-TW&srsltid=AfmBOoouWahUn1ceg33-qw7Vq-wuMvXbx5xVyeXvfaG7XMT2Kgksuwb3'
          },
          {
            name: 'AZTRON',
            type: '競速雙氣室立式划槳 METEOR ｜ AS-601D',
            price: 'NT$21,600',
            review: 'METEOR AS-601D 是一款結合速度與穩定性的立槳板。雙氣室設計讓板子更穩、更硬，划起來推進力十足。板身流線、加速快，特別適合有經驗的玩家挑戰長距離或競速玩法。剛開始需要一點平衡感，但熟悉後會很享受它的靈活與速度感。非常推薦給喜歡性能與運動感的玩家使用！',
            link: 'https://aztronsports.com/products/meteor?_pos=3&_sid=0fbd5ebce&_ss=r'
          },
          {
            name: 'Aquatone',
            type: '單氣室立式划槳 WAVE PLUS ｜ TS-202',
            price: 'NT$13,500',
            review: 'WAVE PLUS TS-202 是一款輕巧實用的單氣室立式划槳板，適合初學者或休閒玩家使用。板身寬大，穩定性不錯，對剛接觸立槳的人來說非常友善。充氣快速、收納方便，整體重量輕，外出攜帶也很方便。無論是在平靜湖面或近海划行，都能輕鬆上手。雖然少了雙氣室的強度，但對一般休閒體驗已經非常足夠。總體來說，是一款 CP 值高、操作簡單的入門立槳板，推薦給想輕鬆體驗水上樂趣的人。',
            link: 'https://www.metroasis.com.tw/SalePage/Index/8914277'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .table-container {
    max-width: 1200px;
    margin: 2rem auto;
    font-size: 1.1rem;
    background-color: #fafafa;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
    vertical-align: middle;
  }
  
  th {
    background-color: #f0f4f8;
    font-size: 1.2rem;
    color: #333;
  }
  
  td {
    background-color: #fff;
  }
  
  .review-cell {
    max-height: 140px;
    overflow-y: auto;
    text-align: left;
    padding: 0.5rem;
    line-height: 1.5;
    font-size: 1rem;
    background-color: #fefefe;
    border: 1px dashed #ccc;
    border-radius: 6px;
  }
  
  .link {
    color: #007acc;
    text-decoration: none;
    font-weight: bold;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  