const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

// Replace default states and hardcoded references completely
c = c.replace(/useState\("Priyanka Yadav"\)/g, 'useState("")');
c = c.replace(/useState\('Priyanka Yadav'\)/g, "useState('')");
c = c.replace(/sarpanchName\s*=\s*"Priyanka Yadav"/g, 'sarpanchName = ""');
c = c.replace(/sarpanchName\s*=\s*'Priyanka Yadav'/g, "sarpanchName = ''");
c = c.replace(/"Priyanka Yadav"/g, '""');
c = c.replace(/'Priyanka Yadav'/g, "''");
c = c.replace(/Priyanka Yadav/g, '');

fs.writeFileSync(f, c);
console.log('✅ Completely scrubbed Priyanka Yadav from App.tsx!');
