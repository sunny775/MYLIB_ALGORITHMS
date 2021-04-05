//Beautiful Days at the Movies
function beautifulDays(i, j, k) {
  let r = 0

  for (let l = j + 1; l-- > i;) {
    if (Number.isInteger((Math.abs(l - parseInt((l.toString()).split('').reverse().join('')))) / k)) {
      ++r
    }
  }

  return r
}