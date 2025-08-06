import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/perfume-project/',  // ✅ MUST match the GitHub repo name
  plugins: [react()],
})
