//Strings-Making Anagrams
function makeAnagram(a, b) {
  const charMapA = {};
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    if (!charMapA[a[i]]) {
      charMapA[a[i]] = 1;
    } else {
      charMapA[a[i]] += 1;
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (!charMapA[b[i]]) {
      total += 1;
    } else {
      charMapA[b[i]] -= 1;
    }
  }
  for (const value of Object.values(charMapA)) {
    total += value;
  }
  return total;
}