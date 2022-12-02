import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VCalendar from 'v-calendar';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "bootstrap/dist/js/bootstrap.min.js"

// Notification options (default)
const notificationOptions = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
};

createApp(App).use(i18n).use(VCalendar).use(Toast, notificationOptions).use(router).mount('#app')
