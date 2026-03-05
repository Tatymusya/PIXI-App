import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { compilerOptions, transformAssetUrls } from 'vue3-pixi';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }): UserConfig => {
  const isProduction = mode === 'production';
  const isAnalyze = process.env.SOURCEMAP === 'true';

  return {
    plugins: [
      vue({
        template: {
          compilerOptions,
          transformAssetUrls,
        },
      }),
      vueDevTools(),
      isProduction && !isAnalyze && visualizer({
        open: false,
        filename: 'dist/stats.html',
        template: 'treemap',
      }),
    ].filter(Boolean),

    base: process.env.VITE_BASE || '/pixi-app/',

    build: {
      sourcemap: isAnalyze ? 'inline' : false,
      minify: !isAnalyze,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          preserveModules: false,
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'chunks/[name]-[hash].js',
          entryFileNames: 'entries/[name]-[hash].js',
          manualChunks: {
            pixi: ['pixi.js', 'vue3-pixi'],
            vue: ['vue'],
          },
        },
        ...(isAnalyze && {
          treeshake: false,
        }),
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      host: true,
      port: 5173,
      hmr: {
        clientPort: 5173,
      },
    },

    optimizeDeps: {
      include: ['vue3-pixi', 'pixi.js'],
    },
  };
})
