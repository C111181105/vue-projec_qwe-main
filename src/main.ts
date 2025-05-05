import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Font Awesome 設定（免費版）
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse,faPlus } from '@fortawesome/free-solid-svg-icons'  // ✅ house 圖示


library.add(faHouse,faPlus)  // ✅ 加到圖示庫裡

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
