import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';

// 引入 Element Plus 样式和组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
// 使用 Vue Router
app.use(router);

app.mount('#app')
