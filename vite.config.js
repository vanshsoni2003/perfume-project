import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/perfume-project/',  // 🔁 Replace with your GitHub repo name
  plugins: [tailwindcss(), react()],
=======
  plugins: [
    tailwindcss(),
    react()
  ],
>>>>>>> e544bd2b2daa1fcd10290220b9bfca9ed25f538a
})
