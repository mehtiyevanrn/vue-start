import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

import './assets/main.css'

const emitter=mitt()
const app=createApp(App)

app.config.globalProperties.emitter=emitter
app.mount('#app')
