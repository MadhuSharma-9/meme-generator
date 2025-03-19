import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/meme-generator/', // 👈 This is important for GitHub Pages
});
