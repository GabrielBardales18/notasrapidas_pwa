<template>
  <div class="grid gap-3">
    <div v-if="notes.length === 0" class="rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-12 text-center">
      <div class="text-6xl mb-4">📝</div>
      <p class="text-neutral-500 dark:text-neutral-400 font-medium text-lg">Aún no hay notas</p>
      <p class="text-neutral-400 dark:text-neutral-500 text-sm mt-2">Crea tu primera nota arriba</p>
    </div>
    <ul v-else class="grid gap-3">
      <li v-for="note in notes" :key="note.id" class="group flex items-start justify-between gap-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-4 hover:shadow-lg dark:hover:shadow-neutral-900/50 hover:border-sky-300 dark:hover:border-sky-700 transition-all transform hover:-translate-y-0.5">
        <NuxtLink class="no-underline text-inherit flex-1 min-w-0" :to="`/note/${note.id}`">
          <h3 class="m-0 mb-1.5 font-semibold text-lg text-neutral-900 dark:text-neutral-100 line-clamp-1">{{ note.title || 'Sin título' }}</h3>
          <p class="m-0 text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2 leading-relaxed">{{ (note.content || '').trim() || 'Sin contenido...' }}</p>
          <p class="m-0 mt-2 text-xs text-neutral-400 dark:text-neutral-500">{{ new Date(note.updatedAt).toLocaleDateString('es', { year: 'numeric', month: 'short', day: 'numeric' }) }}</p>
        </NuxtLink>
        <button class="flex-shrink-0 px-3 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-300 font-medium transition-all opacity-0 group-hover:opacity-100" @click.stop="$emit('delete', note.id)" title="Eliminar">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  notes: { type: Array, default: () => [] }
})
defineEmits(['delete'])
 </script>

<style scoped>
</style>




