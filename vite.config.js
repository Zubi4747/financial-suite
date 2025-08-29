import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/financial-suite/',  // 👈 IMPORTANT for GitHub Pages
  plugins: [react()],
})
