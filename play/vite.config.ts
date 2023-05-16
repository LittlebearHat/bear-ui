import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions(), vueJsx()],
  server: {
    host: '0.0.0.0',
    port: 8991,
    // 是否开启 https
    https: false
  },
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }
})
