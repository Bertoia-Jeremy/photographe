import liveReload from 'vite-plugin-live-reload'

export default {
  plugins: [
    liveReload( __dirname + '/**/*.(php|inc|theme|twig|module)')
  ],

  build: {
    // generate manifest.json in outDir
    assetsDir: 'assets',
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: [
        '/main.js',
      ],
      // Remove the [hash] since Drupal will take care of that.
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].[hash].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },

  root: '',
  base: '/',

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
