/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,  // Permite o uso de `test`, `expect`, etc., sem precisar importar manualmente
    environment: 'jsdom', // Simula um ambiente de navegador para testes da DOM
    setupFiles: './vitest.setup.ts', // Arquivo de setup para testes
  },
});
