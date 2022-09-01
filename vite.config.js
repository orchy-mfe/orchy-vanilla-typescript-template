/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'
import qiankun from 'vite-plugin-qiankun'

const port = process.env.PORT || 8080

export default defineConfig(({mode}) => ({
  plugins: [
    qiankun('orchy-vanilla-typescript-template', {useDevMode: true}),
    visualizer(),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-vanilla-typescript-template/',
  server: {port},
  test: {
    environment: 'happy-dom',
    mockReset: true
  }
}))
