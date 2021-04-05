//Arrays:LeftRotation
function rotLeft(a, d) {
  a = a.concat(a.splice(0,d));
  return a;
}