import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", String(Date.now()));
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the concise nursing workflow portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Repeated work/);
  assert.match(html, /Problem/);
  assert.match(html, /Solution/);
  assert.match(html, /Concept Map Builder/);
  assert.match(html, /Critical Points Machine/);
  assert.match(html, /Typhon Case Filler/);
  assert.match(html, /Reduce friction/);
  assert.match(html, /Access the files/);
  assert.match(html, /Make time to study/);
  assert.match(html, /organized draft/);
  assert.doesNotMatch(html, /fox-timer|ATI Fox|Prepared for faculty meeting|How they work|Meeting summary/i);
  assert.doesNotMatch(html, /learning accountability|exam result|did not meet the standard/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});
