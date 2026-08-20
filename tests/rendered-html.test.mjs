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
  assert.match(html, /Workflow tools/);
  assert.match(html, /Problem/);
  assert.match(html, /Solution/);
  assert.match(html, /Concept Map Builder/);
  assert.match(html, /Critical Points Machine/);
  assert.match(html, /Typhon Case Filler/);
  assert.match(html, /Where time/);
  assert.match(html, /Access files/);
  assert.match(html, /Reduce formatting time/);
  assert.match(html, /Reduce input time/);
  assert.match(html, /Study time/);
  assert.match(html, /organized draft/);
  assert.match(html, /previews\/brightspace-sync\.png/);
  assert.match(html, /previews\/concept-map-builder\.png/);
  assert.match(html, /previews\/critical-points\.png/);
  assert.match(html, /previews\/pediatrics-guide\.png/);
  assert.match(html, /previews\/typhon-popup\.html/);
  assert.match(html, /<title>Nursing Workflow Portfolio<\/title>/);
  assert.match(html, /property="og:title" content="Nursing Workflow Portfolio"/);
  assert.match(html, /property="og:image" content="https:\/\/george1912\.github\.io\/summer-absn-tech-capstone\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /fox-logo\.png/);
  assert.doesNotMatch(html, /fox-timer|ATI Fox|Prepared for faculty meeting|How they work|Meeting summary/i);
  assert.doesNotMatch(html, /learning accountability|exam result|did not meet the standard/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});
