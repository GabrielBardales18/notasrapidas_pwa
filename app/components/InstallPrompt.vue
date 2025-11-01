<template>
  <div v-if="canInstall" class="flex items-center gap-3 rounded-xl border border-sky-200/60 dark:border-sky-800/60 bg-gradient-to-r from-sky-50 to-sky-100/50 dark:from-sky-900/30 dark:to-sky-900/20 px-4 py-3 shadow-sm">
    <span class="text-lg">📱</span>
    <span class="text-sm font-semibold text-sky-900 dark:text-sky-100 flex-1">¿Instalar la app?</span>
    <button @click="install" class="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 px-4 py-2 text-white text-sm font-semibold hover:from-sky-700 hover:to-sky-600 transition-all shadow-sm hover:shadow-md">Instalar</button>
    <button class="inline-flex items-center justify-center rounded-lg border border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 px-3 py-2 text-sm font-medium hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-all" @click="dismiss">✕</button>
  </div>
</template>

<script setup>
const canInstall = ref(false)
let deferredPrompt = null

if (process.client) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    canInstall.value = true
  })
}

const install = async () => {
  if (!deferredPrompt) return
  deferredPrompt.prompt()
  await deferredPrompt.userChoice
  canInstall.value = false
  deferredPrompt = null
}

const dismiss = () => {
  canInstall.value = false
}
 </script>

<style scoped>
</style>




