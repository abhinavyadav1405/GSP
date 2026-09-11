const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

if (lines[1887]) {
  console.log('Before:', lines[1887]);
  // Replace style={{ ... ] with style={{ ... }
  lines[1887] = lines[1887].replace(/style=\{\{(.*?)\s*\]\}/g, 'style={{$1}}');
  lines[1887] = lines[1887].replace(/\]\s*>/g, '}>');
  lines[1887] = lines[1887].replace(/\]\s*\)/g, ')');
  console.log('After:', lines[1887]);
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Line 1888 bracket corrected!');
