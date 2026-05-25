import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Lab-5/',
  plugins: [
    tailwindcss(),
  ],
})