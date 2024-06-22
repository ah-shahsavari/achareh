import { defaultConfig } from '@formkit/vue'
import { plugin } from '@formkit/vue'
import { fa } from '@formkit/i18n'

// const config = defaultConfig({
//   locales: { fa },
//   locale: 'fa'
// })

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(plugin, defaultConfig({
    // Define additional locales
    locales: { fa },
    // Define the active locale
    locale: 'fa',
  }))
})
