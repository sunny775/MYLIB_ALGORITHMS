//Staircase
function staircase(n) {

  for (var i = n; i-- > 0;) {
    let s = ''
    for (let j = 0; j < n; ++j) {
      s += j >= i ? '#' : ' '
    }
    console.log(s)
  }

}