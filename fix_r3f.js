const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.{js,jsx}');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('new Vector3(-2, -1.5, 0)')) {
    content = content.replace(/new Vector3\(-2, -1\.5, 0\)/g, '[-2, -1.5, 0]');
    changed = true;
  }
  
  if (content.includes('new Vector3(-2, -2.5, 0)')) {
    content = content.replace(/new Vector3\(-2, -2\.5, 0\)/g, '[-2, -2.5, 0]');
    changed = true;
  }

  // Update materials
  if (content.includes('{darkPhongMaterial}')) {
    content = content.replace(/\{darkPhongMaterial\}/g, '<DarkPhongMaterial />');
    changed = true;
  }
  if (content.includes('{translucentNormalMaterial}')) {
    content = content.replace(/\{translucentNormalMaterial\}/g, '<TranslucentNormalMaterial />');
    changed = true;
  }

  // Update material imports
  if (content.includes('import { darkPhongMaterial')) {
    content = content.replace(/import\s*\{\s*darkPhongMaterial\s*(\,\s*translucentNormalMaterial)?\s*\}\s*from/g, 'import { DarkPhongMaterial, TranslucentNormalMaterial } from');
    content = content.replace(/import\s*\{\s*translucentNormalMaterial\s*\}\s*from/g, 'import { TranslucentNormalMaterial } from');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
