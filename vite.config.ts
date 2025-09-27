import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

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
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

