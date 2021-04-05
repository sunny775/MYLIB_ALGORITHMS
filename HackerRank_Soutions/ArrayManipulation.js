//Array Manipulation
function arrayManipulation(n, queries) {
  let max = 0;
  const arr = [0];
  for (let i = 0; i < queries.length; i += 1) {
    const start = queries[i][0] - 1;
    const end = queries[i][1];
    const summand = queries[i][2];
    if (!arr[start]) {
      arr[start] = summand;
    } else {
      arr[start] += summand;
    }
    if (!arr[end]) {
      arr[end] = 0 - summand;
    } else {
      arr[end] -= summand;
    }
  }
  for (let i = 1; i < n; i += 1) {
    if (!arr[i]) {
      arr[i] = 0;
    }
    arr[i] += arr[i - 1];
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}