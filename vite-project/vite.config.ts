import {defineConfig} from "vite"
import checker from "vite-plugin-checker"
import {analyzer} from "vite-bundle-analyzer"
import compression from "vite-plugin-compression";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `index.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      }
    }
  },
  plugins: [
    checker({ typescript: true }),
    analyzer(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 0,
      deleteOriginFile: false,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 0,
      deleteOriginFile: false,
    }),
  ]
})
