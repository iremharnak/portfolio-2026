// Builds the served Studio assets in public/studio/ from the raw originals in assets-raw/studio/.
// Originals are only read, never written. Screens are resized and compressed, never cropped.
// The only crops are the small type specimens and the panels of the social preview.
// Run with: node scripts/optimize-studio.mjs

import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = path.join(ROOT, "assets-raw/studio");
const OUT = path.join(ROOT, "public/studio");
const MAX_WIDTH = 2400;

// Opaque screens go to mozjpeg. Raise quality per file here if small text breaks up.
const JPEG_QUALITY = { default: 85 };

const screens = [
  ["alba/alba-hero.png", "alba/alba-hero-collage.jpg"],
  ["alba/alba-modern-trio.png", "alba/alba-tablet-trio.jpg"],
  ["alba/Alba-mobile-web.png", "alba/alba-desktop-mobile.jpg"],
  ["mackenzie/mackenzie-hero.png", "mackenzie/mackenzie-hero-collage.jpg"],
  ["mackenzie/mackenzie-modern-trio.png", "mackenzie/mackenzie-tablet-trio.jpg"],
  // Transparent background, so it stays PNG.
  ["mackenzie/mackenzie-test.png", "mackenzie/mackenzie-desktop-mobile.png"],
  ["angela/angela-hero.png", "angela/angela-hero-collage.jpg"],
  ["angela/angela-modern-trio.png", "angela/angela-tablet-trio.jpg"],
  ["angela/angela-multi-size.png", "angela/angela-devices.jpg"],
];

// Flat brand slides compress well as palette PNGs. Brand Values holds photos, so it stays full color.
const slides = [
  ["multitouch/Mission Statement.png", "multitouch/multitouch-mission.png", true],
  ["multitouch/Logo-02.png", "multitouch/multitouch-logo-bw.png", true],
  ["multitouch/Logo-03.png", "multitouch/multitouch-logo-colour.png", true],
  ["multitouch/Color.png", "multitouch/multitouch-color.png", true],
  ["multitouch/Typography-01.png", "multitouch/multitouch-type-montserrat.png", true],
  ["multitouch/Typography-02.png", "multitouch/multitouch-type-lato.png", true],
  ["multitouch/Voice & Tone.png", "multitouch/multitouch-voice-tone.png", true],
  ["multitouch/Brand Values.png", "multitouch/multitouch-values.png", false],
  ["multitouch/Logo-01.png", "multitouch/multitouch-logo-clearspace.png", true],
];

// Type specimens cut from flat screens, in original pixel coordinates.
const specimens = [
  ["alba/Alba-mobile-web.png", "alba/alba-specimen-display.png", { left: 1462, top: 482, width: 316, height: 76 }],
  ["mackenzie/mackenzie-test.png", "mackenzie/mackenzie-specimen-display.png", { left: 355, top: 1280, width: 580, height: 90 }],
  ["mackenzie/mackenzie-test.png", "mackenzie/mackenzie-specimen-body.png", { left: 1125, top: 650, width: 680, height: 120 }],
  ["angela/angela-multi-size.png", "angela/angela-specimen-display.png", { left: 1320, top: 575, width: 400, height: 180 }],
];

// Social preview panels: the centre tablet of each trio, headline and layout led.
const socialPanels = [
  ["alba/alba-modern-trio.png", { left: 1000, top: 420, width: 694, height: 1092 }],
  ["mackenzie/mackenzie-modern-trio.png", { left: 960, top: 420, width: 694, height: 1092 }],
  ["angela/angela-modern-trio.png", { left: 948, top: 420, width: 694, height: 1092 }],
];

async function write(pipeline, rel) {
  const dest = path.join(OUT, rel);
  await mkdir(path.dirname(dest), { recursive: true });
  const info = await pipeline.toFile(dest);
  const { size } = await stat(dest);
  console.log(`${rel.padEnd(48)} ${info.width}x${info.height}  ${(size / 1024).toFixed(0)}KB`);
}

const resized = (src) =>
  sharp(path.join(RAW, src)).resize({ width: MAX_WIDTH, withoutEnlargement: true });

for (const [src, dest] of screens) {
  const quality = JPEG_QUALITY[dest] ?? JPEG_QUALITY.default;
  const pipeline = dest.endsWith(".png")
    ? resized(src).png({ compressionLevel: 9, effort: 10 })
    : resized(src).flatten({ background: "#ffffff" }).jpeg({ quality, mozjpeg: true });
  await write(pipeline, dest);
}

for (const [src, dest, palette] of slides) {
  await write(resized(src).png({ compressionLevel: 9, effort: 10, palette }), dest);
}

for (const [src, dest, region] of specimens) {
  await write(sharp(path.join(RAW, src)).extract(region).png({ compressionLevel: 9 }), dest);
}

const GUTTER = 6;
const panelWidth = (1200 - GUTTER * 2) / 3;
const panels = await Promise.all(
  socialPanels.map(([src, region]) =>
    sharp(path.join(RAW, src))
      .extract(region)
      .resize(panelWidth, 630, { fit: "cover" })
      .toBuffer()
  )
);
await write(
  sharp({ create: { width: 1200, height: 630, channels: 3, background: "#ffffff" } })
    .composite(panels.map((input, i) => ({ input, left: i * (panelWidth + GUTTER), top: 0 })))
    .png({ compressionLevel: 9 }),
  "studio-social.png"
);
