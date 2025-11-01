<template>
  <div class="min-h-dvh bg-gradient-to-br from-neutral-50 via-white to-sky-50/30 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
    <NuxtRouteAnnouncer />
    <header class="border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm dark:shadow-neutral-900/20">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">📝 Notas Rápidas</h1>
        <InstallPrompt />
      </div>
    </header>
    <AppBanner />
    <main class="container mx-auto px-4 py-8 max-w-4xl">
      <NuxtPage />
    </main>
  </div>
</template>

