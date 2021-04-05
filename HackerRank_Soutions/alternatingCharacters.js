//Alternating Characters
function alternatingCharacters(s) {
  let total = 0;
  let nextMap = { A: 'B', B: 'A' };
  let next = nextMap[s[0]];
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === next) {
      next = nextMap[s[i]];
    } else {
      total += 1;
    }
  }
  return total;
}