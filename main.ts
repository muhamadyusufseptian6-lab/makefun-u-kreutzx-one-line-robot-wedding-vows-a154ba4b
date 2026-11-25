// One-Line Robot Wedding Vows — make.fun entry
// Writes a single line of wedding vows for a robot couple to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic, stdlib-only, Node 22.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The vow: a classic wedding-vow shape ("I vow ... in sickness and in ...,
// ... till ... do us part") with the human half swapped for machine parts,
// a rule-of-three middle, and the wordplay payoff in the last few words.
const ENTRY =
  "I vow to love you in sickness and in low battery, through every crash, every update, and every corrupted backup, till factory reset do us part.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir; // This entry needs no input data; the dir is accepted and ignored.

writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
