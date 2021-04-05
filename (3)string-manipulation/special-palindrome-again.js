
// Complete the substrCount function below.
function substrCount(n, s) {
  let total = n;
  for (let i = 0; i < n; i += 1) {
    const current = s.charAt(i);
    let currentRepeat = 1;
    let j = i + 1;
    while (j < n) {
      if (s.charAt(j) === current) {
        total += 1;
        currentRepeat += 1;
        j += 1;
      } else {
        break;
      }
    }
    j = j + 1;
    while (j < n) {
      if (s.charAt(j) === current) {
        currentRepeat -= 1;
        j += 1;
        if (currentRepeat === 0) {
          total += 1;
          break;
        }
      } else {
        break;
      }
    }
  }
  return total;
}
