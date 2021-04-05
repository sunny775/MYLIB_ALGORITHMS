//Merge sort-counting inversions
function countInversions(arr) {
  let swapTimes = 0;

  const merge = (arrLeft, arrRight) => {
    const sortedArray = [];
    const leftLength = arrLeft.length;
    const rightLength = arrRight.length;
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftLength && rightIndex < rightLength) {
      if (arrLeft[leftIndex] > arrRight[rightIndex]) {
        sortedArray.push(arrRight[rightIndex]);
        rightIndex += 1;
        swapTimes += leftLength - leftIndex;
      } else {
        sortedArray.push(arrLeft[leftIndex]);
        leftIndex += 1;
      }
    }
    while (leftIndex < leftLength) {
      sortedArray.push(arrLeft[leftIndex]);
      leftIndex += 1;
    }
    while (rightIndex < rightLength) {
      sortedArray.push(arrRight[rightIndex]);
      rightIndex += 1;
    }
    return sortedArray;
  }

  const mergeSort = (array) => {
    const arrayLength = array.length;
    if (arrayLength === 1) {
      return array;
    }
    const mid = parseInt(arrayLength / 2);
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
  }

  mergeSort(arr);
  return swapTimes;
}
