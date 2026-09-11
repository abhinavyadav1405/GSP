const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('fontFamily:') && lines[i].includes('Space Grotesk')) {
    console.log(`Found broken line at ${i + 1}:`, lines[i]);
    lines[i] = '          <div style={{ fontSize: 24, fontWeight: 700, color: CAT_COLORS[idx] || "#fbbf24", fontFamily: \'"Space Grotesk", sans-serif\' }}>{counts[cat]}</div>';
    console.log(`Replaced with:`, lines[i]);
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Line replaced cleanly!');
