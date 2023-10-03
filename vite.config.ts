import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';
import { createHtmlPlugin } from 'vite-plugin-html';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react({ include: /\.(ts|tsx)$/ }),
    mdPlugin({ mode: [Mode.HTML, Mode.REACT] }),
    viteTsconfigPaths(),
    EnvironmentPlugin('all'),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  assetsInclude: [/\.md$/, '**/*.md'],
  ...(process.env.NODE_ENV === 'development'
    ? {
        define: {
          global: {},
        },
      }
    : {}),
  resolve: {
    alias: {
      ...(process.env.NODE_ENV !== 'development'
        ? {
            './runtimeConfig': './runtimeConfig.browser',
          }
        : {}),
    },
  },
});
