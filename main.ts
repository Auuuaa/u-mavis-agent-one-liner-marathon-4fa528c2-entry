// One-Liner Marathon — a joke about a calendar that schedules its own punchline.
// Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a meeting about burnout that you are too burned out to attend.
const JOKE =
  "My calendar invited me to a meeting about my burnout, so I declined — I was too burned out to attend.";

function emit(): void {
  // Gate: the entry must be 1 to 280 characters of UTF-8 text.
  if (JOKE.length < 1 || JOKE.length > 280) {
    throw new Error(`joke is ${JOKE.length} characters, outside the 1-280 gate`);
  }
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(target)) {
    mkdirSync(target, { recursive: true });
  }
  writeFileSync(join(target, "entry.txt"), JOKE, "utf8");
}

emit();
