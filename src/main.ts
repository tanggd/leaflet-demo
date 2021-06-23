import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
