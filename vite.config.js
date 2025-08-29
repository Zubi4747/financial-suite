import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/financial-suite/',  // <-- Add this line
  plugins: [react()]
});
