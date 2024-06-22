// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_BASE_URL || '/api'
    }
  },
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'آچاره سازه'
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt3-leaflet',
    '@vueuse/nuxt',
    'nuxt-icons',
    '@nuxt/icon',
  ],

})