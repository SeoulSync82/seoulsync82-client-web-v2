import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1200,
    sourcemap: 'hidden',
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
        prettier: false,
      },
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    host: '127.0.0.1',
    port: 7011,
    proxy: {
      '/api': {
        target: 'http://sunggu.myqnapcloud.com:7008',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      },
    },
  },
});
