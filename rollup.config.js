import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';

const production = !process.env.ROLLUP_WATCH;

const main = {
  input: 'src/assets/js/src/lastfm-artists.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'lastFmArtists',
    file: 'src/assets/js/lastfm-artists.js',
  },
  plugins: [
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // If we're building for production, minify
    production && terser(),
    production && filesize(),
  ],
  watch: {
    clearScreen: false,
  },
};

const fun = {
  input: 'src/assets/js/src/fun.mjs',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'fun',
    file: 'src/assets/js/fun.mjs',
  },
  external: [
    'https://unpkg.com/canvas-confetti@1.2.1/dist/confetti.module.mjs',
  ],
  plugins: [
    // If we're building for production, minify
    production && terser(),
    production && filesize(),
  ],
  watch: {
    clearScreen: false,
  },
};

const noFun = {
  input: 'src/assets/js/src/no-fun.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'noFun',
    file: 'src/assets/js/no-fun.js',
  },
  plugins: [
    // If we're building for production, minify
    production && terser(),
    production && filesize(),
  ],
  watch: {
    clearScreen: false,
  },
};

export default [main, fun, noFun];
