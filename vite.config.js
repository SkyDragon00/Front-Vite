import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
//   server: {
//     port: 3000, // Set front-end to the same port as your back-end
//     proxy: {
//         '/api': 'http://localhost:5173', // Proxy API requests to back-end
//     },
// },
  
})
