const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

if (lines[434]) {
  console.log('Before line 435:', lines[434]);
  lines[434] = '          <div style={{ fontSize: 24, fontWeight: 700, color: CAT_COLORS[idx] || "#fbbf24", fontFamily: "\\"Space Grotesk\\", sans-serif" }}>{counts[cat]}</div>';
  console.log('After line 435:', lines[434]);
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Line 435 fixed with valid syntax!');
