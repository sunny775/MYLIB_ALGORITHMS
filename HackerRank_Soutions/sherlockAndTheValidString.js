//Sherlock and the Valid String
function isValid(s) {
  const charArray = Array(26).fill(0);
  for (let i = 0; i < s.length; i += 1) {
    charArray[s.charCodeAt(i) - 97] += 1;
  }
  let flag = 0;
  let oneGap = false;
  for (let i = 0; i < 26; i += 1) {
    if (charArray[i] > 0) {
      if (flag < 1) {
        flag = charArray[i];
      }
      if (flag !== charArray[i]) {
        if (Math.abs(flag - charArray[i]) === 1) {
          if (!oneGap) {
            oneGap = true;
            continue;
          }
        }
        if (charArray[i] === 1) {
          if (!oneGap) {
            oneGap = true;
            continue;
          }
        }
        return 'NO';
      }
    }
  }
  return 'YES';
}
