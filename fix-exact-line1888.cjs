const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Target line 1888 (index 1887)
if (lines[1887]) {
  console.log('Before:', lines[1887]);
  // Replace incorrect trailing brackets like ']}' or ']]' with proper '}}'
  lines[1887] = lines[1887].replace(/\]\s*\]$/, '}}');
  lines[1887] = lines[1887].replace(/\]\s*$/, '}');
  console.log('After:', lines[1887]);
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Exact line 1888 bracket fixed!');
