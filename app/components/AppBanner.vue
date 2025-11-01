<template>
  <div v-if="!isOnline" class="border-b border-amber-300/50 dark:border-amber-800/50 bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-900/10 text-amber-900 dark:text-amber-200 px-4 py-2.5 text-center shadow-sm">
    <div class="flex items-center justify-center gap-2 text-sm font-medium">
      <span>📡</span>
      <span>Estás sin conexión</span>
    </div>
  </div>
</template>

<script setup>
import { useConnectivity } from '../composables/useConnectivity'
const { isOnline } = useConnectivity()
</script>

<style scoped>
</style>




