import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve("pages-dist");
const port = Number(process.env.PORT || 3000);
const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || "/", `http://${request.headers.host || "localhost"}`).pathname);
  const relative = normalize(pathname.replace(/^\/+/, ""));
  let target = join(root, relative);

  if (!target.startsWith(root)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
  if (!existsSync(target) && !extname(target)) target = join(target, "index.html");
  if (!existsSync(target)) {
    response.writeHead(404).end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": mime[extname(target)] || "application/octet-stream", "Cache-Control": "no-store" });
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () => {
  process.stdout.write(`REE Pages preview: http://127.0.0.1:${port}/\n`);
});
