//Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
  let c = 0

  for (let i = n; i-- > 0;) {
    for (let j = i + n; j-- > i + 1;) {
      if (((ar[i] + ar[j]) % k === 0)) {
        ++c
      }
    }
  }

  return c
}