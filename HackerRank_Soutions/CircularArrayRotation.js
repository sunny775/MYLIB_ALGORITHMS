//Circular Array Rotation
function circularArrayRotation(a, k, queries) {

  let r = []

  for (let i = queries.length; i-- > 0;) {
    r.unshift(a[(a.length - (k % a.length) + queries[i]) % a.length])
  }

  return r
}