//Utopian Tree
function utopianTree(n) {
  return ~(~1 << (n >> 1)) << n % 2
}