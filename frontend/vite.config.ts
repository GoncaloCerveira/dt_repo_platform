import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },

  server: {
    host: true,
    watch: {
      usePolling: true,
      interval: 150,
    },
    hmr: {
      overlay: true,
    },
    allowedHosts: [
      "gonalocerveira.tail947ed2.ts.net"
    ]
  }
});
