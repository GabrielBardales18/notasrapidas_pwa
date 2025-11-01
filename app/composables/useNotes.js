export function useNotes() {
  const notes = useState('notes', () => [])

  if (process.client) {
    const saved = localStorage.getItem('notes')
    if (saved) {
      try {
        notes.value = JSON.parse(saved)
      } catch (_) {
        notes.value = []
      }
    }

    watch(
      notes,
      (val) => {
        try {
          localStorage.setItem('notes', JSON.stringify(val))
        } catch (_) {
        }
      },
      { deep: true }
    )
  }

  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

  const createNote = (data) => {
    const now = new Date().toISOString()
    const note = {
      id: generateId(),
      title: (data?.title || '').trim(),
      content: (data?.content || '').trim(),
      createdAt: now,
      updatedAt: now
    }
    notes.value = [note, ...notes.value]
    return note.id
  }

  const updateNote = (id, data) => {
    const updatedAt = new Date().toISOString()
    notes.value = notes.value.map((n) =>
      n.id === id
        ? {
            ...n,
            title: data?.title != null ? String(data.title) : n.title,
            content: data?.content != null ? String(data.content) : n.content,
            updatedAt
          }
        : n
    )
  }

  const deleteNote = (id) => {
    notes.value = notes.value.filter((n) => n.id !== id)
  }

  const getNoteById = (id) => notes.value.find((n) => n.id === id)

  return { notes, createNote, updateNote, deleteNote, getNoteById }
}






