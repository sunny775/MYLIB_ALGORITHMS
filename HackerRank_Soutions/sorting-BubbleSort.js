//sorting-Bubble sort
function countSwaps(a) {
  const length = a.length;
  let swapTimes = 0
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - 1; j += 1) {
      if (a[j] > a[j + 1]) {
        swapTimes += 1;
        a[j] += a[j + 1];
        a[j + 1] = a[j] - a[j + 1];
        a[j] = a[j] - a[j + 1];
      }
    }
  }
  console.log(`Array is sorted in ${swapTimes} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[length - 1]}`);
}