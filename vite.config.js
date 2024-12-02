import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: true, // Escucha en todas las interfaces de red (0.0.0.0)
    port: 5173, // Opcional: especifica el puerto (por defecto 5173)
  },
});
