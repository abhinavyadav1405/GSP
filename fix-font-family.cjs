const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix the exact malformed fontFamily string and bracket error on line 888
content = content.replace(/fontFamily:\s*"Space Grotesk",\s*sans-serif\s*\]\}/g, "fontFamily: '\"Space Grotesk\", sans-serif'}");
content = content.replace(/fontFamily:\s*'Space Grotesk',\s*sans-serif\s*\]\}/g, "fontFamily: '\"Space Grotesk\", sans-serif'}");
content = content.replace(/fontFamily:\s*"Space Grotesk",\s*sans-serif\s*\]/g, "fontFamily: '\"Space Grotesk\", sans-serif'");

fs.writeFileSync(file, content);
console.log('✅ Font family syntax fixed!');
