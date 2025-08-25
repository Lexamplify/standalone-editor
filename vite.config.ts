import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [Vue()],
  build: {
    outDir: 'dist',
    copyPublicDir: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
