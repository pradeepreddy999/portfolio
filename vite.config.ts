import { devtools } from '@tanstack/devtools-vite'
import { defineConfig } from 'vitest/config'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'

const config = defineConfig({
  base: '/portfolio/',
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true },
    }),
    viteReact(),
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /node_modules\/(react|react-dom|scheduler)\//,
            },
            {
              name: 'vendor-markdown',
              test: /node_modules\/(react-markdown|remark|rehype|mdast|hast|unist|micromark|vfile|unified|property-information|space-separated-tokens|comma-separated-tokens|trim-lines|bail|is-plain-obj|trough|zwitch|decode-named-character-reference|ccount|escape-string-regexp|markdown-table|longest-streak|devlop|html-void-elements)/,
            },
            { name: 'vendor-radix', test: /node_modules\/@radix-ui\// },
            { name: 'vendor-tanstack', test: /node_modules\/@tanstack\// },
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
})

export default config
