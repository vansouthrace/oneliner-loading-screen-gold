import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Tip: if the build takes longer than your coffee break, it is not stuck — it is giving you a socially acceptable reason to stare out the window. Use it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
