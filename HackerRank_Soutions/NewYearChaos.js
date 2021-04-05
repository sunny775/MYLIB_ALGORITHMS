//New Year Chaos
function minimumBribes(q) {

  let n = q.length

  let c = 0
  for (let p = n; p-- > 0;) {
    if (q[p] - (p + 1) > 2) {
      c = "Too chaotic"
      break;
    }
    for (let j = Math.max(q[p]) - 2; j < p; j++) {
      if (q[j] > q[p])
        c++
    }
  }
  console.log(c)
}