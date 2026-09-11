const fs = require('fs');
const file = 'src/App.tsx';
let code = fs.readFileSync(file, 'utf8');

// Fix the bracket mismatch error around line 2104
code = code.replace(/lightbox\.caption\s*\]/g, 'lightbox.caption }');
code = code.replace(/style=\{\{(.*?)\s*\]\}/g, (match, p1) => {
  return `style={{${p1}}}`;
});

// General cleanup for common bracket typos introduced in recent injections
code = code.replace(/style=\{\{\s*width:\s*"100%"\s*\]/g, 'style={{ width: "100%" }}');

fs.writeFileSync(file, code);
console.log('✅ Syntax error patched successfully!');
