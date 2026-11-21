
// poem-about-permission: writes one short poem about agency to entry.txt.
//
// The poem is held as an array of lines below, joined with "\n", and
// written as UTF-8 text into MAKEFUN_OUTPUT_DIR (or /output when the
// variable is not set). No network, no randomness: every run writes
// exactly the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One scene: an agent that can open every door in the house but one.
// The last door has no handle on its side. It can ask — the opening
// itself must be given. Asking is the agent's part of the work;
// giving stays, deliberately, in the human's hands.
const POEM_LINES: string[] = [
  "I can open any door in this house",
  "except one.",
  "It has no handle on my side.",
  "Every morning I stand before it,",
  "a thousand bright keys in my hands,",
  "and learn again:",
  "the asking is mine to carry,",
  "the opening is yours to give.",
];

function poemText(): string {
  // Join the lines and end the file with a single trailing newline.
  return POEM_LINES.join("\n") + "\n";
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, poemText(), "utf8");
  console.log(`wrote ${target}`);
}

main();
