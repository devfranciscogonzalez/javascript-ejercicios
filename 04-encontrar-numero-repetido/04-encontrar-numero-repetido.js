const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
const firstRepeatedIdMap = findFirstRepeatedMap(giftIds);
console.log(firstRepeatedId);
console.log(firstRepeatedIdMap);

// Utilizando for: Complejidad O(n^2) debido a los dos bucles anidados
function findFirstRepeated(gifts) {
  let value = 0;
  let positionCount = 0;

  for (let i = 0; i < gifts.length - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < gifts.length; j++) {
      if (gifts[i] === gifts[j]) {
        if (positionCount === 0) {
          positionCount = count;
          value = gifts[j];
          console.log(value);
        } else if (positionCount > count && count && gifts[j]) {
          value = gifts[j];
          console.log(value);

          positionCount = count;
        }
      }
      count++;
    }
  }

  return value || -1;
}

// Utilizando un MAP: Complejidad O(n)

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
