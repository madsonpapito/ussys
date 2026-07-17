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

// Plugin para copiar a pasta fbfc/ para dist/ após o build
function copyFbfcPlugin() {
  return {
    name: 'copy-fbfc',
    closeBundle() {
      const src = resolve(__dirname, 'fbfc');
      const dest = resolve(__dirname, 'dist', 'fbfc');
      if (fs.existsSync(src)) {
        fs.cpSync(src, dest, { recursive: true });
      }
    }
  };
}

export default defineConfig({
  plugins: [copyFbfcPlugin()],
  build: {
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
});
