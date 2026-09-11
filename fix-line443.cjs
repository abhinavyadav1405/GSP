const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Clean up corrupted or stray characters/tags around line 430-445
for (let i = 430; i < Math.min(lines.length, 450); i++) {
  if (lines[i].trim() === '/' || lines[i].trim() === '</div></div>') {
    lines[i] = '';
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Cleaned up corrupted lines successfully!');
