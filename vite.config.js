import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/tools-trek-2/',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html')
      },
    },
  },
})