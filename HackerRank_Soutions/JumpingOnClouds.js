//Jumping on Clouds
function jumpingOnClouds(c) {
    let count = 0;
    let i = 0;

    while (true) {
        if (i + 2 < c.length && c[i + 2] == 0) {
            i += 2;
        } else if (i + 1 < c.length) {
            i++;
        } else {
            break;
        }
        count++;
    }
    return count;
}
//===========================================>
function jumpingOnClouds(c) {

  let j = 0;

  for (let i = c.length; i-- > 1; ++j) {
    if (c[i - 2] == 0)
      --i
  }

  return j
}