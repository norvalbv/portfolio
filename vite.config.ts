import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react({ include: /\.(ts|tsx)$/ }),
    viteTsconfigPaths(),
    EnvironmentPlugin('all'),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis', // <-- AWS SDK
      },
    },
  },
  define: {
    'process.env': {},
  },
  server: {
    port: 7777,
  },
});
