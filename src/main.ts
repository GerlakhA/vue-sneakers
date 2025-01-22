import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Aura from '@primevue/themes/aura'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
})
app.use(router)
app.use(autoAnimatePlugin)
app.use(VueQueryPlugin)

app.mount('#app')
