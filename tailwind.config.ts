import type { Config } from 'tailwindcss'

export default <Partial<Config>>({
  darkMode: 'media',
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app/app/**/*.{vue,js,ts}'
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5e9'
        }
      }
    }
  }
})




