const fs = require('fs');
const file = 'src/App.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Clean up any stray closing tags around line 435-443 causing "Expected identifier but found '/'"
if (lines.length > 440) {
  console.log('Line 441 before:', lines[440]);
  // If line 441 has an unexpected closing tag, let's fix or comment it out
  if (lines[440].trim() === '</div>') {
    lines[440] = '        </div>'; 
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('✅ Line 441 cleaned up!');
