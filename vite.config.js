import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/My-Web-Portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.docx'],
})
