import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/book/',  // 关键：部署到 /book/ 子路径
  server: {
    proxy: {
      '/book/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/book/, '')
      }
    }
  }
})
