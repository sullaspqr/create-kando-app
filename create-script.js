#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

// A sablonfájlok könyvtárának megadása
const srcTemplateDir = path.join(__dirname, '/template/src');
const publicTemplateDir = path.join(__dirname, '/template/public');
const srcPackageJson = path.join(__dirname, 'package.json');  // A főkönyvtárban lévő package.json
const destDir = process.cwd();  // A célkönyvtár (ahová a fájlokat másoljuk)

// Függvény a másolás végrehajtására és hiba kezelésére
const copyDirectory = async (srcDir, destDir) => {
  try {
    await fs.copy(srcDir, path.join(destDir, path.basename(srcDir)));
    console.log(`Successfully copied ${path.basename(srcDir)} to project root!`);
  } catch (err) {
    console.error(`Error copying ${path.basename(srcDir)}:`, err);
  }
};

// Függvény a package.json másolására
const copyPackageJson = async (srcFile, destDir) => {
  try {
    await fs.copy(srcFile, path.join(destDir, 'package.json'));
    console.log('Successfully copied package.json to project root!');
  } catch (err) {
    console.error('Error copying package.json:', err);
  }
};

// Másolások végrehajtása
(async () => {
  await copyDirectory(srcTemplateDir, destDir);
  await copyDirectory(publicTemplateDir, destDir);
  await copyPackageJson(srcPackageJson, destDir);  // A package.json fájl másolása
})();
