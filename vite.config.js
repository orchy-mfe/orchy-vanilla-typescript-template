/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const port = process.env.PORT || 8080

export default defineConfig(({mode}) => ({
  plugins: [
    cssInjectedByJsPlugin(),
    visualizer(),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-vanilla-typescript-template/',
  server: {port, cors: true},
  test: {
    environment: 'happy-dom',
    mockReset: true
  }
}))
