//Frequency Queries
function freqQuery(queries) {
  const numMap = {};
  const freqMap = {};
  const length = queries.length;
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const [type, data] = queries[i];
    if (type === 3) {
      if (freqMap[data] > 0) {
        result.push(1);
      } else {
        result.push(0);
      }
    } else {
      if (!numMap[data]) {
        numMap[data] = 0;
      }
      if (!freqMap[numMap[data]]) {
        freqMap[numMap[data]] = 0;
      }
      if (freqMap[numMap[data]] > 0) {
        freqMap[numMap[data]] -= 1;
      }
      if (type === 1) {
        numMap[data] += 1;
      }
      if (type == 2 && numMap[data] > 0) {
        numMap[data] -= 1;
      }
      if (!freqMap[numMap[data]]) {
        freqMap[numMap[data]] = 0;
      }
      freqMap[numMap[data]] += 1;
    }
  }
  return result;
}
