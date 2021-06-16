import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
const app = createApp(App);
import store from './store'

app.use(router).use(store).mount('#app')
