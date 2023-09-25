import { createApp } from 'vue'
import './scss/_fonts.scss'
import './scss/_global.scss'
import './scss/_reset.scss'
import App from './App.vue'
import store from "./store/index.js";

createApp(App).use(store).mount('#app')
