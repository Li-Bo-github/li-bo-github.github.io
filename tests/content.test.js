import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { projects, research, archive } from "../src/data/projects.js";
import {
  profile,
  experience,
  education,
  skills,
  copy,
} from "../src/data/profile.js";

function checkTranslations(value) {
  if (!value || typeof value !== "object") return;
  if ("zh" in value || "en" in value) {
    assert.equal(typeof value.zh, "string", "Missing Chinese translation");
    assert.equal(typeof value.en, "string", "Missing English translation");
  } else Object.values(value).forEach(checkTranslations);
}
test("all portfolio content provides both languages", () => {
  [
    projects,
    research,
    archive,
    profile,
    experience,
    education,
    skills,
    copy,
  ].forEach(checkTranslations);
});
test("project IDs are unique and linked resources are usable URLs", () => {
  const records = [...projects, ...research, ...archive];
  assert.equal(new Set(records.map((p) => p.id)).size, records.length);
  for (const p of records) {
    assert.ok(p.title.zh && p.title.en);
    if (p.url) assert.equal(new URL(p.url).protocol, "https:");
    if (p.media?.src) {
      assert.ok(
        !/youtube\.com\/watch|youtu\.be|bilibili\.com\/video/.test(p.media.src),
        "Platform watch URLs must use url, not media.src",
      );
      for (const path of [p.media.src, p.media.poster, p.media.captions].filter(
        Boolean,
      )) {
        if (path.startsWith("/"))
          assert.ok(existsSync(`public${path}`), `Missing asset: ${path}`);
        else assert.equal(new URL(path).protocol, "https:");
      }
    }
  }
});
test("required public assets exist", () => {
  for (const path of [
    "public/images/bo-li.jpg",
    "public/resumes/bo-li-zh.pdf",
    "public/resumes/bo-li-bilingual.pdf",
    "public/favicon.svg",
  ])
    assert.ok(existsSync(path), `Missing ${path}`);
});
