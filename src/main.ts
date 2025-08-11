import '@/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'

// Import Element Plus and its styles
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import VueApexCharts from 'vue3-apexcharts'
import '@fortawesome/fontawesome-free/css/all.css'

let vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi, fa }
  }
})

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueApexCharts)
app.use(ElementPlus);

const urlParams = new URLSearchParams(window.location.search)
const redirectPath = urlParams.get('redirect')

if (redirectPath) {
  router.push(redirectPath).catch(() => {})
}

app.mount('#app')





