import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(Toast)

app.mount('#app')
