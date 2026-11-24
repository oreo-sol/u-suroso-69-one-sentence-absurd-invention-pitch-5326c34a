// One-Sentence Absurd Invention Pitch — entry program.
// Writes exactly one sentence to /output/entry.txt.
// The sentence is an original invention pitch, written in the build session.

const ENTRY =
  "The Pen Resurrection Kit is a pocket defibrillator for dying biros that shocks them back to life mid-signature so your name never trails off into a fading ghost line.";

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
