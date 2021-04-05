//Non-Divisible Subset
function nonDivisibleSubset(k, S) {

  let c = [0],
      a = 0

  for (let i = S.length; i-- > 0;) {

    let r = S[i] % k

    if (isNaN(c[r])) {
      c[r] = 1
    } else {
      ++c[r]
    }
  }

  let m = 0

  for (let i = 1; k > 2 * i; ++i) {

    let c1 = c[i],
        c2 = c[k - i]

    m += Math.max(isNaN(c1) ? 0 : c1, isNaN(c2) ? 0 : c2)
  }

  if (c[0] > 0)
    ++m

  if ((k & 1) == 0 && c[k >> 1] > 0)
    ++m

  return m
}