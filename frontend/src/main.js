import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './styles.css'

import VueCookies from 'vue3-cookies'

createApp(App)
  .use(VueCookies)
  .use(router)
  .mount('#app')