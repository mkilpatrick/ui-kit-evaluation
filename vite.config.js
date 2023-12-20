import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import yextSSG from "@yext/pages/vite-plugin";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), yextSSG({})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
