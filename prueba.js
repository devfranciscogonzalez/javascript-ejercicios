function manufacture(gifts, materials) {
  // Code here
  let arr = [];
  for (let gif of gifts) {
    let gifArr = gif.split("");
    console.log(gifArr);

    let aux = gifArr.every((e) => {
      return materials.includes(e);
    });

    if (aux) arr.push(gif);
  }

  return arr;
}
const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(gifts, materials));
