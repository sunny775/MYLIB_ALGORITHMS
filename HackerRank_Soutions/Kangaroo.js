//Kangaroo
function kangaroo(x1, v1, x2, v2) {
  while (!((x1 < x2 && v1 <= v2) || (x1 > x2 && v1 >= v2))) {
    if (x1 === x2) {
      return 'YES'
    }

    x1 += v1
    x2 += v2
  }
  return 'NO'
}