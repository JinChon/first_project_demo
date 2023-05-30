// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'hyperlinks': resolve(__dirname, 'src/HTML & CSS 1/hyperlinks.html'),
        'aboutMe:': resolve(__dirname, 'src/HTML & CSS 1/linkpage/aboutMe.html'),
      }
    }
  }
})