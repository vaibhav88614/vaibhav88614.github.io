#!/usr/bin/env node
/**
 * lock-normalize.mjs
 * Ensures package-lock.json has public npm registry URLs before commit / CI.
 * Rewrites any corporate Artifactory resolved tarball URLs to https://registry.npmjs.org/
 */
import { readFileSync, writeFileSync } from 'node:fs';

const LOCK_PATH = 'package-lock.json';
const CORPORATE_HOST = 'info-artifactory.gm.com';
const PUBLIC_REGISTRY = 'https://registry.npmjs.org/';

function main() {
  let raw;
  try {
    raw = readFileSync(LOCK_PATH, 'utf-8');
  } catch (e) {
    console.error('[lock-normalize] Cannot read package-lock.json');
    process.exit(1);
  }

  if (!raw.includes(CORPORATE_HOST)) {
    console.log('[lock-normalize] No corporate URLs found. Nothing to change.');
    return;
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

  function rewriteDeps(obj) {
    if (obj && typeof obj === 'object') {
      if (obj.resolved && typeof obj.resolved === 'string' && obj.resolved.includes(CORPORATE_HOST)) {
        // Extract the package file after last '/'
        const fileName = obj.resolved.split('/').pop();
        if (fileName && fileName.includes('.tgz')) {
          obj.resolved = PUBLIC_REGISTRY + fileName.replace(/^(.*?%-)?/, '');
          replaced++;
        } else {
          // Fallback: generic replace host segment
          obj.resolved = obj.resolved.replace(/https?:\/\/[^/]+\/artifactory\/api\/npm\/npmjs\.org\//, PUBLIC_REGISTRY);
          replaced++;
        }
      }
      for (const k of Object.keys(obj)) rewriteDeps(obj[k]);
    }
  }

  rewriteDeps(json.packages);
  rewriteDeps(json.dependencies);

  if (replaced === 0) {
    console.log('[lock-normalize] Corporate host present in file but no resolvable entries updated. Check pattern.');
  } else {
    writeFileSync(LOCK_PATH, JSON.stringify(json, null, 2) + '\n');
    console.log(`[lock-normalize] Rewrote ${replaced} resolved URL(s) to public registry.`);
  }
}

main();
