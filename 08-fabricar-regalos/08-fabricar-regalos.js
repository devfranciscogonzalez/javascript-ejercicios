const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

function manufacture(gifts, materials) {
  let arr = [];
  for (let gif of gifts) {
    let gifArr = gif.split("");
    let aux = gifArr.every((e) => {
      return materials.includes(e);
    });

    if (aux) arr.push(gif);
  }
  return arr;
}

// Con filter

function manufactureFilter(gifts, materials) {
  return gifts.filter((gift) =>
    gift.split("").every((character) => materials.includes(character))
  );
}

console.log(manufacture(gifts, materials));
console.log(manufactureFilter(gifts, materials));
