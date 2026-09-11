const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Scan around line 435 (index 434) to fix the stray square bracket in style attribute
for (let i = 430; i < 440 && i < lines.length; i++) {
  if (lines[i].includes('style={{') && lines[i].includes(']')) {
    console.log(`Fixing line ${i + 1}:`, lines[i]);
    lines[i] = lines[i].replace(/\]$/, '}');
    lines[i] = lines[i].replace(/style=\{\{(.*?)\}\s*\]/g, 'style={{$1}}');
    console.log(`Updated line ${i + 1}:`, lines[i]);
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Line 435 bracket fixed successfully!');
