export function useConnectivity() {
  const isOnline = useState('isOnline', () => true)

  if (process.client) {
    const update = () => {
      isOnline.value = navigator.onLine
    }
    update()
    window.addEventListener('online', update)
    window.addEventListener('offline', update)
    onBeforeUnmount(() => {
      window.removeEventListener('online', update)
      window.removeEventListener('offline', update)
    })
  }

  return { isOnline }
}






