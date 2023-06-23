import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig((envConfig) => ({
  plugins: [react()],
  server: {
    open: true,
    host: true,
    fs: {
      // Allow serving files from these directories
      allow: ['.', '/node_modules/@fortawesome/fontawesome-free/webfonts'],
    },
  },
}))

