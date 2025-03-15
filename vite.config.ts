import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // или другая корректная настройка
  server: {
    port: 5173,
  },
});
