import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [[
          'babel-plugin-react-compiler'
        ]],
      },
    }),
    tsconfigPaths()
  ],
})
