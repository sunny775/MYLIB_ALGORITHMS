//Find Digits
function findDigits(n) {
  let a = n.toString().split(''),
      r = 0

  for (let i = a.length; i-- > 0;) {
    if (n % Number(a[i]) == 0)
      ++r
  }

  return r
}