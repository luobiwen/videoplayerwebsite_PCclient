import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './global.css'
import root from './vuex/root'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(root)
app.mount('#app')