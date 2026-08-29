import { fileURLToPath } from 'node:url';
import { defineConfig } from '/Users/kekheanhooi/Documents/New project/lovable-export/AntbuildzAI/node_modules/vite/dist/node/index.js';
import react from '/Users/kekheanhooi/Documents/New project/lovable-export/AntbuildzAI/node_modules/@vitejs/plugin-react-swc/index.js';

const referenceModules = '/Users/kekheanhooi/Documents/New project/lovable-export/AntbuildzAI/node_modules';
const workspace = fileURLToPath(new URL('.', import.meta.url));
const root = fileURLToPath(new URL('./preview', import.meta.url));

export default defineConfig({
  root,
  base: './',
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  plugins: [react()],
  resolve: {
    alias: {
      '@': workspace,
      react: `${referenceModules}/react`,
      'react-dom': `${referenceModules}/react-dom`,
      'react-dom/client': `${referenceModules}/react-dom/client.js`,
    },
  },
  server: { host: '127.0.0.1', port: 8081, strictPort: true },
  build: { outDir: fileURLToPath(new URL('./preview-dist', import.meta.url)), emptyOutDir: false },
});
