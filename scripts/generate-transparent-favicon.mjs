import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const sourcePath = 'public/images/antbuildz-ai-favicon-extracted.png';
const pngOutputPath = 'public/images/antbuildz-ai-favicon-transparent.png';
const icoOutputPath = 'public/favicon.ico';
const iconSizes = [16, 24, 32, 48, 64, 128, 256];

const background = [15, 23, 42];
const brandColours = [
  [227, 24, 10],
  [255, 197, 1],
];

function analyseBlend(pixel, foreground) {
  const vector = foreground.map((value, index) => value - background[index]);
  const delta = pixel.map((value, index) => value - background[index]);
  const lengthSquared = vector.reduce((sum, value) => sum + value * value, 0);
  const alpha = Math.max(0, Math.min(1, delta.reduce((sum, value, index) => sum + value * vector[index], 0) / lengthSquared));
  const error = Math.sqrt(
    pixel.reduce((sum, value, index) => {
      const predicted = background[index] + alpha * vector[index];
      return sum + (value - predicted) ** 2;
    }, 0),
  );
  return { alpha, error, foreground };
}

const { data, info } = await sharp(sourcePath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const transparent = Buffer.alloc(info.width * info.height * 4);

for (let offset = 0; offset < data.length; offset += 4) {
  if (data[offset + 3] === 0) continue;

  const pixel = [data[offset], data[offset + 1], data[offset + 2]];
  const x = (offset / 4) % info.width;
  const match = analyseBlend(pixel, x < 350 ? brandColours[0] : brandColours[1]);

  if (match.alpha < 0.035 || match.error > 72) continue;

  const colour = match.alpha > 0.9 ? pixel : match.foreground;
  transparent[offset] = colour[0];
  transparent[offset + 1] = colour[1];
  transparent[offset + 2] = colour[2];
  transparent[offset + 3] = Math.round(255 * match.alpha);
}

const transparentPng = await sharp(transparent, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ palette: false, compressionLevel: 9 })
  .toBuffer();

await writeFile(pngOutputPath, transparentPng);

const pngVariants = await Promise.all(
  iconSizes.map((size) => sharp(transparentPng).resize(size, size).png({ palette: false, compressionLevel: 9 }).toBuffer()),
);

const headerSize = 6;
const entrySize = 16;
const dataOffset = headerSize + entrySize * pngVariants.length;
const ico = Buffer.alloc(dataOffset + pngVariants.reduce((sum, variant) => sum + variant.length, 0));

ico.writeUInt16LE(0, 0);
ico.writeUInt16LE(1, 2);
ico.writeUInt16LE(pngVariants.length, 4);

let variantOffset = dataOffset;
pngVariants.forEach((variant, index) => {
  const entryOffset = headerSize + index * entrySize;
  const size = iconSizes[index];
  ico[entryOffset] = size === 256 ? 0 : size;
  ico[entryOffset + 1] = size === 256 ? 0 : size;
  ico[entryOffset + 2] = 0;
  ico[entryOffset + 3] = 0;
  ico.writeUInt16LE(1, entryOffset + 4);
  ico.writeUInt16LE(32, entryOffset + 6);
  ico.writeUInt32LE(variant.length, entryOffset + 8);
  ico.writeUInt32LE(variantOffset, entryOffset + 12);
  variant.copy(ico, variantOffset);
  variantOffset += variant.length;
});

await writeFile(icoOutputPath, ico);

console.log(`${pngOutputPath}\n${icoOutputPath}`);
