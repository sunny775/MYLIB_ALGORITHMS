
// Complete the rotLeft function below.
function rotLeft(a, d) {
  const length = a.length;
  const rtimes = d % length;
  if (rtimes > 0) {
    a.splice(0, 0, ...a.splice(rtimes, length - rtimes));
  }
  return a;
}
