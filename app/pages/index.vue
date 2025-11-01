<template>
  <div class="space-y-8">
    <div v-if="!isOnline" class="rounded-xl border border-amber-300/50 dark:border-amber-800/50 bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-900/10 text-amber-900 dark:text-amber-200 px-4 py-3 shadow-sm">
      <div class="flex items-center gap-2">
        <span class="text-lg">📡</span>
        <span class="text-sm font-medium">Estás sin conexión. Tus notas siguen disponibles.</span>
      </div>
    </div>

    <section class="rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm shadow-lg dark:shadow-neutral-900/30 p-6 transition-all hover:shadow-xl dark:hover:shadow-neutral-900/50">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl">✨</span>
        <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">Nueva Nota</h2>
      </div>
      <NoteForm :title="title" :content="content" @save="handleCreate" />
    </section>

    <section>
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl">📚</span>
        <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">Mis Notas</h2>
        <span v-if="notes.length > 0" class="ml-auto px-2 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold">{{ notes.length }}</span>
      </div>
      <NoteList :notes="notes" @delete="deleteNote" />
    </section>
  </div>
</template>

<script setup>
const { notes, createNote, deleteNote } = useNotes()
const { isOnline } = useConnectivity()

const title = ref('')
const content = ref('')

const handleCreate = (data) => {
  const id = createNote(data)
  title.value = ''
  content.value = ''
}
</script>

<style scoped>
</style>




