<template>
  <form @submit.prevent="onSubmit" class="grid gap-4">
    <div class="grid gap-2">
      <label for="title" class="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Título</label>
      <input id="title" v-model="localTitle" type="text" placeholder="Escribe un título..." class="rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-sm hover:shadow-md" />
    </div>
    <div class="grid gap-2">
      <label for="content" class="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Contenido</label>
      <textarea id="content" v-model="localContent" rows="8" placeholder="Escribe tu nota aquí..." class="rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-sm hover:shadow-md resize-none"></textarea>
    </div>
    <div class="flex gap-3 pt-2">
      <button type="submit" class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 px-6 py-3 text-white font-semibold hover:from-sky-700 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">💾 Guardar</button>
      <button v-if="showCancel" type="button" @click="$emit('cancel')" class="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 px-6 py-3 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all">Cancelar</button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  content: { type: String, default: '' },
  showCancel: { type: Boolean, default: false }
})
const emit = defineEmits(['save', 'cancel'])

const localTitle = ref(props.title)
const localContent = ref(props.content)

watch(() => props.title, (v) => (localTitle.value = v))
watch(() => props.content, (v) => (localContent.value = v))

const onSubmit = () => {
  emit('save', { title: localTitle.value, content: localContent.value })
}
 </script>

<style scoped>
</style>




