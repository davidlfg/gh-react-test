import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://gndx.github.io/gh-react-test/',
  server: {
    cors: false
  },
})
