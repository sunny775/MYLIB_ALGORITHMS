//Viral Advertising
function viralAdvertising(n) {
  let r = 0

  for (let i = n + 1; i-- > 1;) {
    r += Math.ceil(1.08151366859 * Math.pow(1.5, i))
  }

  return r
}