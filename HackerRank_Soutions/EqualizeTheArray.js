//Equalize the Array
function equalizeArray(arr) {
  let c = {},
      m = 0

  for (let i = arr.length; i-- > 0;) {
    let a = arr[i]

    if (isNaN(c[a]))
      c[a] = 0

    if (++c[a] > m)
      m = c[a]
  }

  return arr.length - m
}