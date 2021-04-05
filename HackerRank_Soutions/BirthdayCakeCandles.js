//Birth Day Cake Candles
function birthdayCakeCandles(ar) {
  let max = Math.max(...ar)
  return ar.filter((v) => v === max).length
}