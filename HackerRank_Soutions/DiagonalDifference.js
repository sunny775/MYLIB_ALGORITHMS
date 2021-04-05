//Diagonal Difference
function diagonalDifference(arr) {
  let ltr = 0,
    rtl = arr.length,
    ltrd = 0,
    rtld = 0

  for (let i = 0; i < arr.length; i++) {
    ltrd += arr[i][ltr++]
    rtld += arr[i][--rtl]
  }

  return Math.abs(ltrd - rtld)
}