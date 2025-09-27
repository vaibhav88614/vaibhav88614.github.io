import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  base: '/',
  // If you choose to deploy using a 'docs' folder on main, you can optionally
  // uncomment the following build option so that `npm run build` outputs directly there.
  build: { outDir: 'docs', emptyOutDir: true },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    process.env.BUNDLE_ANALYZE && visualizer({
      filename: 'stats/bundle-analysis.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
      open: false
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

