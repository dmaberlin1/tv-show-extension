// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { crx, ManifestV3Export } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
import svgr from "vite-plugin-svgr";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    eslintPlugin(),
    crx({ manifest: manifest as unknown as ManifestV3Export }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});