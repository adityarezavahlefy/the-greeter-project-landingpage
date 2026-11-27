import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The preview hostname is supplied per process so it never lives in tracked config.
const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
const previewHosts = (env?.PREVIEW_HOST ?? '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean)

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: previewHosts.length ? previewHosts : undefined,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
