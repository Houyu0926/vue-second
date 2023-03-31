import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(Avue,{axios})

app.mount('#app')
