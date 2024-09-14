function decode(message) {
  let stack = [];

  for (let char of message) {
    if (char === ")") {
      let temp = [];
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        temp.push(stack.pop());
      }
      stack.pop();

      for (let reversedChar of temp) {
        stack.push(reversedChar);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

// Pruebas
// const a = decode("hola (odnum)");
// console.log(a); // hola mundo

// const b = decode("(olleh) (dlrow)!");
// console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
