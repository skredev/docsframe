import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  outDir: 'dist',
  skipNodeModulesBundle: true,
  minifyIdentifiers: false,
  minifySyntax: false,
  minifyWhitespace: true,
  keepNames: true,
  clean: true,
  shims: true,
  dts: false,
});