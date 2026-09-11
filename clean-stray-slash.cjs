const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Remove any stray standalone slash or broken lines causing the syntax error around lines 435-445
for (let i = 430; i < Math.min(lines.length, 455); i++) {
  if (lines[i].trim() === '/' || lines[i].trim() === '</div>/') {
    console.log(`Removing corrupted line ${i + 1}:`, lines[i]);
    lines[i] = '';
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Stray slash removed successfully!');
