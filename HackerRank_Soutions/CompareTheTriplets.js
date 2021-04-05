//Compare the Triplets
function compareTriplets(a, b) {
  let ap = 0,
    bp = 0

  for (let i = a.length; i-- > 0;) {
    if (a[i] > b[i])
      ap++
    else if (a[i] < b[i])
      bp++
  }

  return [ap, bp]
}