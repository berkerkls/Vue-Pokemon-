import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Router
import router from "./router/index"

// Pinia
import { createPinia } from "pinia"

const pinia = createPinia()


// Vuetify
import "vuetify/styles"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { createVuetify } from "vuetify"

const vuetify = createVuetify({
    components,
    directives
})

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app')
