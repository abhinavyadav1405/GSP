const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Scan lines around 1888 (index 1880 to 1895) to catch and fix bracket typos in style objects
for (let i = 1880; i < 1895 && i < lines.length; i++) {
  if (lines[i].includes('style={{')) {
    console.log(`Checking line ${i + 1}:`, lines[i]);
    // Fix cases where a square bracket was mistakenly used instead of a curly brace to close the style object or font family
    lines[i] = lines[i].replace(/fontFamily:\s*([^}]+)\]/g, 'fontFamily: $1}');
    lines[i] = lines[i].replace(/style=\{\{(.*?)\}\s*\]/g, 'style={{$1}}');
    lines[i] = lines[i].replace(/\]\s*>/g, '}>');
    // Generic fix if line ends with a stray closing square bracket inside JSX attributes
    if (lines[i].endsWith(']')) {
      lines[i] = lines[i].replace(/\]$/, '}');
    }
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Range bracket fix applied!');
