import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/perfume-project/',  // 🔁 Replace with your GitHub repo name
  plugins: [tailwindcss(), react()],
})
