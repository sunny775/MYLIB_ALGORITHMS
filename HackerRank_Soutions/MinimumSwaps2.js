//Minimum Swaps 2

function minimumSwaps(arr) {
  let s = 0

  for (let i = 0; i < arr.length; ++i) {

    let a = arr[i]

    if (a == i + 1) 
      continue

    // Swap
    arr[i] = arr[a - 1]
    arr[a - 1] = a

    ++s
    --i
  }

  return s
}