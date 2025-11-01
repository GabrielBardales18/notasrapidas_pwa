// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],
  tailwindcss: {
    cssPath: 'assets/css/tailwind.css'
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Notas Rápidas',
      short_name: 'Notas',
      start_url: '/',
      display: 'standalone',
      theme_color: '#0ea5e9',
      background_color: '#ffffff',
      icons: [
        { src: '/icons/pwa-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icons/pwa-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    }
  }
})
