import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: '5173',
  },
  resolve: {
    alias: [
      { find: '@', 
        replacement: resolve(__dirname, './src') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      { find: '@pages', 
        replacement: resolve(__dirname, './src/pages') },
    ],
  },
})
