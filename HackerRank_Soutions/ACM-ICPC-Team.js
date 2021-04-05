//ACM ICPC Team
function acmTeam(topic) {
  // https://en.wikipedia.org/wiki/Hamming_weight
  function orBigHammingWeight(x, y) {
    let c = 0

    for (let i = 0; i < x.length; i += 32) {
      let n = parseInt(x.substring(i, i + 32), 2) | parseInt(y.substring(i, i + 32), 2)
      n = n - ((n >> 1) & 0x55555555)
      n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
      c += (((n + (n >> 4)) & 0x0F0F0F0F) * 0x01010101) >> 24
    }

    return c
  }

  let m = 0, 
      w = {}

  for (let i = topic.length - 1; i-- > 0;) {
    let b = topic[i]

    for (let j = topic.length; j-- > i + 1;) {
      let s = orBigHammingWeight(b, topic[j])

      if (m < s)
        m = s

      if (isNaN(w[s]))
        w[s] = 0

      ++w[s]
    }
  }

  return [m, w[m]]
}