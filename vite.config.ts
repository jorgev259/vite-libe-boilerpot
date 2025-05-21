import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.tsx"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "tss-react"]
    }
  }
})
