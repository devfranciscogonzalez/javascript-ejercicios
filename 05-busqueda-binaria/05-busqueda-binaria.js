let arraySort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Secuencial
function searchBinary(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    }
    if (arr[midIndex] < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return -1;
}

console.log(searchBinary(arraySort, 10));

// Recursivo

function searchBinaryRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const midIndex = Math.floor((left + right) / 2);

  if (arr[midIndex] === target) {
    return midIndex;
  }
  if (arr[midIndex] < target) {
    return searchBinaryRecursive(arr, target, midIndex + 1, right);
  } else {
    return searchBinaryRecursive(arr, target, left, midIndex - 1);
  }
}

console.log(searchBinaryRecursive(arraySort, 10));
