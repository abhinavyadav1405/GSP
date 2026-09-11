const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix the exact malformed style object bracket pattern causing the build failure
content = content.replace(/'Space Grotesk', sans-serif\s*\]/g, "'Space Grotesk', sans-serif }");
content = content.replace(/"Space Grotesk", sans-serif\s*\]/g, '"Space Grotesk", sans-serif }');
content = content.replace(/fontFamily:\s*([^}]+)\]\s*>/g, 'fontFamily: $1}>');
content = content.replace(/style=\{\{(.*?)\}\s*\]\s*>/g, 'style={{$1}}>');

fs.writeFileSync(file, content);
console.log('✅ Bracket error fixed permanently!');
