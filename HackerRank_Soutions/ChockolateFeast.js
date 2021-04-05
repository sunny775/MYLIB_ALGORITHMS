//Chockolate Feast
function chocolateFeast(n, c, m) {
  return Math.ceil(Math.floor(n / c) / (1 - (1 / m))) - 1
}