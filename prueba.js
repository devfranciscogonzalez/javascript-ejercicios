let arr = [1, 2, 3, 2, 1, 4, 4];

function findFirstRepeatedMap(gifts) {
  let seen = new Map();

  for (let i = 0; i < gifts.length; i++) {
    if (seen.has(gifts[i])) {
      return gifts[i];
    }
    seen.set(gifts[i], true);
  }

  return -1;
}

console.log(findFirstRepeatedMap(arr));

let obj = {};

console.log(Object.prototype);