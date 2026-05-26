import re
code = open('src/App.tsx').read()

# 1. Add deleteDoc to imports
code = code.replace(
    'collection, addDoc, doc, updateDoc, onSnapshot',
    'collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot'
)

# 2. addProblem - Firestore mein save karo
code = code.replace(
    'saveProblems([p, ...problems]);',
    'await setDoc(doc(db, "problems", p.id), p);'
)

# 3. updateProblem - Firestore update
code = code.replace(
    'const updateProblem = (id: string, changes: Partial<Problem>) => {',
    'const updateProblem = async (id: string, changes: Partial<Problem>) => {'
)
code = code.replace(
    'saveProblems(problems.map(p => p.id === id ? { ...p, ...changes } : p));',
    'await updateDoc(doc(db, "problems", id), changes);'
)

# 4. deleteProblem - Firestore delete
code = code.replace(
    'const deleteProblem = (id: string) => {',
    'const deleteProblem = async (id: string) => {'
)
code = code.replace(
    'saveProblems(problems.filter(p => p.id !== id));',
    'await deleteDoc(doc(db, "problems", id));'
)

# 5. clearResolved - Firestore se resolved delete karo
code = code.replace(
    'const clearResolved = () => {',
    'const clearResolved = async () => {'
)
code = code.replace(
    'saveProblems(problems.filter(p => p.status !== "Resolved"));',
    'await Promise.all(problems.filter(p => p.status === "Resolved").map(p => deleteDoc(doc(db, "problems", p.id))));'
)

# 6. clearAll - Firestore se sab delete karo
code = code.replace(
    'const clearAll = () => {',
    'const clearAll = async () => {'
)
code = code.replace(
    'saveProblems([]);',
    'await Promise.all(problems.map(p => deleteDoc(doc(db, "problems", p.id))));'
)

# 7. onSnapshot se localStorage fallback hatao
code = re.sub(r'\s*const raw\s*=\s*localStorage\.getItem\("gram-seva:problems"\);.*?if \(raw\)\s*setProblems\(JSON\.parse\(raw\)\);', '', code, flags=re.DOTALL)

open('src/App.tsx', 'w').write(code)
print("Done!")
print("deleteDoc imported:", 'deleteDoc' in code[:600])
print("setDoc for add:", 'setDoc(doc(db, "problems"' in code)
print("updateDoc for update:", 'updateDoc(doc(db, "problems"' in code)
print("deleteDoc for delete:", 'deleteDoc(doc(db, "problems"' in code)
