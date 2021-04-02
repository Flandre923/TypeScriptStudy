import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import route from "./router/index"
import store from "./store/index.js"

let app = createApp(App);
//挂债路由
app.use(route)
app.use(store)
app.mount('#app')