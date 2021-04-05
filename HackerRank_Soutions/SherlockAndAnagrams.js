//Sherlock and Anagrams
function sherlockAndAnagrams(s) {
  const length = s.length;
  const strMap = {};
  let pairs = 0;
  for (let i = 0; i < length; i += 1) {
    for (let j = i + 1; j <= length; j += 1) {
      const substr = s.substring(i, j);
      const subarray = substr.split('');
      const sortedSubarray = subarray.sort();
      const sortedStr = sortedSubarray.join('');
      if (!strMap[sortedStr]) {
        strMap[sortedStr] = 1;
      } else {
        strMap[sortedStr] += 1;
      }
    }
  }
  for (const [key, value] of Object.entries(strMap)) {
    if (value > 1) {
      pairs += value * (value - 1) / 2;
    }
  }
  return pairs;
}