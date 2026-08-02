import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "scripts/assets/mobile-banking-architecture-base.png");
const output = path.join(root, "public/projects/mobile-banking-architecture.png");
const iconSetPath = path.join(root, "node_modules/@iconify-json/logos/icons.json");

const iconSet = JSON.parse(await readFile(iconSetPath, "utf8"));
const iconBody = iconSet.icons["aws-secrets-manager"].body;

const overlay = `
<svg width="2464" height="1360" viewBox="0 0 2464 1360" xmlns="http://www.w3.org/2000/svg">
	  <path
	    d="M1272 170 C1295 171 1311 178 1322 189"
	    fill="none"
	    stroke="#bd445f"
	    stroke-width="4"
	    stroke-linecap="round"
	  />
	  <path
	    d="M1236 197 C1176 277 1179 415 1285 495"
	    fill="none"
	    stroke="#bd445f"
	    stroke-width="4"
	    stroke-linecap="round"
	  />
	  <svg x="1200" y="125" width="72" height="72" viewBox="0 0 256 256">
	    ${iconBody}
	  </svg>
	  <text
	    x="1180"
	    y="157"
	    text-anchor="end"
	    font-family="Manrope, Helvetica, sans-serif"
	    font-size="23"
	    font-weight="700"
	    fill="#12254e"
	  >AWS Secrets Manager</text>
	  <text
	    x="1180"
	    y="186"
	    text-anchor="end"
	    font-family="Inter, Helvetica, sans-serif"
	    font-size="19"
	    font-weight="400"
	    fill="#77839c"
	  >Database credentials</text>
</svg>`;

await sharp(source)
  .composite([{ input: Buffer.from(overlay) }])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Generated ${path.relative(root, output)}`);
