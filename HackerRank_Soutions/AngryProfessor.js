//Angry Professor
function angryProfessor(k, a) {
  
  for (let i = a.length; i-- > 0;) {
    if (a[i] <= 0) {
      --k
    }
  }

  return k <= 0 ? 'NO' : 'YES'
}