import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

// Fuentes servidas desde nuestro servidor (sin llamadas a Google: sin cookies ni rastreo)
// Solo el subconjunto latino (incluye ñ, tildes y ü): menos peso
import '@fontsource/lato/latin-400.css'
import '@fontsource/lato/latin-700.css'
import '@fontsource/nunito/latin-600.css'
import '@fontsource/nunito/latin-700.css'
import '@fontsource/nunito/latin-800.css'
import '@fontsource/nunito/latin-400-italic.css'
import './assets/styles/main.css'

import { vReveal } from './composables/useReveal'

const app = createApp(App)
app.use(router)
app.use(createHead())
app.directive('reveal', vReveal)
app.mount('#app')
