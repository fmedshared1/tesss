// scripts/generate-env.js
const fs = require("fs");
const path = require("path");

const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const deepseekApiKey = process.env.DEEPSEEK_API_KEY; // ✅ recommended name (no dots)

if (!supabaseAnonKey) {
  console.error("Missing SUPABASE_ANON_KEY in Netlify environment variables.");
  process.exit(1);
}

if (!deepseekApiKey) {
  console.error("Missing DEEPSEEK_API_KEY in Netlify environment variables.");
  process.exit(1);
}

// Write env.js to the publish directory (for publish=".", repo root is correct)
const outPath = path.join(process.cwd(), "env.js");

const contents =
  `// Generated at build time (Netlify)\n` +
  `window.SUPABASE_ANON_KEY = ${JSON.stringify(supabaseAnonKey)};\n` +
  `window.DEEPSEEK_API_KEY = ${JSON.stringify(deepseekApiKey)};\n`;

fs.writeFileSync(outPath, contents, "utf8");
console.log("Wrote env.js with SUPABASE_ANON_KEY + DEEPSEEK_API_KEY");
