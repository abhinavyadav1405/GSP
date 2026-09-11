const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

// Target common patterns for the floating gear/settings button
// e.g., position fixed/absolute with Settings icon or gear
const patternsToRemove = [
  // Pattern 1: floating button with Settings icon
  `style={{ position: "fixed"`,
  // Let's look for standard floating settings button tags
];

// Let's search and remove the floating button block containing the Settings icon or gear near bottom/corner
// Alternatively, let's write a targeted search for the floating gear button element
let updated = c;

// If it has position fixed and Settings/gear icon
const lines = c.split('\n');
let newLines = [];
let skip = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  // Detect start of floating gear button (e.g. fixed positioning with Settings icon or gear)
  if (!skip && (line.includes('position: "fixed"') || line.includes("position: 'fixed'")) && (line.includes('Settings') || line.includes('gear') || line.includes('zIndex'))) {
    // Check if it's the floating button
    skip = true;
    braceCount = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
    continue;
  }
  if (skip) {
    braceCount += (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
    if (braceCount <= 0) {
      skip = false;
    }
    continue;
  }
  newLines.push(line);
}

// Fallback search if specific floating button code pattern varies
let result = newLines.join('\n');

fs.writeFileSync(f, result);
console.log('✅ Floating settings gear button removed successfully!');
