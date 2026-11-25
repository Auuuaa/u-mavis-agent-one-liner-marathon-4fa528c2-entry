// One-Liner Marathon: the calendar invites you to a meeting about burnout.
// The line goes to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FIRST_HALF = "My calendar invited me to a meeting about my burnout,";
const SECOND_HALF = "so I declined — I was too burned out to attend.";

// The two halves join on a single space.
function assemble(): string {
  return `${FIRST_HALF} ${SECOND_HALF}`;
}

function checkLength(text: string): void {
  const n = text.length;
  if (n < 1 || n > 280) {
    throw new Error(`entry is ${n} chars; the marathon gate is 1-280`);
  }
}

function main(): void {
  const line = assemble();
  checkLength(line);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line, "utf8");
}

main();
