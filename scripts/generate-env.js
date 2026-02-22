// scripts/generate-env.js
const fs = require("fs");
const path = require("path");

const key = process.env.SUPABASE_ANON_KEY;

if (!key) {
  console.error("Missing SUPABASE_ANON_KEY in Netlify environment variables.");
  process.exit(1);
}

// Write to your publish directory. For a simple static site, publish is usually repo root "."
const outPath = path.join(process.cwd(), "env.js");

const contents =
  `// Generated at build time (Netlify)\n` +
  `window.SUPABASE_ANON_KEY = ${JSON.stringify(key)};\n`;

fs.writeFileSync(outPath, contents, "utf8");
console.log("Wrote env.js");
