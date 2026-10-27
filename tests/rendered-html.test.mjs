import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", String(Date.now()));
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the interactive nursing field book prototype", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Nursing/);
  assert.match(html, /Innovation/);
  assert.match(html, /Field Book/);
  assert.match(html, /Open the field book/);
  assert.match(html, /Brightspace Sync/);
  assert.match(html, /Problem/);
  assert.match(html, /Observation/);
  assert.match(html, /What inspired it/);
  assert.match(html, /What I built/);
  assert.match(html, /What I learned/);
  assert.match(html, /notes\/brightspace-field-note\.png/);
  assert.match(html, /<title>Nursing Workflow Portfolio<\/title>/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});
