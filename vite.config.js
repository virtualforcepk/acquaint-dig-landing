import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is overridden at build time with: npm run build -- --base=./
export default defineConfig({
  plugins: [react()],
})
