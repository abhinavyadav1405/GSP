const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

c = c.replace(/"Priyanka Yadav"/g, '""');
c = c.replace(/'Priyanka Yadav'/g, '""');
c = c.replace(/Priyanka Yadav/g, '');

fs.writeFileSync(f, c);
console.log('✅ Hardcoded Priyanka Yadav name removed successfully!');
