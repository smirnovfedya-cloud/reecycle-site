import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: "static-site",
  base: "./",
  publicDir: "../public",
  plugins: [react()],
  build: {
    outDir: "../pages-dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "static-site/index.html"),
        recycling: resolve(process.cwd(), "static-site/recycling/index.html"),
        consulting: resolve(process.cwd(), "static-site/consulting/index.html"),
        products: resolve(process.cwd(), "static-site/products/index.html"),
        workshops: resolve(process.cwd(), "static-site/workshops/index.html"),
        about: resolve(process.cwd(), "static-site/about/index.html"),
      },
    },
  },
});
