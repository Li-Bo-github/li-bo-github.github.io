// Writes the server-rendered Chinese page into dist/index.html so crawlers,
// link previews and first paint get real content before JS runs.
import { readFileSync, rmSync, writeFileSync } from "node:fs";

const { render } = await import("../dist-ssr/entry-server.js");
const file = "dist/index.html";
const html = readFileSync(file, "utf8");
const placeholder = '<div id="root"></div>';
if (!html.includes(placeholder)) throw new Error(`${placeholder} not found in ${file}`);
const app = render();
if (!app.includes('id="hero-title"')) throw new Error("Prerendered HTML is missing the hero");
writeFileSync(file, html.replace(placeholder, `<div id="root">${app}</div>`));
rmSync("dist-ssr", { recursive: true, force: true });
console.log(`prerendered ${file} (${app.length} chars)`);
