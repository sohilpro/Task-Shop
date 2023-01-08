import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'daisyui/dist/full.css'
import './assets/css/style.min.css'
import './assets/css/style.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount("#app")