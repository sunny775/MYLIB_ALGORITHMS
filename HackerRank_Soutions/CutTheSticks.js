//Cut the Sticks
function cutTheSticks(arr) {
  let a = []

  arr = arr.sort((a, b) => a - b)

  for (let i = arr.length; i-- > 0;) {
    if (arr[i] != arr[i - 1]) {
      a.unshift(arr.length - i)
    }
  }

  return a
}