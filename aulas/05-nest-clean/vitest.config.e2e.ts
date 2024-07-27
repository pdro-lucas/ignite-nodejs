import swc from 'unplugin-swc'
import { configDefaults, defineConfig } from 'vitest/config'
import tsConfigPath from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    exclude: [...configDefaults.exclude, '**/data/pg/**'],
  },
  plugins: [
    tsConfigPath(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
