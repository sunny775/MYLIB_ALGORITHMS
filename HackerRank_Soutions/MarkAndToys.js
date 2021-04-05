//Mark and Toys
function maximumToys(prices, k) {
  const sortedPrices = prices.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < sortedPrices.length; i += 1) {
    total += sortedPrices[i];
    if (total > k) {
      return i;
    }
  }
  return sortedPrices.length;
}