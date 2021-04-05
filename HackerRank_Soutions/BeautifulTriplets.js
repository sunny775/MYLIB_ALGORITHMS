//Beautiful Triplets
function beautifulTriplets(d, arr) {

  let m = new Map(),
      c = 0

  for (let i = 0; i < arr.length; ++i) {
    let e = arr[i],
        a = m.get(e - d),
        b = m.get(e - 2 * d)

    if (a && b)
      c += a * b

    let v = m.get(e)

    if (v)
      m.set(e, ++v)  
    else
      m.set(e, 1)
  }

  return c
}