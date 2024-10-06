import * as path from "node:path";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), svgr(), TanStackRouterVite()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  }
})
