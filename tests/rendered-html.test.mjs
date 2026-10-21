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
  assert.match(html, /Small tools/);
  assert.match(html, /Problem/);
  assert.match(html, />Tool</);
  assert.match(html, /Concept Map Builder/);
  assert.match(html, /Critical Points Machine/);
  assert.match(html, /Typhon Form Filler/);
  assert.match(html, /never generates clinical information/i);
  assert.match(html, /Pediatrics Nursing Guide/);
  assert.match(html, /Fox Timer/);
  assert.match(html, /Access files/);
  assert.match(html, /Format documents/);
  assert.match(html, /Reduce input/);
  assert.match(html, /Protect study time/);
  assert.match(html, /organized draft/);
  assert.match(html, /previews\/brightspace-sync\.png/);
  assert.match(html, /previews\/concept-map-builder\.png/);
  assert.match(html, /previews\/critical-points\.png/);
  assert.match(html, /previews\/pediatrics-guide\.png/);
  assert.match(html, /previews\/typhon-popup\.html/);
  assert.match(html, /https:\/\/george1912\.github\.io\/fox-timer\//);
  assert.equal((html.match(/class="project-card"/g) ?? []).length, 6);
  assert.match(html, /<title>Nursing Workflow Portfolio<\/title>/);
  assert.match(html, /property="og:title" content="Nursing Workflow Portfolio"/);
  assert.match(html, /property="og:image" content="https:\/\/george1912\.github\.io\/summer-absn-tech-capstone\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /fox-logo\.png/);
  assert.doesNotMatch(html, /Prepared for faculty meeting|How they work|Meeting summary|Direct access/i);
  assert.doesNotMatch(html, /learning accountability|exam result|did not meet the standard/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
  assert.doesNotMatch(html, /Typhon Case Filler|AI Medication Suggestion/);
});
