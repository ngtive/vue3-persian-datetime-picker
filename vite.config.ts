import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from 'url';
import { resolve, dirname } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "Vue3PersianDateTimePicker",
      fileName: "vue3-persian-date-time-picker",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: true,
    sourcemap: true,
    target: 'modules'
  },
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "src"),
    }
  }
});
