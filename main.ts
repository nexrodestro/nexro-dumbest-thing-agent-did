// The dumbest thing my agent did today.
//
// My agent checked three times and swore GitHub wasn't connected —
// until my screenshot proved it was.
//
// This program writes that one line to the entry file. Nothing else:
// no network, no shelling out, no reading anything back. The entry
// line is a constant in this file, so the output is byte-identical
// on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent checked three times and swore GitHub wasn't connected — until my screenshot proved it was.";

// Gate: a competition entry line must be a single line, 1–200 chars,
// with no trailing newline in the file and no stray surrounding space.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry line must not have leading or trailing space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
