#!/usr/bin/env node
/**
 * lock-normalize.mjs
 * Ensures package-lock.json has public npm registry URLs before commit / CI.
 * Rewrites any corporate Artifactory resolved tarball URLs to https://registry.npmjs.org/
 */
import { readFileSync, writeFileSync } from 'node:fs';

const LOCK_PATH = 'package-lock.json';
// The hostname to scrub from lockfile (not logged). Provide via env var; fallback to generic pattern.
const CORPORATE_HOST = process.env.CORPORATE_REGISTRY_HOST || '(internal-artifactory-host)';
const PUBLIC_REGISTRY = 'https://registry.npmjs.org/';

function main() {
  let raw;
  try {
    raw = readFileSync(LOCK_PATH, 'utf-8');
  } catch (e) {
    console.error('[lock-normalize] Cannot read package-lock.json');
    process.exit(1);
  }

  const hasCorporate = raw.includes(CORPORATE_HOST) || /https?:\/\/[^\n]+artifactory[^\n]+/i.test(raw);
  if (!hasCorporate) {
    console.log('[lock-normalize] No internal host URLs detected (will still scan for malformed public URLs).');
  }

  // Strategy: JSON parse & walk dependencies rewriting `resolved` fields OR fast regex swap.
  // For safety (avoid corrupting JSON spacing), parse + stringify.
  let json;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    console.error('[lock-normalize] Failed to parse package-lock.json as JSON. Aborting.');
    process.exit(1);
  }

  let replaced = 0;
  let repaired = 0;

  const MALFORMED_RE = /^(https:\/\/registry\.npmjs\.org\/)([^\/@]+)(?:-)(\d+[^\/]*\.tgz)$/; // e.g. registry.npmjs.org/postcss-8.5.6.tgz

  function rewriteDeps(obj) {
    if (!obj || typeof obj !== 'object') return;
    if (obj.resolved && typeof obj.resolved === 'string') {
      const before = obj.resolved;
      if (/artifactory/.test(before)) {
        obj.resolved = before.replace(/https?:\/\/[^/]+\/artifactory\/api\/npm\/npmjs\.org\//, PUBLIC_REGISTRY);
        if (before !== obj.resolved) replaced++;
      }
      // Repair malformed public URLs missing the '/<name>/-/<file>' structure
      // Correct pattern should be: https://registry.npmjs.org/<pkg>/-/<pkg>-<version>.tgz
      if (before.startsWith(PUBLIC_REGISTRY) && before.includes('-') && !/\/ - \/|\/-\//.test(before)) {
        // Quick opt-out: if it already contains '/-/' it's fine
        if (!before.includes('/-/')) {
          // Attempt structured reconstruction
          const tail = before.slice(PUBLIC_REGISTRY.length); // e.g. autoprefixer-10.4.21.tgz
          const m = tail.match(/^(?:@?[^\/]+?)(?:-\d.*\.tgz)$/) ? null : null; // placeholder (unused but kept for clarity)
        }
      }
      if (!before.includes('/-/')) {
        const simple = before.match(/^(https:\/\/registry\.npmjs\.org\/)(@?[^\/]+?)-(\d[^\/]*\.tgz)$/);
        if (simple) {
          const [, root, name, filePart] = simple;
            // filePart already contains version+ .tgz, reconstruct canonical path
            obj.resolved = `${root}${name}/-/${name}-${filePart}`;
            if (before !== obj.resolved) repaired++;
        }
      }
    }
    for (const k of Object.keys(obj)) rewriteDeps(obj[k]);
  }

  rewriteDeps(json.packages);
  rewriteDeps(json.dependencies);

  if (replaced === 0 && repaired === 0) {
    console.log('[lock-normalize] No changes (host rewrites or repairs) applied.');
  } else {
    writeFileSync(LOCK_PATH, JSON.stringify(json, null, 2) + '\n');
    const parts = [];
    if (replaced) parts.push(`${replaced} host rewrite${replaced===1?'':'s'}`);
    if (repaired) parts.push(`${repaired} malformed URL repair${repaired===1?'':'s'}`);
    console.log(`[lock-normalize] Applied ${parts.join(' and ')}.`);
  }
}

main();
