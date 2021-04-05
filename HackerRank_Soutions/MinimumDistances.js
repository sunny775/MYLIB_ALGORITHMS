//Minimum Distances
function minimumDistances(a) {
  let min = Number.MAX_SAFE_INTEGER,
      m = new Map()

  for (let i = a.length; i-- > 0;) {
    let e = a[i],
        l = m.get(e)

    if (l) 
      min = Math.min(min, Math.abs(i - l))

    m.set(e, i)
  }

  return min == Number.MAX_SAFE_INTEGER ? -1 : min
}