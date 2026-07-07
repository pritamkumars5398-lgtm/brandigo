import fs from "fs";
import path from "path";

/**
 * Fallback env loader to ensure env variables from .env.local are loaded 
 * even if the dev server was started before the file was created/updated.
 */
export function initEnv() {
  // If the essential environment variables are already in process.env, do nothing
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return;
  }

  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      content.split(/\r?\n/).forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
          const eqIdx = trimmed.indexOf("=");
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          
          // Remove wrapping quotes if present
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          
          if (key && !process.env[key]) {
            process.env[key] = val;
          }
        }
      });
    }
  } catch (err) {
    console.error("Failed to load fallback env variables from .env.local:", err);
  }
}
