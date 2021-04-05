//Permutation/Sequence equation
function permutationEquation(p) {
  let r = []

  for (let i = p.length + 1; i-- > 1;) {
    r.unshift(p.indexOf(p.indexOf(i) + 1) + 1)
  }

  return r
}