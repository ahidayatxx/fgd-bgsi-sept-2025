import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fgd-bgsi-sept-2025/',
  server: {
    port: 3000,
    open: true
  }
})