import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const repository = "summer-absn-tech-capstone";
const customDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN?.trim();
const basePath = customDomain ? "/" : `/${repository}/`;
const outputDirectory = resolve("github-pages");

const { default: worker } = await import(
  new URL(`../dist/server/index.js?pages=${Date.now()}`, import.meta.url)
);

const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Unable to render the site: ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll('/_next/', `${basePath}_next/`)
  .replaceAll('href="/favicon.svg"', `href="${basePath}favicon.svg"`)
  .replaceAll('"pathname":"/"', `"pathname":"${basePath}"`);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(resolve("dist/client"), outputDirectory, { recursive: true });
await writeFile(resolve(outputDirectory, "index.html"), html);
await writeFile(resolve(outputDirectory, "404.html"), html);
await writeFile(resolve(outputDirectory, ".nojekyll"), "");

if (customDomain) {
  await writeFile(resolve(outputDirectory, "CNAME"), `${customDomain}\n`);

  const manifestPath = resolve(outputDirectory, "site.webmanifest");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  manifest.start_url = "/";
  manifest.scope = "/";
  manifest.icons = manifest.icons.map((icon) => ({
    ...icon,
    src: icon.src.replace(`/${repository}/`, "/"),
  }));
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

console.log(outputDirectory);
