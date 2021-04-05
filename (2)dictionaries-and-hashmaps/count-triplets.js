
// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let total = 0;
  const num2Map = {};
  const num3Map = {};
  const length = arr.length;
  for (let i = 0; i < length; i += 1) {
    const current = arr[i];
    if (num3Map[current] > 0) {
      total += num3Map[current];
    }
    if (num2Map[current] > 0) {
      if (!num3Map[current * r]) {
        num3Map[current * r] = 0;
      }
      num3Map[current * r] += num2Map[current]
    }
    if (!num2Map[current * r]) {
      num2Map[current * r] = 0;
    }
    num2Map[current * r] += 1;
  }
  return total;
}

