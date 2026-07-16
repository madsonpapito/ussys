import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

// Função para detectar automaticamente todos os arquivos HTML na raiz
function getHtmlEntries() {
  const entries = {};
  const files = fs.readdirSync(__dirname);
  
  files.forEach((file) => {
    if (file.endsWith('.html')) {
      const name = file.replace('.html', '');
      entries[name] = resolve(__dirname, file);
    }
  });
  
  return entries;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
});
