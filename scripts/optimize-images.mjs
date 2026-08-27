// Resizes the full-resolution originals in "public/For Websitte" into
// web-ready WebP files under "public/gallery/<category>", preserving the
// category grouping. Run with: npm run optimize:images
import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC_ROOT = path.resolve('public', 'For Websitte');
const OUT_ROOT = path.resolve('public', 'gallery');

// category folder on disk -> url-safe id used in /public/gallery
const CATEGORIES = {
  Cafes: 'cafes',
  Food: 'food',
  Drinks: 'drinks',
  Interior: 'interior',
  NightLife: 'nightlife',
};

const MAX_WIDTH = 1600; // plenty for a 3-column masonry at 2x
const QUALITY = 80;

const slug = (name) =>
  path.parse(name).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function run() {
  if (!existsSync(SRC_ROOT)) {
    console.error(`Source folder not found: ${SRC_ROOT}`);
    process.exit(1);
  }

  let total = 0;
  let bytesIn = 0;
  let bytesOut = 0;

  for (const [folder, id] of Object.entries(CATEGORIES)) {
    const srcDir = path.join(SRC_ROOT, folder);
    if (!existsSync(srcDir)) {
      console.warn(`skip: ${folder} (not found)`);
      continue;
    }
    const outDir = path.join(OUT_ROOT, id);
    await mkdir(outDir, { recursive: true });

    const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
    for (const file of files) {
      const srcPath = path.join(srcDir, file);
      const outPath = path.join(outDir, `${slug(file)}.webp`);

      const { size: inSize } = await stat(srcPath);
      await sharp(srcPath)
        .rotate() // respect EXIF orientation
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);
      const { size: outSize } = await stat(outPath);

      bytesIn += inSize;
      bytesOut += outSize;
      total += 1;
      console.log(
        `${id}/${path.basename(outPath)}  ${(inSize / 1048576).toFixed(1)}MB -> ${(outSize / 1024).toFixed(0)}KB`
      );
    }
  }

  const mb = (b) => (b / 1048576).toFixed(1);
  console.log(
    `\nDone. ${total} images  ${mb(bytesIn)}MB -> ${mb(bytesOut)}MB  (${((1 - bytesOut / bytesIn) * 100).toFixed(1)}% smaller)`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
