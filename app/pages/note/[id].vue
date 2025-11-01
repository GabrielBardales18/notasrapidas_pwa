<template>
  <div class="space-y-6">
    <header class="grid grid-cols-[1fr_auto_1fr] items-center">
      <NuxtLink class="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-all" to="/">
        <span>←</span>
        <span>Volver</span>
      </NuxtLink>
      <div class="flex items-center gap-2">
        <span class="text-2xl">✏️</span>
        <h2 class="text-2xl font-bold text-center m-0 text-neutral-900 dark:text-neutral-100">Editar Nota</h2>
      </div>
      <div />
    </header>

    <div v-if="!note" class="rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-12 text-center">
      <div class="text-6xl mb-4">🔍</div>
      <p class="text-neutral-500 dark:text-neutral-400 font-medium text-lg">No se encontró la nota</p>
    </div>
    <section v-else class="rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm shadow-lg dark:shadow-neutral-900/30 p-6 transition-all hover:shadow-xl dark:hover:shadow-neutral-900/50">
      <NoteForm :title="title" :content="content" :show-cancel="true" @save="save" @cancel="goBack" />
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const { getNoteById, updateNote } = useNotes()

const id = computed(() => String(route.params.id || ''))
const note = computed(() => getNoteById(id.value))

const title = ref('')
const content = ref('')

watch(
  note,
  (n) => {
    title.value = n?.title || ''
    content.value = n?.content || ''
  },
  { immediate: true }
)

const save = (data) => {
  updateNote(id.value, data)
  router.push('/')
}

const goBack = () => router.push('/')
 </script>

<style scoped>
</style>




