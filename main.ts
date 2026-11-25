import { mkdirSync, writeFileSync } from "node:fs";

// One sharp, funny loading-screen tip for stressed developers and AI coding agents, 200 characters or fewer.
const line =
  "Tip: if the build has been running for 20 minutes, it is not building anymore. It is just standing there, silently judging all your life choices.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
