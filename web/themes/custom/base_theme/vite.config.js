import liveReload from 'vite-plugin-live-reload'
import process from 'node:process'
import path from 'node:path'
import getPath from './services/getPath'

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
                './main.js',
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
    base: getPath(process.env.NODE_ENV, 'base'),

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
        alias: {
            '@images': path.resolve(
                // eslint-disable-next-line no-undef
                __dirname,
                getPath(process.env.NODE_ENV, 'aliasImages'),
            ),
        },
    },
}
