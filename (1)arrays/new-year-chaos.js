
// Complete the minimumBribes function below.
function minimumBribes(q) {
  let moves = 0;
  const temp = [];
  const length = q.length;
  for (let i = 0; i < length; i += 1) {
    temp[i] = i + 1;
  }
  for (let i = 0; i < length; i += 1) {
    const current = q[i];
    const gap = current - i - 1;
    if (gap > 2) {
      console.log('Too chaotic');
      return;
    } else if (gap == 2 || i + 2 < length && current === temp[i + 2]) {
      moves += 2;
      temp[i + 2] = temp[i + 1];
      temp[i + 1] = temp[i];
      temp[i] = current;
    } else if (gap == 1 || i + 1 < length && current === temp[i + 1]) {
      moves += 1;
      temp[i + 1] = temp[i];
      temp[i] = current;
    }
  }

  console.log(moves);
}