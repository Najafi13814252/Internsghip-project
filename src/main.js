// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Hero from './components/Hero.vue'

import './assets/index.css'

const app = createApp(App)

app.component('hero', Hero)

app.mount('#app')
