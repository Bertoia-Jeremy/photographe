import liveReload from 'vite-plugin-live-reload'

export default {
  plugins: [
    liveReload( __dirname + '/**/*.(php|inc|theme|twig|module)')
  ],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: './main.js',
      },
      output: {
        entryFileNames: 'main.js',
        assetFileNames: 'main.css',
      },
    },
  },

  root: '',
  base: '/themes/custom/base_theme/dist/',

  server: {
    // required to load scripts from custom host
    cors: true,
    https: false,

    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    strictPort: true,
    port: 3100,
    host: '0.0.0.0',

    hmr: {
      host: 'vite-3100.dbm-local.com',
    }
  },

  resolve: {
    alias: {},
  },
}
