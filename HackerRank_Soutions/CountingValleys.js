//CountingValleys

function countingValleys(n, s) {
  let h = 0;
  let count = 0;
  
  for(var i = 0; i < n; i++) {
    if(s.charAt(i) === "D" && h == 0) {
      count++;
      h--;
    } else if (s.charAt(i) === "D" && h !== 0) {
      h--;
    } else if (s.charAt(i) === "U") {
      h++;
    }
  }
  return count;
}
//==========================================>
function countingValleys(n, s) {

  let l = 0,
      v = 0

  for (let i = n; i-- > 0;) {
    if (s.charAt(i) === 'U') {
      if (l++ == 0)
        ++v
    } else {
      --l
    }
  }

  return v
}