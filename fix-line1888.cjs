const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

if (lines[1887]) {
  console.log('Original:', lines[1887]);
  lines[1887] = lines[1887].replace(/\]/g, '}');
  console.log('Fixed:', lines[1887]);
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Line 1888 fixed successfully!');
