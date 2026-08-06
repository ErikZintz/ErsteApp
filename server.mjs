import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "application/javascript; charset=utf-8", ".svg": "image/svg+xml" };

createServer(async (request, response) => {
  const requested = request.url === "/" ? "index.html" : request.url.split("?")[0].replace(/^\//, "");
  const file = normalize(join(root, requested));
  if (!file.startsWith(root)) return response.writeHead(403).end("Forbidden");
  try {
    const content = await readFile(file);
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    response.end(content);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(5173, () => console.log("Matchly running at http://localhost:5173"));
