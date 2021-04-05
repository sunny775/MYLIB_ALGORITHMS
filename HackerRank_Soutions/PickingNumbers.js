//Picking Numbers
function pickingNumbers(a) {

  let c = [],
      m = 0

  for (let i = a.length; i-- > 0;) {
    let v = a[i]
    if (isNaN(c[v]))
      c[v] = 1
    else
      ++c[v]
  }

  for (let i = c.length; i-- > 1;) {
    let v = c[i - 1]
    v = !isNaN(v) ? v + c[i] : c[i]

    if (v > m)
      m = v
  }

  return m
}