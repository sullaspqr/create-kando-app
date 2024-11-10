#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

// A sablonfájlok könyvtárának megadása
const srcTemplateDir = path.join(__dirname, '../template/src');
const publicTemplateDir = path.join(__dirname, '../template/public');
const destDir = process.cwd();

// Függvény a másolás végrehajtására és hiba kezelésére
const copyDirectory = async (srcDir, destDir) => {
  try {
    await fs.copy(srcDir, path.join(destDir, path.basename(srcDir)));
    console.log(`Successfully copied ${path.basename(srcDir)} to project root!`);
  } catch (err) {
    console.error(`Error copying ${path.basename(srcDir)}:`, err);
  }
};

// Másolások végrehajtása
(async () => {
  await copyDirectory(srcTemplateDir, destDir);
  await copyDirectory(publicTemplateDir, destDir);
})();
