//Army Game
function gameWithCells(n, m) {
  return ((n + (n % 2)) * (m + (m % 2))) / 4
}