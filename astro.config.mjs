// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            const m = id.match(/components\/Component(\d+)\//);
            if (m) return Number(m[1]) <= 100 ? "components-a" : "components-b";
          },
        },
      },
    },
  },
});
