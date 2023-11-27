import { createApp } from 'vue'
import './style.scss'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import { router } from './router.js'

createApp(App).use(router).mount('#app')
