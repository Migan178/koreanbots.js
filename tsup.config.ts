import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  entry: ['src/webhook.ts'],
  dts: true,
  skipNodeModulesBundle: true,
  minify: false,
  format: 'cjs',
})
