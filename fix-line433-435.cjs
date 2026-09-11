const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

if (lines[432] !== undefined) {
  lines[432] = '          <div style={{ fontSize: 24, fontWeight: 700, color: CAT_COLORS[idx] || "#fbbf24", fontFamily: \'"Space Grotesk", sans-serif\' }}>{counts[cat]}</div>';
  lines[433] = ''; // clear broken split line
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Line 433-434 fixed cleanly!');
