
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let sum = 0;
  const checked = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (checked[i]) {
      continue;
    }
    let next = i;
    while (!checked[next]) {
      checked[next] = true;
      if (arr[next] != next + 1) {
        next = arr[next] - 1;
        if (!checked[next]) {
          sum += 1;
        }
      }
    }
    if (sum == arr.length - 1) {
      break;
    }
  }
  return sum;
}