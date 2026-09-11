const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');
if (c.indexOf('const [search, setSearch]') === -1) {
  const replaceTarget = 'const [sort, setSort] = useState("newest");';
  const newCode = replaceTarget + '\n  const [search, setSearch] = useState("");\n  const [filterStatus, setFilterStatus] = useState("All");\n  const [filterCat, setFilterCat] = useState("All");\n  const [filterWard, setFilterWard] = useState("All");';
  c = c.replace(replaceTarget, newCode);
  fs.writeFileSync(f, c);
  console.log('✅ Fix Applied Successfully! Refresh your app now.');
} else {
  console.log('⚠️ Already fixed! No changes made.');
}
