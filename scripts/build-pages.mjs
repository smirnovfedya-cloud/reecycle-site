import path from "node:path";
import { pathToFileURL } from "node:url";

const viteCli = path.resolve("node_modules/vite-pages/bin/vite.js");
const separator = process.platform === "win32" ? ";" : ":";

// esbuild-wasm starts its service through `node`. Include the currently
// running Node installation even in environments that only expose node.exe by
// absolute path (such as Codex's bundled runtime).
process.env.PATH = [path.dirname(process.execPath), process.env.PATH]
  .filter(Boolean)
  .join(separator);

process.argv = [
  process.argv[0],
  viteCli,
  "build",
  "--config",
  "vite.pages.config.mjs",
  "--configLoader",
  "native",
];

await import(pathToFileURL(viteCli).href);
