import { transformAsync } from "@babel/core";
import presetReact from "@babel/preset-react";
import presetTypeScript from "@babel/preset-typescript";
import { defineConfig } from "vite-pages";
import { resolve } from "node:path";
import { existsSync, readdirSync } from "node:fs";

function reactTypeScript() {
  return {
    name: "ree-react-typescript",
    enforce: "pre",
    async transform(code, id) {
      const filename = id.split("?", 1)[0];

      if (!/\.[jt]sx?$/.test(filename) || filename.includes("/node_modules/")) {
        return null;
      }

      const result = await transformAsync(code, {
        filename,
        babelrc: false,
        configFile: false,
        sourceMaps: true,
        presets: [
          [presetTypeScript, { allExtensions: true, isTSX: filename.endsWith("x") }],
          [presetReact, { runtime: "automatic" }],
        ],
      });

      return result?.code ? { code: result.code, map: result.map } : null;
    },
  };
}

export default defineConfig({
  root: "static-site",
  base: "./",
  publicDir: "../public",
  esbuild: false,
  plugins: [reactTypeScript()],
  build: {
    outDir: "../pages-dist",
    emptyOutDir: true,
    minify: false,
    cssMinify: false,
    rollupOptions: {
      input: Object.fromEntries([
        ["home", resolve(process.cwd(), "static-site/index.html")],
        ...readdirSync(resolve(process.cwd(), "static-site"), { withFileTypes: true })
          .filter((entry) => entry.isDirectory() && existsSync(resolve(process.cwd(), "static-site", entry.name, "index.html")))
          .map((entry) => [entry.name, resolve(process.cwd(), "static-site", entry.name, "index.html")]),
      ]),
    },
  },
});
