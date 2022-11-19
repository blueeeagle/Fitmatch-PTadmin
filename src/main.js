import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VCalendar from 'v-calendar';
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

createApp(App).use(i18n).use(VCalendar).use(router).mount('#app')
