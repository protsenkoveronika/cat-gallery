import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/cat-gallery/',
  plugins: [vue()],
});
