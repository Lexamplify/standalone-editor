import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
      dts: false,
    }),
  ],
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
